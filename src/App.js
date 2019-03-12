import React, {Component} from 'react';
import {Switch, Route,rowserHistory} from 'react-router-dom'
import { message} from 'antd';



import Header from './component/Header/Header'
import Footer from './component/Footer/Footer'
import Index from './pages/Index/Index'
import My from './pages/My/My'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'

import auth from './api/auth'






import './App.less';



let {login, register,getInfo,logout} = auth;

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLogin: false,
            user:{}
        }
        this.toLogin = this.toLogin.bind(this)
        this.toRegister=this.toRegister.bind(this)
    }

    toLogin(data) {

        login(data).then((res)=>{
            console.log('1111111',res)
            if(res.status==='ok'){
                console.log(res)
                this.setState({
                    isLogin:true,
                    user:res.data
                })
                message.success(res.msg)

            }else{
                this.setState({isLogin:false})
            }
        })
    }

    toRegister(data) {
        //register(data);
    }


    render() {
        return (
            <div className="App">
                <Header isLogin={this.state.isLogin} user={this.state.user}/>
                <div className="main">
                    <Switch>
                        <Route exact path='/' component={Index}/>
                        {/* both /roster and /roster/:number begin with /roster */}
                        <Route path='/my' component={My}/>
                        <Route
                            path='/register'
                            render={props=><Register toRegister={this.toRegister}/>}
                        />
                        <Route
                            path="/login"
                            render={props => <Login extra={true} toLogin={this.toLogin}/>}
                        />
                    </Switch>
                </div>
                <Footer/>
            </div>
        );
    }


}

export default App;
