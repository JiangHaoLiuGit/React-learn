//ref转发的用法,把ref映射到类组件或者函数组件中去,因为<NewA ref={this.ARef} name="郝煜"/>获取这个ref里面的h1元素很明显获取不到,

import React from 'react'

// function A(props,ref){
//   return (
//     <>
//       <h1 ref={ref}>组件a</h1>
//       <p>
//         {props.name}
//       </p>
//     </>
//   )
// }
class A extends React.Component{
  render(){
    return(
      <>
        <h1 ref={this.props.ref1}>组件a</h1>
       <p>
         {this.props.name}
       </p>
      </>
    )
  }
}
// const NewA = React.forwardRef(A);
const NewA = React.forwardRef((props,ref)=>{
  return <A {...props} ref1={ref}/>
})
export default class App extends React.Component{
  ARef = React.createRef();
  componentDidMount(){
    console.log("a1",this.ARef)
  }
  render(){
    return (
      <div>
        <NewA ref={this.ARef} name="郝煜"/>
        {/* <A  ref={this.ARef}/> */}
      </div>
    )
  }
}