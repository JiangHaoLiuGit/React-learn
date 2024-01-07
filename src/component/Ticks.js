import React from 'react'
export default class Ticks extends React.Component {
    constructor(props){
        super(props)
        // 初始化状态 
        this.state={
            left:this.props.times
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
            <h1>剩余时间还剩{this.state.left}</h1>
        )
    }
}