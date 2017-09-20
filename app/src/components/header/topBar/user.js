import React, { Component } from 'react'
import ReactDOM from 'react'
import { Link } from 'react-router'
import { Button, Input, Form, Icon } from 'antd';
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
    this.onHandleClick = this.onHandleClick.bind(this)
    this.checkUser = this.checkUser.bind(this)
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
            //动态刷新组件
            console.log(json)
          }
        })
      }
    });
  };

  checkUser() {
    fetch('http://www.thmaoqiu.cn/poetry/public/index.php/user', {
      method : "GET",
      headers : {},
    }).then((res) => {
      if(res.status !== 200) {
        console.log('请求出错');
        return;
      }
      return res.json();
    }).then(json => {
      console.log(json)

    })
  }





  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

    const userNameError = isFieldTouched('userName') && getFieldError('userName');
    const passwordError = isFieldTouched('password') && getFieldError('password');
    return (
      <div className="top-bar-users-forum">

        <Form layout="inline" onSubmit={this.handleSubmit}>
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
            </li>
          </ul>
        </Form>

      </div>
    )
  }
}
User = Form.create()(User);



export default User