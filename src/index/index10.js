//react实现分页逻辑
import React from 'react';
import ReactDOM from 'react-dom';
import PageTest from './component/PageTest'
const root = ReactDOM.createRoot(document.getElementById("root"))

function render(){
  root.render(
    <React.StrictMode>
      <PageTest />
    </React.StrictMode>
  )
}
render()