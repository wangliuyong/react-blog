import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom'

import Header from './component/Header/Header'
import Footer from './component/Footer/Footer'
import Index from './pages/Index/Index'
import My from './pages/My/My'






import './App.less';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header isLogin={true}/>
        <div className="main">
          <Switch>
            <Route exact path='/' component={Index}/>
            {/* both /roster and /roster/:number begin with /roster */}
            <Route path='/my' component={My}/>
          </Switch>
        </div>
        <Footer/>
      </div>
    );
  }


}

export default App;
