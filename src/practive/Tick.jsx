import React, { Component } from 'react';
import { Button } from 'antd';

export class Tick extends Component{
  constructor(props){
    super(props);
    this.state={
      date:new Date(),
      list:['wang','liu','yong']
    }

    this.tick=this.tick.bind(this)
  }
  componentDidMount(){
    this.timerId=setInterval(()=>{
      this.tick()
    },1000)
  }
  componentWillUnmount(){
    clearInterval(this.timerId)
  }

  tick(){
    this.setState({
      date:new Date()
    })
  }
  on_click(e){
    console.log(e)
  }
  render(){
    let list=this.state.list;
    const li=list.map((item,index)=>{
      return (<li key={index}>{item}</li>)
    })
    return (
      <div>
        {this.state.date.toLocaleString()}
        <Button data-name='wang' onClick={e=>this.on_click(e)}>"click"</Button>
        <ul>{li}</ul>
      </div>
    )
  }
}
