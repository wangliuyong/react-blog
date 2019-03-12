import React, { Component } from 'react';

import NormalForm from '../../component/Form'


export default class Login extends Component{

  submitClick(e){
    let data={
      username:e.userName,
      password:e.password
    }
    this.props.toLogin(data)
  }


  render(){
    return (
        <div>
          <NormalForm title={'LOGIN'} submitClick={this.submitClick.bind(this)} isLogin={this.props.isLogin}/>
        </div>
    )
  }
}