import React from 'react';
export default function Student(props){
    return (
        <li>
            [标题]: {props.title} , 
            [内容]: {props.body} , 
            [消息id]: {props.id} , 
            [用户id]: {props.userId} , 
        </li>
    )
}