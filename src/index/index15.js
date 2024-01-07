import React from 'react';
import ReactDOM from 'react-dom';
import SonOne from './component/SonOne'
const root = ReactDOM.createRoot(document.getElementById("root"))

function render(){
  root.render(
    <React.StrictMode>
      <SonOne content2={<h1>第二组数据</h1>} content3={<h1>第三组数据</h1>} content4={<h1>第四组数据</h1>}>
        <h1>我是第一组数据</h1>
      </SonOne>
    </React.StrictMode>
  )
}

render()


