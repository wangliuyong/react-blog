import React, { Component } from 'react';

import NormalForm from '../../component/Form'
// import auth from '../../api/auth'

// let {register}=auth;

import './register.less'

class Register extends Component{
  constructor(props){
    super(props);
    this.state={
      username:'',
      password:''
    }

    this.submitClick=this.submitClick.bind(this)
  }
  componentDidMount() {

  }

  submitClick(e){
    console.log(e);
  }

  render(){
    return (
        <div className="from-wrapper">
          <NormalForm title={'RIGSTER'} submitClick={this.submitClick} isLogin={false}/>
        </div>
    );
  }
}

export default Register;

//const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);