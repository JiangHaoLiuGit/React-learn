// 类组件有自己的状态,调用this.setState的时候会重新渲染rander,然后rander里面有b组件,所以也会重新渲染b组件实例,b里面有c,所以也会跟着渲染c组件
// 因为react是MVC框架,所以靠c就是controller控制数据视图关系的,controller通过this.setState这个api控制
import React from 'react'
export default class A extends React.Component {
    constructor(props){
        super(props)
        // 初始化状态 
        this.state={
            left:this.props.times || 100
        }
        this.timer = setInterval(()=>{
            if(this.state.left - 1 < 0){
                clearInterval(this.timer);
                return
            }
            this.setState({
                left:this.state.left - 1
            });//重新设置状态,触发自动的重新渲染函数
        },1000)
    }
    render(){
        return (
            <div>
                <h1>剩余时间还剩{this.state.left}</h1>
                <B n={this.state.left} />
            </div>
        )
    }
}
function B(props){
 return (
    <div>
        B组件:{props.n}
        <C n={props.n} />
    </div>
 )
}
function C(props){
    return (
       <div>
           C组件:{props.n}
       </div>
    )
}