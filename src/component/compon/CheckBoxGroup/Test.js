import React, { Component } from 'react'
import CheckBoxGroup from './index'
import {fetchAllStudents} from '../../../services/student'


export default class Test extends Component {
  state = {
    datas:[],
    chooseDatas:[],
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
        <CheckBoxGroup {...this.state}
            onChange={newArr => {
                this.setState({
                    chooseDatas:newArr
                })
            }}
        />
        <button onClick={()=>{
          console.log(this.state.chooseDatas)
        }}>点击</button>
      </div>
    )
  }
}
