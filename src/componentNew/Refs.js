import React, { Component } from 'react'

class A extends Component{
    Afun = () => {
        console.log("我是A组件方法")
    }
    render(){
        return(
            <h1>组件A</h1>
        )
    }
}

export default class Refs extends Component {
    constructor(props){
        super(props)
        this.txt = React.createRef()
        this.compA = React.createRef()
    }
    jujiao = ()=>{
        console.log(this)
        console.log(this.compA)
        this.txt.current.focus();
        this.compA.current.Afun();
    }
    render() {
        return (
        <div>
            {/* <input ref={this.txt} type="text" /> */}
            <input ref={el => {
                console.log("函数被调用")
                this.txt = el
            }} type="text" />
            <button onClick={this.jujiao}>聚焦</button>
            {/* 这个是类组件可以用ref,如果是函数组件就不能了 */}
            <A ref={this.compA}/>
        </div>
        )
    }
}
