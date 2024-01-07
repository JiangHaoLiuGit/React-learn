//实现一个简易版轮播图,单纯利用一个简易算法:index = (index + 1) % 3计算到那个index
import React from 'react';
import ReactDOM from 'react-dom/client';
import src1 from './assets/1.jpg'
import src2 from './assets/2.jpg'
import src3 from './assets/3.jpg'
import './index.css'

let imgArray = [src1,src2,src3]
let index = 0;
let time = null;
let rootEl = document.getElementById('root')
const root = ReactDOM.createRoot(rootEl);
function render(){
  root.render(
    <React.StrictMode>
      <div className='divImg'>
        <img src={imgArray[index]} alt="" />
      </div>
    </React.StrictMode>
  );
}
//react初始渲染
render()
function start(){
  // 防止多个setinterval同时存在恶意占用内存造成页面卡顿
  stop()
  time = setInterval(()=>{
    //精髓,可以让他一直重复,设计出来的是鬼才,有点接近算法了.
    index = (index + 1) % 3
    render()
  },2000)
}
// 开始轮播图片函数
start()
function stop(){
  clearInterval(time)
}
rootEl.onmouseenter = ()=>{
  stop()
}
rootEl.onmouseleave = () => {
  start()
}
