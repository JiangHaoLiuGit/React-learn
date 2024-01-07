import React, { Component } from 'react'
import Student from './Student'
export default class StudentList extends Component {
  render() {
    console.log("props",this.props)
    let liArr = this.props.stuList.map(item=><Student key={item.id} {...item}/>)
    return (
      <ul>
        {liArr}
      </ul>
    )
  }
}
