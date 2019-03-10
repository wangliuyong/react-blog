import React, { Component } from 'react';

import { Button } from 'antd';

import request from '../../helpers/request'


import './header.less'


export default class Header extends Component{
  constructor(props){
    super(props)
    this.state={
      user:{}
    }
  }
  componentDidMount(){
    console.log('header mount')
    this.getUser()
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
                  <img src={this.state.user.avatar} alt="avatar"/>
                </span>
              </div>
            </div>)
            :
            (<div className="logOut">
              <h1>ARISS BLOG</h1>
              <p>精品博客汇聚在这里，等待着你的开启</p>
              <div className="button">
                <Button type="primary" onClick={this.handleClick}>登录</Button>
                <Button type="primary" onClick={this.handleClick}>注册</Button>
              </div>
            </div>)
        }

      </header>
    )
  }

  getUser(){
    let that=this
    request('/auth/login', 'POST', {username: 'hunger', password: '123456'}).then((res)=>{
      console.log(res)
      that.setState({
        user:res.data
      })
    })
  }

  handleClick(){
    request('/auth/login', 'POST', {username: 'hunger', password: '123456'}).then((data)=>{
      console.log(data)

    })

  }
}