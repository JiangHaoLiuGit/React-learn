import React, { Component } from 'react'
import Model from './compon/Model'

export default class TestModel extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            overModel:false,
            url:"https://t12.baidu.com/it/u=1369097242,166006122&fm=30&app=106&f=JPEG?w=500&h=400&s=5922D35B56F24F968E9961360300C0C2"
        }
    }
    openModel = () => {
        this.setState({
            overModel:true
        })
    }

    closeModel = () => {
        this.setState({
            overModel:false
        })
    }
  render() {
    return (
      <div>
        <img src={this.state.url} alt="" style={{
            width:'200px',
            cursor:'pointer'
        }} onClick={this.openModel}/>
        <Model url={this.state.url} overModel={this.state.overModel} closeModel={this.closeModel} bg="rgba(255,0,0,.5)"/>
      </div>
    )
  }
}
