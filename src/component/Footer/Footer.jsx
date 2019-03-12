import React, { Component } from 'react';

import {store}  from '../../store/store'



import './footer.less'


export default class Footer extends Component{
  constructor(props){
    super(props)
    this.state={
      number:store.getState()
    }
  }

  componentDidMount() {
        store.subscribe(() =>{console.log(store.getState())});
  }

  render(){
    return (
      <footer className="App-footer">
        @{this.state.number}
      </footer>
    )
  }
}