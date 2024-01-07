// 绑定class类名和style样式{{}}
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

let url = 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2875187352.jpg'
const root = ReactDOM.createRoot(document.getElementById('root'));
const cs = "image";
root.render(
  <React.StrictMode>
    <div>
      <img src={url} alt="" className={cs} style={{
        marginLeft: "50px",
        width: "300px",
      }}/>
    </div>
  </React.StrictMode>
);

