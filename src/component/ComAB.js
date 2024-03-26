import React from 'react'

export class A extends React.Component {
    
    render() {
        return (
            <>
                <h1 ref={this.props.ref1}>我是{this.props.text}</h1>
            </>
        )
    }
}

export class B extends React.Component {
    
    render() {
        return (
            <>
                <h1>我是{this.props.text}</h1>
            </>
        )
    }
}