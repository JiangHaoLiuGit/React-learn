import React from 'react';
import ReactDOM from 'react-dom';
import Comp from './component/Comp'
const root = ReactDOM.createRoot(document.getElementById("root"))

function render(){
  root.render(
    <React.StrictMode>
      <Comp number={0}/>
    </React.StrictMode>
  )
}

render()


