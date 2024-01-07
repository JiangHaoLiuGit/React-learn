// 封装一个蒙层组件
import React from 'react';
import ReactDOM from 'react-dom';
import TestModel from './component/TestModel'
const root = ReactDOM.createRoot(document.getElementById("root"))

function render(){
  root.render(
    <React.StrictMode>
        <TestModel />
    </React.StrictMode>
  )
}

render()


