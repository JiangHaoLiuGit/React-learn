import React , {Component} from 'react'
import OldLiftCycle from './OldLiftCycle'

export default class AppOld extends Component {
    constructor(props){
        super(props)
        this.state = {
            number:0,
            over:true
        }
    }
    
    render(){
        let over = this.state.over? <OldLiftCycle number={this.state.number}/>:null
        return (
            <div>
                <h1>我是App组件</h1>
                {over}
                <div>
                    <button onClick={()=>{
                        this.setState(state=>({
                            number:state.number+1
                        }))
                    }}>属性+1</button>
                </div>
                
                <div>
                    <button onClick={()=>{
                        this.setState({
                            over:!this.state.over
                        })
                    }}>子组件隐藏/显示</button>
                </div>
            </div>
        )
    }
}