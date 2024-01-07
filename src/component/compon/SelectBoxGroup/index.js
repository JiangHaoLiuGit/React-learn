import React, { Component } from 'react'
import types from '../../../utils/commonTypes'
import propTypes from 'prop-types'
import withDataGroup from '../HOC/withDataGroup'

class SelectBoxGroup extends Component{
  static defaultProps = {
    datas:[],
    value:""
  }
  static propTypes = {
    datas:types.groupDatas.isRequired,
    name:propTypes.string.isRequired,
    value:propTypes.string.isRequired,
    onChange:propTypes.func.isRequired
  }
  
  

  render() {
    let bs = <option value={this.props.infos.value}>{this.props.infos.text}</option>
    return (
      <>
      {bs}
      </>
        // {/* <select name="" onChange={this.handleChange}> */}
          
        // {/* </select> */}
    )
  }
}
let OptionGroup = withDataGroup(SelectBoxGroup)
export default class Select extends Component {
  static propTypes = {
    name:propTypes.string.isRequired,
    value:propTypes.string.isRequired,
    onChange:propTypes.func.isRequired
  }
  handleChange = e => {
    this.props.onChange && this.props.onChange(e.target.value,this.props.name)
  }
  render (props){
    return (
      <select name="" onChange={this.handleChange} value={this.props.value}>
        <OptionGroup {...this.props}></OptionGroup>
      </select>
    )
  }
}