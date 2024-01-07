import React, { Component } from 'react'
import types from '../../../utils/commonTypes'
import propTypes from 'prop-types'
import widthDataGroup from '../HOC/withDataGroup'

class CheckBox extends Component {
  constructor(props){
    super(props)
    console.log("props",this.props)
  }
  static defaultProps = {
    infos:{
      value:"",
      text:""
    },
    chooseDatas:[]
  }
  static propTypes = {
    infos:types.infos.isRequired,
    name:propTypes.string,
    chooseDatas:types.chooseDatas,
    onChange:propTypes.func
  }
  handleChange = e => {
    let newArr;
    if(e.target.checked){
        newArr = [...this.props.chooseDatas,e.target.value]
        
    }else{
        newArr = this.props.chooseDatas.filter(item => item !== e.target.value)
    }
    this.props.onChange && this.props.onChange(newArr)
  }
  
  render() {
    let bs = <label>
          <input type="checkbox"
          name={this.props.name}
          value={this.props.infos.value}
          onChange={this.handleChange}
          checked={this.props.chooseDatas.includes(this.props.infos.value)}
          ></input>
          {this.props.infos.text}
          <br/>
      </label>
    return (
      <div>
        {bs}
      </div>
    )
  }
}

export default widthDataGroup(CheckBox)
