import React, { Component } from 'react'

export default class NewLiftCycle extends Component {
    constructor(props){
        super(props)
        this.state = {
            n:props.number
        }
        console.log("我是构造函数constructor")
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        //可以获取最新的属性和状态,但不能改,因为不能获取this
        // return null
    }
    componentDidMount = () => {
        console.log("我是componentDidMount","挂载阶段完成(或者说页面渲染完成了),写ajax的地方")
    }
    
    shouldComponentUpdate = (nextProps,nextState) => {
        // this.props和this.state是旧的状态,而nextProps和nextState是新的状态
        console.log("shouldComponentUpdate",this.props,nextProps,this.state,nextState)
        return true
    }

    getSnapshotBeforeUpdate = (prevProps, prevState) => {
        // 获取最新的DOM状态,返回一个值,这个值会作为componentDidUpdate的第三个参数
        console.log("getSnapshotBeforeUpdate",prevProps,prevState)
        return 123;
    }

    componentDidUpdate = (prevProps, prevState, snapshot) => {
        // 组件更新完成之后调用,可以获取到最新的DOM状态
        console.log("componentDidUpdate",prevProps,prevState,snapshot)
    }
    

    componentWillUnmount(){
        console.log("componentWillUnmount,销毁的生命周期")
    }
    render() {
        // 其中的div其实就是一个js生成的dom对象(虚拟dom)相当于 React.createElement(<div>...</div>)
        console.log("render1","渲染返回的React元素会被挂载到虚拟的DOM树上")
        return (
        <div>
            <h1>我是属性number:{this.props.number}</h1>
            <h1>我是状态n:{this.state.n}</h1>
            <div>
                <button onClick={
                    ()=>{
                        this.setState({
                            n:this.state.n+1
                        })
                    }
                }>
                    状态+1
                </button>
            </div>
        </div>
        )
    }
}
