import React, { Component } from 'react'

export default class Comp extends Component {
    constructor(props){
        super(props)
        this.state = {
            number: this.props.number
        }
        this.adds = this.adds.bind(this)

        //同步操作是没有这种情况的,比如
        // setInterval(()=>{
        //     this.setState({
        //         number:this.state.number+1
        //     })
        //     this.setState({
        //         number:this.state.number+1
        //     })
        //     this.setState({
        //         number:this.state.number+1
        //     })
        //     this.setState({
        //         number:this.state.number+1
        //     })
        // },1000)
    }
    //以下是html元素绑定的事件会出现这种情况,异步渲染操作
    adds = function (){
        //这样写三次是没有意义的,因为这三次每次获取的this.state.number都是0,都是变化之前的state
        // this.setState({
        //     number:this.state.number+1
        // },function () {
        //     //这里是react在异步操作后的异步回调,是在render渲染之后的异步操作
        //     console.log("里面1",this.state.number)
        // })
        // this.setState({
        //     number:this.state.number+1
        // },function () {
        //     console.log("里面2",this.state.number)
        // })
        // this.setState({
        //     number:this.state.number+1
        // },function () {
        //     console.log("里面3",this.state.number)
        // })

        //这样写是对的
        this.setState(prev=>{
            return {
                number:prev.number+1
            }
        },function () {
            //这里是react在异步操作后的异步回调,是在render渲染之后的异步操作
            console.log("里面1",this.state.number)
        })
        this.setState(prev=>{
            return {
                number:prev.number+1
            }
        },function () {
            console.log("里面2",this.state.number)
        })
        this.setState(prev=>{
            return {
                number:prev.number+1
            }
        },function () {
            console.log("里面3",this.state.number)
        })
        console.log("外面",this.state.number)//0 没有改变之前的值,因为这里是同步代码,而this.setState是异步代码,所以这里获取值是没有意义的,异步后面写同步获取结果没意义
    }
  render() {
    console.log("render")
    return (
      <div>
        <h1>{this.state.number}</h1>
        <button onClick={this.adds}>+</button>
      </div>
    )
  }
}
