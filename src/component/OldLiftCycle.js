import React, { Component } from 'react'

export default class OldLiftCycle extends Component {
    constructor(props){
        super(props)
        this.state = {
            n:props.number
        }
        console.log("我是构造函数constructor")
    }
    componentWillMount = () => {// (新版本被移除)
        console.log("我是componentWillMount生命周期,在render生成之前,构造函数constructor之后执行")
    }
    componentDidMount = () => {
        console.log("写ajax的地方")
        console.log("我是componentDidMount","挂载阶段完成(或者说页面渲染完成了)")
    }
    componentWillReceiveProps = (nextProps) => {// (新版本被移除)
        console.log("componentWillReceiveProps","接受到新的属性值变化",this.props,nextProps)
    }
    shouldComponentUpdate = (nextProps,nextState) => {
        // this.props和this.state是旧的状态,而nextProps和nextState是新的状态
        console.log("shouldComponentUpdate",this.props,nextProps,this.state,nextState)
        return true
    }
    
    componentWillUpdate = () => {// (新版本被移除)
        console.log("componentWillUpdate,组件即将被重新渲染,目前很少用的api")
    }
    
    componentWillUnmount = () => {
        console.log("componentWillUnmount,销毁的生命周期")
    }
    render() {
        // 其中的div其实就是一个js生成的dom对象(虚拟dom)相当于 React.createElement(<div>...</div>)
        console.log("render","渲染返回的React元素会被挂载到虚拟的DOM树上")
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
