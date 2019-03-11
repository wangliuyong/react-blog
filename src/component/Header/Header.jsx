import React, { Component } from 'react';
import { Button } from 'antd';
import auth from '../../api/auth';
import './header.less';

let {getInfo}=auth;




export default class Header extends Component{
  constructor(props){
    super(props)
    this.state={
      user:{},
      isLogin:false
    }
  }
  componentDidMount(){
    this.getUser()
  }

  getUser(){
    getInfo().then((res)=>{
      console.log(res)
      if(res.status==='ok'){
        this.setState({
          user:res.data,
          isLogin:true
        })
      }else{
        this.setState({isLogin:false})
      }
    })
  }

  handleClick(){

  }

  render(){
    const isLogin=this.state.isLogin
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


}