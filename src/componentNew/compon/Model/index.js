import React from 'react'
import './index.css'
import PropTypes from 'prop-types'
index.defaultProps = {
    bg:"rgba(0,0,0,.5)"
}
index.propTypes = {
    bg:PropTypes.string,
    overModel:PropTypes.bool,
    closeModel:PropTypes.func,
    url:PropTypes.string.isRequired,
}
export default function index(props) {
    
  return (
    <div>
        {
            props.overModel ? (
                <div className='bigDiv' onClick={(e)=>{
                    if(e.target.className === 'bigDiv'){
                        props.closeModel()
                    }
                }}
                style={{
                    background:props.bg
                }}
                >
                    <div className="smallDiv">
                        <img src={props.url} alt="" />
                        <button onClick={props.closeModel}>关闭蒙层</button>
                    </div>
                </div>
            ) : null
        }
    </div>
    
    
  )
}
