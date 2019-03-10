## 基本语法
1.字符串放在引号里面，表达式放在{}
2.jsx默认防止注入，不用自己增加
3.组件定义的两种方式

** 注意组件名称首字母要大写

** 函数定义一个组件，没有自己的状态建议使用
props

** class定义一个组件，该组件拥有自己的状态或者没有都行
this.props

4.所有的React组件必须像纯函数那样使用它们的props。


5.
`

    import React, { Component } from 'react';
    
    export class Tick extends Component{
      constructor(props){
        super(props);
        this.state={
          date:new Date()
        }
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
    
        //this.props 和 this.state 可能是异步更新的，所以应该这样用
        this.setState((prevState, props) => ({
          counter: prevState.counter + props.increment
        }));
      }
      render(){
        return (
          <div>{this.state.date.toLocaleString()}</div>
        )
      }
    }

`

** state不能直接修改，应使用setState({})，来修改

** 对象整体修改

** 数据自顶向下流动




