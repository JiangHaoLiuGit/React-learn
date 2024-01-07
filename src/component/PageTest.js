import React, { Component } from 'react'
import Page from './Page'

// 为什么用类组件,因为需要处理状态,这个组件主要是为了储存分页状态,函数组件不行
export default class PageTest extends Component {
    constructor(props){
        super(props);
        this.state = {
            current:1,
            total:100,
            limit:9,
            panelNumber:5,
        }
    }
    onChange = (target,props) =>{
        this.setState({
            current:target
        })
    }
    render() {
        return (
            <Page 
                {...this.state}
                onChange={this.onChange}
            />
        )
    }
}
