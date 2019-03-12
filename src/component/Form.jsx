import React, {Component} from 'react';

import {
    Form, Icon, Input, Button, Checkbox,
} from 'antd';

class NormalLoginForm extends Component {


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.submitClick(values);
            }
        });

    }


    render() {
        const {getFieldDecorator} = this.props.form;

        const loginTemalete = <div>
            {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
            })(
                <Checkbox>Remember me</Checkbox>
            )}
            <a className="login-form-forgot" href="/login">Forgot password</a>
            <Button type="primary" htmlType="submit" className="login-form-button">
                login
            </Button>
            Or <a href="/register">register now!</a>
        </div>

        const registerTemalate =
            <div>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    submit
                </Button>
            </div>
        return (
            <div className="from-wrapper">
                <div className='title'>{this.props.title}</div>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                        {getFieldDecorator('userName', {
                            rules: [{required: true, message: 'Please input your username!'}],
                        })(
                            <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                   placeholder="Username"/>
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{required: true, message: 'Please input your Password!'}],
                        })(
                            <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
                                   placeholder="Password"/>
                        )}
                    </Form.Item>
                    <Form.Item>
                        {
                            this.props.isLogin ? loginTemalete : registerTemalate
                        }
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

const NormalForm = Form.create({name: 'normal_login'})(NormalLoginForm);

export default NormalForm;

//const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);