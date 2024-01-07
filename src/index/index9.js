// 倒计时组件封装
import React from 'react';
import ReactDOM from 'react-dom';
import JishiFather from './component/JishiFather'
// const btn = <button>点击我</button>

const root = ReactDOM.createRoot(document.getElementById("root"))

function render(){
  root.render(
    <React.StrictMode>
      <JishiFather/>
    </React.StrictMode>
  )
}
render()