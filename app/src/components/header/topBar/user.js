import React, { Component } from 'react'
import ReactDOM from 'react'
import { Link } from 'react-router'
import { Button, Input, Form, Icon } from 'antd';
import './index.less'


function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

const FormItem = Form.Item;//变量替换更方便

class User extends Component {

  constructor(props) {
    super(props);
    this.onHandleClick = this.onHandleClick.bind(this)
  }


  componentDidMount () {
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
      }
    });
  };



  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

    const userNameError = isFieldTouched('userName') && getFieldError('userName');
    const passwordError = isFieldTouched('password') && getFieldError('password');
    return (
      <div className="top-bar-users-forum">
        <ul>
        <Form layout="inline" onSubmit={this.handleSubmit}>
          <FormItem >
            {getFieldDecorator('username',{
              rules: [{ required: true, message: '请输入用户名' }]
            })(
              <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="用户名" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码' }]
            })(
              <Input prefix={<Icon type="barcode" style={{ fontSize: 13 }} />} type="password" placeholder="密码" />
            )}
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              disabled={hasErrors(getFieldsError())}
            >
              登录
            </Button>
          </FormItem>
        </Form>
        </ul>
      </div>
    )
  }
}
User = Form.create()(User);



export default User