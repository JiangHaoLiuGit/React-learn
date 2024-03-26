// HOC高阶组件,对组件中的公共逻辑进行封装
import React from 'react'
import {A} from './component/ComAB'
import WithLog from './HOC/WithLog'
let str = "郝煜"

let ALogin = WithLog(A,str)
export default class App extends React.Component{
  myRef = React.createRef()
  componentDidMount(){
    console.log("this.myRef:",this.myRef);
  }
  render(){
    return (
      // 这里的ref指向不是ALogin组件,而是通过React.forwardRef()改变ref指向,指向的是ALogin中的A组件,这样就能
      // 实现Ref的转发,有点类似于穿透,在react中就是这样解决获取高阶组件中子组件的方法困难的弊端.
      <ALogin ref={this.myRef} text={"myRef"} />
    )
  }
}
//注释一
// 注释二
// 注释三