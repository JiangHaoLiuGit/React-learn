import React, { Component } from 'react'
import getRandom from '../utils/utils'
import Baill from './Baill'

export default class BaillList extends Component {
    constructor(props){
        super(props)
        this.state = {
            baillList:[]
        }
        let maxWidth = document.documentElement.clientWidth - 100
        let maxHeight = document.documentElement.clientHeight - 100
        let timer = setInterval(()=>{
            if(this.state.baillList.length > 3){
                clearInterval(timer)
                return
            }
            let baillObj = {
                bg:`rgb(${getRandom(0,255)},${getRandom(0,255)},${getRandom(0,255)})`,
                xCoor:getRandom(50,500),
                yCoor:getRandom(50,500),
                left:getRandom(0,maxWidth),
                top:getRandom(0,maxHeight)
            }
            // console.log("进来了",baillObj)
            this.setState({
                baillList:[...this.state.baillList,baillObj]
            })
        },1000)
    }
    render() {
        let divs = this.state.baillList.map((item,i)=> <Baill key={i} {...item} />)
        return (
        <>
            {divs}
        </>
        )
    }
}
// 太阳系 2 * 5万倍
// 银河系 10万 * 100
// 本星系群 1000万 * 10
// 室女座超星系团 1亿 (可观测宇宙中百万级超星系团中其中一个,有2000个星系)
// 拉尼亚凯亚结构 5.2亿 (10万个星系)
// 可观测宇宙 960亿

