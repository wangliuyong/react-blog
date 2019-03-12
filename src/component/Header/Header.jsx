import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { Button } from 'antd';

import {store}  from '../../store/store'

import './header.less';




export default class Header extends Component{

  handleClick(){
    store.dispatch({ type: 'INCREMENT' ,payload:10})
  }

  render(){
    const isLogin=this.props.isLogin
    return (
      <header className="App-header">
        {
          isLogin ?
            (<div className="login">
              <span className="log">ARISS BLOG</span>
              <div className="my">
                <span className="edit">编辑</span>
                <span className="avatar">
                  <img src={this.props.user.avatar} alt="avatar"/>
                </span>
              </div>
            </div>)
            :
            (<div className="logOut">
              <h1>ARISS BLOG</h1>
              <p>精品博客汇聚在这里，等待着你的开启</p>
              <div className="button">
                <Link to='/login'><Button type="primary" onClick={this.handleClick.bind(this)}>登录</Button></Link>
                <Link to='/register'><Button type="primary">注册</Button></Link>
              </div>
            </div>)
        }

      </header>
    )
  }


}