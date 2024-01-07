import React from 'react';
import './Page.css'
export default function Page(props){
    /**
     * 分页组件
     * 属性:
     * 1.current:初始页码
     * 2.total:总数量
     * 3.limit:页容量,每页容纳的数量
     * 4.panelNumber:数字页码最多显示多少个
     */
    //总页数
    const pageNumber = getPageNumber(props)
    //计算最小页数
    const minPage = getMinpage(props)
    //计算最大页数
    const maxPage = getMaxPage(minPage,pageNumber,props)

    let spanText = []
    for(let i = minPage ; i <= maxPage ; i++ ){
        let span = <span key={i} onClick={()=>toPage(i,props)} className={i === props.current ? 'classSpan active' : 'classSpan'}>{i}</span>
        spanText.push(span)
    }
    return (
        <div className="father">
            <span 
                onClick={()=>toPage(1,props)}
                className={props.current === 1 ? 'classSpan disable' : 'classSpan'}>
                首页
            </span>
            <span 
                onClick={()=>toPage(props.current - 1 < 1 ? 1 : props.current - 1,props)}
                className={props.current === 1 ? 'classSpan disable' : 'classSpan'}>
                上一页
            </span>
            {spanText}
            <span 
                onClick={()=>toPage(props.current + 1 > pageNumber ? pageNumber : props.current + 1,props)}
                className={props.current === pageNumber ? 'classSpan disable' : 'classSpan'}>
                下一页
            </span>
            <span 
                onClick={()=>toPage(pageNumber,props)}
                className={props.current === pageNumber ? 'classSpan disable' : 'classSpan'}>
                尾页
            </span>
            <span className='lastText'>
                {props.current}
            </span>
            /
            <span className='lastText'>
                {pageNumber}
            </span>
        </div>
    )
}
function getPageNumber(props){
    return Math.ceil(props.total / props.limit)
}
/**
 * 跳转到某一页
 * @param {*} target 目标页码
 * @param {*} props 所有属性
 */
function toPage(target,props){
    props.onChange && props.onChange(target,props)
}

/**
 * 计算最小页数
 * @param {} props 整个父组件传过来的的props
 * @returns 最小页数
 */
function getMinpage(props){
    let minPage = props.current - Math.floor(props.panelNumber/2)
    if(minPage < 1){
        minPage = 1
    }
    return minPage
}

/**
 * 最大最大页数
 * @param {*} minPage 最小页数
 * @param {*} pageNumber 总的页数
 * @param {*} props 父组件传的参数
 */
function getMaxPage(minPage,pageNumber,props){
    let maxPage = minPage + props.panelNumber - 1
    if(maxPage > pageNumber){
        maxPage = pageNumber
    }
    return maxPage
}