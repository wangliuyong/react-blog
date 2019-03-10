import React, { Component } from 'react';

import { Button ,message} from 'antd';

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
    console.log('按钮被点击了');
    message.error('error')
  }
}

export default App;
