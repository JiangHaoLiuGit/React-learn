// 封装一个布局组件
import React from 'react';
import ReactDOM from 'react-dom';
import ThreLayout from './component/ThrLayout'
const root = ReactDOM.createRoot(document.getElementById("root"))

function render(){
  root.render(
    <React.StrictMode>
        <ThreLayout />
    </React.StrictMode>
  )
}

render()
