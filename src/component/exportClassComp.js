import React from 'react'

export default class MyClassComp extends React.Component{
    render(){
        return <h1>我是Class组件{this.props.name}</h1>
    }
}
