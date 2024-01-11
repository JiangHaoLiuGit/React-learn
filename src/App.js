// HOC高阶组件,对组件中的公共逻辑进行封装
import React from 'react'
import {A} from './component/ComAB'
import WithLog from './HOC/WithLog'
import WithLogin from './HOC/WithLogin'
let str = "郝煜"
let ALogin = WithLog(A,str)

ALogin = WithLogin(ALogin)
export default function App() {
  return (
    <div>
      <ALogin isLogin={true} text={1}/>
    </div>
  )
}
