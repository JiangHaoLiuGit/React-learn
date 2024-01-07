import React from 'react'
import ThrLayout from './compon/ThreeLayout'

export default function App() {
  return (
    <div>
      <ThrLayout
        margin={20}
        left={<div>左侧内容</div>}
        right={<div>右侧内容</div>}
      >
        <div><h1>主区域</h1></div>
        
      </ThrLayout>
    </div>
  )
}
