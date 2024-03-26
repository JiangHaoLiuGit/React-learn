import React from 'react';

export default function LoginLog(Comp,str){
    class LogWrapper extends React.Component{
        componentDidMount(){
            console.log(`日志:组件${Comp.name}被创建了!${Date.now()}`)
        }
        componentWillUnmount(){
            console.log(`日志:组件${Comp.name}被销毁了!${Date.now()}`)
        }
        
        render(){
            let {abc , ...rest} = this.props;//解构赋值
            console.log("this.props:",this.props);
            return (
                <>
                    <h1>{str}</h1>
                    <Comp {...rest} ref={abc}/>
                </>
            )
        }
    }
    return React.forwardRef((props,ref)=>{
        return <LogWrapper abc={ref} {...props}/>
    })
}