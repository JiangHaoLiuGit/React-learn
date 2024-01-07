// 其实很简单的一个例子,小球在二维空间移动,就是x轴和y轴,x轴考虑运动到最大值(浏览器宽度)然后--,如果小于0那就++,y轴同理,很简单吧
import React, { Component } from 'react'
import '../index.css'

export default class Baill extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            xCoor:props.xCoor || 100,
            yCoor:props.yCoor || 100,
            left:props.left || 0,
            top:props.top || 0
        }
        let deep = 16
        setInterval(()=>{
            //根据速度改变当前left即是xDis
            let xDis = this.state.xCoor * deep / 1000
            //根据速度改变当前Top即是yDis
            let yDis = this.state.yCoor * deep / 1000
            let newLeft = xDis + this.state.left
            let newTop = yDis + this.state.top
            if(newLeft <= 0){
                //球到了最左边
                newLeft = 0
                this.setState({
                    xCoor:-this.state.xCoor//横坐标反向
                })
            }
            if(newLeft > document.documentElement.clientWidth - 100){
                //球到了最左边
                newLeft = document.documentElement.clientWidth - 100
                this.setState({
                    xCoor:-this.state.xCoor//横坐标反向
                })
            }

            if(newTop <= 0){
                //球到了最左边
                newTop = 0
                this.setState({
                    yCoor:-this.state.yCoor//横坐标反向
                })
            }
            if(newTop > document.documentElement.clientHeight - 100){
                //球到了最左边
                newTop = document.documentElement.clientHeight - 100
                this.setState({
                    yCoor:-this.state.yCoor//横坐标反向
                })
            }
            this.setState({
                left:newLeft,
                top:newTop
            })
        },deep)
        
    }
    render() {
        return (
        <div className='baill' style={
            {
                backgroundColor:this.props.bg,
                left:this.state.left,
                top:this.state.top
            }
        }>
            
        </div>
        )
    }
}
