// 新版react生命周期
import React from 'react';
import ReactDOM from 'react-dom';
import AppNew from './component/AppNew'
const root = ReactDOM.createRoot(document.getElementById("root"))

function render(){
  root.render(
    <React.StrictMode>
      <AppNew/>
    </React.StrictMode>
  )
}

render()


