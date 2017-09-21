import React, { Component } from 'react'
import ReactDOM from 'react'
import { Link } from 'react-router'
import { Button, Input, Form, Icon, message, Radio, Modal } from 'antd';
import Register from './register'
import Find from './find'
import './index.less'
import './user.css'

const ERR_OK = 0

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

const FormItem = Form.Item;//变量替换更方便




class User extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible : false,
      findVisible : false,
      token : undefined,
      name : undefined
    }
    this.onHandleClick = this.onHandleClick.bind(this)
    this.checkUser = this.checkUser.bind(this)
    this.logoutHandle = this.logoutHandle.bind(this)
    this.handleRegister = this.handleRegister.bind(this)

  }


  componentDidMount () {
    this.checkUser()
    //this.props.form.validateFields();
  }

  onHandleClick = (e) => {
    console.log(1)
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        //提交到接口
        fetch('http://www.thmaoqiu.cn/poetry/public/index.php/login', {
          method : "POST",
          headers : {},
          body : JSON.stringify({ username : values.username, password : values.password })
        }).then((res) => {
          if(res.status !== 200) {
            console.log('请求出错')
            return;
          }
          return res.json()
        }).then(json => {
          //console.log(json)
          if(json.code == ERR_OK) {
            //相当于接收到token
            console.log(json)
            localStorage.setItem('loginToken',json.token);
            this.checkUser()
            //接受到token之后进行动态重载
            //console.log(document.cookie)
          } else {
            //显示用户名和密码错误的问题
            message.info('用户名或者密码错误')
            localStorage.setItem('loginToken',undefined)
          }
        })
      }
    });
  };

  checkUser() {
    console.log(localStorage.getItem('loginToken'));
    if(localStorage.getItem('loginToken') === undefined) {
      return;
    }
    fetch('http://www.thmaoqiu.cn/poetry/public/index.php/user', {
      method : "POST",
      headers : {},
      body : JSON.stringify({ token : localStorage.getItem('loginToken') })
    }).then((res) => {
      if(res.status !== 200) {
        console.log('请求出错');
        return;
      }
      return res.json();
    }).then(json => {
      console.log(json)
      if(json.code === ERR_OK) {
        //进行组件重载
        this.setState({
          token : json.data.token,
          name : json.data.username
        })
      }
    })
  }

  logoutHandle() {
    localStorage.setItem('loginToken', undefined)
    this.setState({
      token : undefined,
      name : undefined
    })
    message.info('退出登录成功')
    this.checkUser()
  }



  showModal = () => {
    this.setState({ visible: true });
  }

  showFindModal = () => {
    this.setState({ findVisible : true });
    //console.log(this.state.findVisible)
  };

  handleCancel = () => {
    this.setState({ visible: false });
  }
  handleFindCancel = () => {
    this.setState({ findVisible: false })
  }

  handleCreate = () => {
    const form = this.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log('Received values of form: ', values);
      form.resetFields();
      this.setState({ visible: false });
    });
  }
  saveFormRef = (form) => {
    this.form = form;
  }




  handleRegister () {
    const form = this.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      //尝试增加一步对验证码的require

      if(values.captcha === "" || values.captcha === null || values.captcha === undefined || values.captcha === "undefined") {
        message.info('验证码不能为空');
        return;
      }

      console.log(values);
      //进行提交
      fetch('http://www.thmaoqiu.cn/poetry/public/index.php/register', {
        method : "POST",
        headers : {},
        body : JSON.stringify({ username : values.username, password : values.password, email : values.email, captcha : values.captcha })
      }).then((res) => {
        if(res.status !== 200) {
          console.log('请求出错');
          return;
        }
        return res.json()
      }).then(json => {
        if(json.code === ERR_OK) {
          message.info('注册账户成功，请重新登录')
        }
      })
      form.resetFields();
      this.setState({ visible: false });
    });
  }








  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

    const userNameError = isFieldTouched('userName') && getFieldError('userName');
    const passwordError = isFieldTouched('password') && getFieldError('password');
    return (
      <div className="top-bar-users-forum">
        {
          this.state.token === undefined
            ? <Form layout="inline" onSubmit={this.handleSubmit}>
            <ul className="user-login">
              <li className="user-login-item">
                <FormItem >
                  {getFieldDecorator('username',{
                    rules: [{ required: true, message: '请输入用户名' }]
                  })(
                    <Input  prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="用户名" />
                  )}
                </FormItem>
              </li>
              <li className="user-login-item">
                <FormItem>
                  {getFieldDecorator('password', {
                    rules: [{ required: true, message: '请输入密码' }]
                  })(
                    <Input prefix={<Icon type="barcode" style={{ fontSize: 13 }} />} type="password" placeholder="密码" />
                  )}
                </FormItem>
              </li>
              <li className="user-login-item">
                <FormItem>
                  <Button
                    type="primary"
                    htmlType="submit"
                    disabled={hasErrors(getFieldsError())}
                  >
                    登录
                  </Button>

                </FormItem>
                <Button type="primary" className="ant-btn ant-btn-primary ant-btn-lg" onClick={this.showModal}>注册</Button>
                <Register
                  ref={this.saveFormRef}
                  visible={this.state.visible}
                  onCancel={this.handleCancel}
                  onCreate={this.handleRegister}
                />

                <Button type="primary" className="ant-btn ant-btn-primary ant-btn-lg" onClick={this.showFindModal}>找回</Button>
                <Find
                  ref={this.saveFormRef}
                  visible={this.state.findVisible}
                  onCancel={this.handleFindCancel}
                  onCreate={this.handleRegister}
                />
              </li>

            </ul>
          </Form>
            : <div>
            {"您好！"+ this.state.name}&nbsp;
            <Button onClick={this.logoutHandle} type="danger">退出登录</Button>
            </div>
        }


      </div>
    )
  }
}
User = Form.create()(User);



export default User