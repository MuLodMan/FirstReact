import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './UserDialog.css'
let CurrentIndex=0
export default class UserDialog extends Component{
  clickHandler(e){
    console.dir(e)
    debugger
  }
  render(){
    return (
      <div className="UserDialog-Wrapper">
        <div className="UserDialog">
          <nav onClick={this.clickHandler}>
            <div data-current="signup">
              注册
            </div>
            <div className="nactive" data-current="login">
              登陆
            </div>
          </nav>
          <div className="panes">
            <form className="signUp"> {/* 注册*/}
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
            <form className="signIn show"> {/* 登录*/}
              <div className="row">
                <label>用户名:</label>
                <input type="text"/>
              </div>
              <div className="row">
              <label dangerouslySetInnerHTML={{__html:'密码:'}}/>
              <input type="password"/>
              </div>
              <div className="row actions">
                <button type="submit">登录</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}