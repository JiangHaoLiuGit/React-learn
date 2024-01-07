import React, { Component } from 'react'
import types from '../../../utils/commonTypes'
import propTypes from 'prop-types'
import withDataGroup from '../HOC/withDataGroup'

class RadioBox extends Component {
  static defaultProps = {
    infos:[],
    value:""
  }
  static propTypes = {
    infos:types.groupDatas.isRequired,
    name:propTypes.string.isRequired,
    value:propTypes.string.isRequired,
    onChange:propTypes.func.isRequired
  }
  handleChange = e => {
      this.props.onChange && this.props.onChange(e.target.value,this.props.name)
      
  }
  
  render() {
    let bs = <label style={{
      display:"block"
    }}>
        <input
         type="radio"
         name={this.props.name}
         value={this.props.infos.value}
         checked={this.props.value === this.props.infos.value}
         onChange={this.handleChange}
        />{this.props.infos.text}
    </label>
    return (
      <div>
        {bs}
      </div>
    )
  }
}
export default withDataGroup(RadioBox)
