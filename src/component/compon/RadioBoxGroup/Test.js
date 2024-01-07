import React, { Component } from 'react'
import RadioBoxGroup from './index'
import {fetchAllStudents} from '../../../services/student'

export default class Test extends Component {
    state = {
        datas:[],
        name:"loves",
        value:""
    }
  async componentDidMount(){
    
    let stu = await fetchAllStudents()
    this.setState({
      datas:stu.map(item=>(
        {
          value:item.id.toString(),
          text:item.title
        }
      ))
    })
    // this.state.datas = 
  }
  render() {
    return (
      <div>
        <RadioBoxGroup {...this.state}
            onChange={val => {
                this.setState({
                    value:val
                })
            }}
        />
        <button onClick={()=>{
          console.log(this.state.value)
        }}>点击同步</button>
      </div>
    )
  }
}
