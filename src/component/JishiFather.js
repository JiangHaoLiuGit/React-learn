// 组件封装秒杀,组件仅仅只有倒计时功能(倒计时(通过自己类组件的状态(自身state)计时,不会改变props+倒计时完了之后调用父组件的方法),其他没有任何功能考虑
import React ,{Component} from 'react';
import Jishi from './Jishi'

export default class JishiFather extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            over:false
        }
        this.handleOver = this.handleOver.bind(this)
    }
    //这个方法在Jishi.js中可以打印出来的,方法在对象上,所以这个this在对象上,所以如果执行15行js的话这个this在对象上是找不到的over属性的
    //这个over只有在原型才有,所以要把this指向从对象上指向到原型才能生效,如果不改变this指向就会报错
    handleOver(){
        this.setState({
            over:true
        })
    }
    render(){
        let text = '秒杀正在进行中...'
        if(this.state.over){
            text = '秒杀已结束'
        }
        return (
            <div>
                <Jishi onOver={this.handleOver}/>
                <h2>{text}</h2>
            </div>
        )
    }
}