import React from 'react'

export default function SonOne(props) {
    console.log(props)
    let four = props.content4?null:''//第四组数据弃用,剔除
  return (
    <div>
        {props.children}
        {props.content2}
        {props.content3}
        {four}
    </div>
  )
}
