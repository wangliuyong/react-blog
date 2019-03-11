import React, { Component } from 'react';
import blog from '../../api/blog'



let {getBlogs}=blog;

export default class Index extends Component{
  constructor(props){
    super(props);
    this.state={
      blog:[]
    }
  }

  componentDidMount() {

    this.getBlogList()
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
        <div></div>
    )
  }
}