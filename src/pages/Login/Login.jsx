import React, { Component } from 'react';

import NormalForm from '../../component/Form'

import blog from '../../api/blog'

import auth from '../../api/auth'

let {login}=auth;

let {getBlogs}=blog;

export default class Login extends Component{
  constructor(props){
    super(props);
    this.state={
      blog:[]
    }

    this.submitClick=this.submitClick.bind(this)
  }

  componentDidMount() {

    this.getBlogList()
  }

  submitClick(e){
    console.log(e);
  }


  getBlogList(){
    getBlogs().then((res)=>{
      console.log(res)
      if(res.status==='ok'){
        this.setState({blog:res.data})
      }
    })
  }

  render(){
    return (
        <div>
          <NormalForm title={'LOGIN'} submitClick={this.submitClick} isLogin={true}/>
        </div>
    )
  }
}