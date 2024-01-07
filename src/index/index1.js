//计算以及 模拟vue中for循环遍历元素,react利用js特性实现是来更加灵活(上限更高),但vue更好能被大众接受
import React from 'react';
import ReactDOM from 'react-dom/client';

let a = 20;
let b = 30;

let arr = new Array(30)
arr.fill(0)
let lis = arr.map((item,i)=>(<li key={i}>{i}</li>))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>
    {a} * {b} = {a*b}s
  </h1>
  <ul>
    {lis}
  </ul>
  </React.StrictMode>
);

