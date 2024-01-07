// 设置props的类型和必填的限制
import React from 'react'
import VaildationComp ,{A} from './component/VaildationComp'
import Comps  from './component/Comps'

export default function App() {
  return (
    <div>
      <VaildationComp 
        a={2}
        b={true}
        d={<Comps />}
        e={<Comps />}
        F={Comps}
        g={new A()}
        sex="男"
        h={[2,3]}
        // i={{
        //   a:2
        // }}
        j={{
          a:3,
          name:'abc',
          age:233,
          address:{
            province:"asdfa",
            city:"adfsfd"
          }
        }}
        k={[{name:"asdf",age:33}]}
        m={23}
        score={33}
      />
    </div>
  )
}
