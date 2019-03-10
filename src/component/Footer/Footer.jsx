import React, { Component } from 'react';



import './footer.less'


export default class Footer extends Component{
  constructor(props){
    super(props)
    this.state={

    }
  }

  render(){
    return (
      <footer className="App-footer">
        @copyright wangliuyong 2019
      </footer>
    )
  }
}