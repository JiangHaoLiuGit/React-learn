import React from 'react'
import {A,B} from './component/ComAB'
import WithLog from './HOC/WithLog'
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
