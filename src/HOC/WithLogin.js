import React from 'react'
export default function WithLogin(Comp){
    return function LoginWrapper(props){
        if(props.isLogin){
            return <Comp {...props}/>
        }
        return null
    }
}