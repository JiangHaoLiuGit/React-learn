import React from 'react'
import './index.css'
import PropTypes from 'prop-types'

ThreeLayout.defaultProps = {
    widthLeft:200,
    widthRight:200,
    minWidth:800,
    margin:0
}
ThreeLayout.propTypes = {
    minWidth:PropTypes.number,
    children:PropTypes.node,
    left:PropTypes.node,
    right:PropTypes.node,
    widthLeft:PropTypes.number,
    widthRight:PropTypes.number,
    margin:PropTypes.number,
}
export default function ThreeLayout(props) {
    
    return (
      <div className='box'>
        <div className="main"
            style={{
                minWidth:props.minWidth
            }}
        >
            {props.children}
        </div>
        <div className="aside-left"
            style={{
                width:props.widthLeft,
                marginRight:props.margin
            }}
        >{props.left}</div>
        <div className="aside-right"
            style={{
                width:props.widthRight,
                marginLeft:props.margin
            }}
        >{props.right}</div>
      </div>
    )
}
