import React, { Component } from 'react'

export default class FormInput extends Component {
    
    state = {
        loginName:"",
        loginPwd:"",
        sex:'famale',
        // checkArr:["唱歌","跳舞","打篮球",'坤坤',"小黑子","鸡"],
        checkArr:[
            {value:"say",text:"唱"},
            {value:"jump",text:"跳"},
            {value:"basetball",text:"打篮球"},
            {value:"kunkun",text:"坤坤"},
            {value:"heizi",text:"小黑子"},
            {value:"ji",text:"鸡"},
        ],
        fromCheckArr:['jump',"heizi"],
        city:'beijing'
    }
    handleChange = e => {
        console.log("进来了",e.target)
        let val = e.target.value
        let name = e.target.name
        // let popsName = {}
        // popsName[name] = val
        // this.setState(popsName)
        if(e.target.type === 'checkbox'){
            if(e.target.checked){
                this.setState({
                    [name]:[...this.state.fromCheckArr,val]
                })
            }else{
                this.setState({
                    [name]:this.state.fromCheckArr.filter(item=>item!==val)
                })
            }
        }else{
            this.setState({
                [name]:val
            })
        }
        
    }
    render() {
        let ckeckArr = this.state.checkArr.map((item,index)=>(
            <label key={index}>
                <input type="checkbox" name="fromCheckArr"
                value={item.value}
                 checked={this.state.fromCheckArr.includes(item.value)}
                 onChange={this.handleChange}
                ></input>
                {item.text}
            </label>
        ))
        return (
        <div>
            <div>登录账号: <input type="text" name="loginName" value={this.state.loginName} onChange={this.handleChange} /></div>
            <div>登录密码: <input type="password" name="loginPwd" value={this.state.loginPwd} onChange={this.handleChange} /></div>
            <div>
                性别:
                <label>
                    <input type="radio" name="sex" value="male" checked={this.state.sex === 'male'} onChange={this.handleChange}/>男
                </label>
                <label>
                    <input type="radio" name="sex" value="famale" checked={this.state.sex === 'famale'} onChange={this.handleChange}/>女
                </label>
            </div>
            <div>
                爱好:
                {ckeckArr}
            </div>
            <div>
                城市:
                <select name="city" value={this.state.city} onChange={this.handleChange}>
                    <option value="beijing">北京</option>
                    <option value="shanghai">上海</option>
                    <option value="hangzhou">杭州</option>
                </select>
            </div>
            <button onClick={
                ()=>{
                    console.log("要提交的元素",this.state)
                }
            }>获取最新值</button>
        </div>
        )
    }
}
