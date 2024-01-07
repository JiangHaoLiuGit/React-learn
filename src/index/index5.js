// 初次接触react组件: 
// 1.首字母必须大写,小写的话react会认为是一个标签
// 2.return的必须是一个React.createElement()或者jsx格式的一个dom,比如return <h1></h1>它的本质是react将jsx语法React.createElement()方法里面
// 分为函数式组
// 类式组件(有自己状态(父类给的),可以支持修改(自己的state,不能修改父类props))
import React from 'react';
import ReactDOM from 'react-dom/client';
import MyFunctionComp from './component/exportFunComp';
import MyClassComp from './component/exportClassComp';
const root = ReactDOM.createRoot(document.getElementById('root'));
function render(){
  root.render(
    <React.StrictMode>
      <MyFunctionComp name="father"></MyFunctionComp>
      <MyFunctionComp name={5}></MyFunctionComp>
      <MyFunctionComp name={6}></MyFunctionComp>
      <MyClassComp name="son"></MyClassComp>
      <MyClassComp name={8}></MyClassComp>
      <MyClassComp name={7}></MyClassComp>
    </React.StrictMode>
  );
}
//react初始渲染
render()
