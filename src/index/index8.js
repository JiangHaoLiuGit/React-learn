// 见TicksThree组件实例说明
import React from 'react';
import ReactDOM from 'react-dom/client';
import TicksThree from './component/TicksThree'

const root = ReactDOM.createRoot(document.getElementById('root'));
async function render(){
  root.render(
    <React.StrictMode>
      <TicksThree times={10}/>
    </React.StrictMode>
  );
}
//react初始渲染
render()