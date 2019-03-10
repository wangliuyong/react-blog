import React, { Component } from 'react';

import { Button } from 'antd';

// import request from './helpers/request'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Button type="primary" onClick={this.handleClick}>Button</Button>
        </header>
      </div>
    );
  }

  handleClick(){
    // request('/auth/login', 'POST', {username: 'hunger', password: '123456'}).then((data)=>{
    //   console.log(data)
    // })

  }
}

export default App;
