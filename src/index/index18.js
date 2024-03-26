// HOC高阶组件,对组件中的公共逻辑进行封装
import React from 'react'
import {A,B} from './component/ComAB'
// withLog组件是消息日志组件,还支持传一个字符串(在h1中展示),只有这两个业务点
import WithLog from './HOC/WithLog'
// withLogin组件是判断登录状态的组件,传一个isLogin的Boole值来显示隐藏组件
import WithLogin from './HOC/WithLogin'
let str = "郝煜"
let str1 = "江浩"
let ALogin = WithLog(A,str)
let BLogin = WithLog(B,str1)

BLogin = WithLogin(BLogin)
ALogin = WithLogin(ALogin)
export default function App() {
  return (
    <div>
      <ALogin isLogin={true} text={1}/>
      <BLogin isLogin={true} text={2}/>
    </div>
  )
}
