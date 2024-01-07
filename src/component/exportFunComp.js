import React from 'react';
/**
 * 函数式组件注意1:首字母要求大写,如果是小写的话react会认为是一个普通的函数,大写的才是函数式组件
 * 2.return的必须是一个React.createElement()或者jsx格式的一个dom,比如return <h1></h1>它的本质是react将jsx语法React.createElement()方法里面
 */
export default function MyFunctionComp(props){
    return <h1>函数式组件内容{props.name}</h1>
}