// 见BaillList组件实例说明

import React from 'react';
import ReactDOM from 'react-dom/client';
import BaillList from './component/BaillList'

const root = ReactDOM.createRoot(document.getElementById('root'));
async function render(){
  root.render(
    <React.StrictMode>
      <BaillList />
    </React.StrictMode>
  );
}
//react初始渲染
render()