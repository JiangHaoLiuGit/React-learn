// 请求100组数据然后显示ul>li(类组件)*100
import React from 'react';
import ReactDOM from 'react-dom/client';
import StudentList from './component/StudentList'
async function fetchAllStudents(){
  return await fetch("http://jsonplaceholder.typicode.com/posts")
      .then(resp => resp.json()).then(resp => resp)

}

const root = ReactDOM.createRoot(document.getElementById('root'));
async function render(){
  let dataList = await fetchAllStudents()
  console.log(dataList)
  root.render(
    <React.StrictMode>
      <StudentList stuList={dataList}/>
    </React.StrictMode>
  );
}
//react初始渲染
render()