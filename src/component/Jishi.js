import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class jishi extends Component {
  static propTypes = {
    times:PropTypes.number,
    onOver:PropTypes.func.isRequired
  }
  static defaultProps = {
    times:5
  }
  constructor(props){
    super(props);
    console.log("props",props)
    this.state = {
      number:this.props.times
    }
    this.timer = setInterval(()=>{
      if(this.state.number === 0){
        clearInterval(this.timer);
        this.props.onOver && this.props.onOver()
        return
      }
      this.setState({
        number:this.state.number-1
      })
    },1000)
  }
  
  render(){
      return (
          <h1>剩余时间还剩{this.state.number}</h1>
      )
  }
}
