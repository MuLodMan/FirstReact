import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './UserDialog.css'
export default class UserDialog extends Component{
  constructor(props){
    super(props)
    this.state={action:"show"}
    this.HtmlElement =
    <div className="UserDialog-Wrapper">
      <div className="UserDialog">
        <nav onClick={this.Switch}>
          <div data-current="signUp">
            注册
          </div>
          <div className="nactive" data-current="signIn">
            登陆
          </div>
        </nav>
        <div className="panes">
          <form className="signUp" onSubmit={this.signup.bind(this)}> {/* 注册*/}
            <div className="row">
              <label>Email</label> 
              <input type="text"/>
            </div>
            <div className="row">
              <label>用户名</label> 
              <input type="text"/>
            </div>
            <div className="row">
              <label>密码</label>
              <input type="password"/>
            </div>
            <div className="row actions">
              <button type="submit">注册</button>
            </div>
          </form>
          <form className="signIn show" formMethod="get" action="#" onSubmit={this.login.bind(this)}> {/* 登录*/}
            <div className="row">
              <label>用户名:</label>
              <input type="text" name="username"/>
            </div>
            <div className="row">
            <label dangerouslySetInnerHTML={{__html:'密码:'}}/>
            <input type="password" name="password"/>
            </div>
            <div className="row actions">
              <button type="submit">登录</button>
            </div>
          </form>
        </div>
      </div>
    </div>;
  }
  Switch(e){
    let panes = document.querySelector('.panes');
    for(let i = 0; i<e.currentTarget.children.length ; i++){
      e.currentTarget.children[i].classList.remove("nactive")
      panes.children[i].classList.remove('show')
    }
    e.target.classList.add('nactive')
    panes.querySelector('.'+e.target.dataset.current).classList.add('show')
  }
  login(event){
    event.preventDefault()
    let value1,value2;//name password
    if((value1 = event.target[0].value)&&(value2 = event.target[1].value)){
    let userInfo = {name:value1,password:value2}
     Promise.resolve(this.props.postAction(userInfo)).then(
       ()=>{
        this.setState({action:""})
       }
     ).catch(function(value){
       alert("User name or password invalid") 
     })
    }
    else{
     alert("empty")
    }
}
  signup(event){
    event.preventDefault()
    let value1,value2,value3;//name password email
    if((value1 = event.target[0].value)&&(value2 = event.target[1].value)){
      let userInfo = {name:value1,password:value2,email:value3}
      Promise.resolve(this.props.postAction(userInfo)).then(
        ()=>{
         this.setState({action:""})
        }
      )
    }
    else{
     alert("empty")
    }
  }
  render(){
    if(this.state.action==="show")
    return this.HtmlElement
    else
    return null
  }
}