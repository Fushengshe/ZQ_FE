import React, { Component } from 'react'
import { Link } from 'react-router'
import { Button, Input, Form, Icon, message, Radio, Modal } from 'antd';
import API from '../../../../api'

const ERR_OK = 0
const FormItem = Form.Item;//变量替换更方便

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class Find extends Component {
  constructor(props) {
    super(props);
    this.state = {
      captchaDisabled : false,
    };
    this.handleCaptcha = this.handleCaptcha.bind(this);
  }

  checkPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('new_password')) {
      callback('密码不一致');
    } else {
      callback();
    }
  }

  handleCaptcha() { //获得恢密码的验证码
    const form = this.props.form;
    form.validateFields((err, values) => {
      if(err) {
        return;
      }
      fetch(API()+'/forgot/email', {
        method : "POST",
        headers : {},
        body : JSON.stringify({ email : values.email, username : values.username })
      }).then((res) => {
        if(res.status !== 200) {
          message.info('发送验证码失败，请重试')
          console.log('请求出错');
          return;
        }
        return res.json()
      }).then(json => {
        if(json.code === ERR_OK) {
          message.info('发送验证码成功，请邮箱查收')
          this.setState({
            captchaDisabled: true,
          })
        } else {
          message.info('发送验证码失败，请重试')
        }
      })
    })
  }





  render () {

    const { visible, onCancel, onCreate, form } = this.props;
    const { getFieldDecorator } = form;


    return (
      <Modal
        visible={visible}
        title="找回并修改密码"
        okText="找回"
        onCancel={onCancel}
        onOk={onCreate}
      >
        <Form layout="vertical">

          <FormItem label="用户名">
            {getFieldDecorator('username', {
              rules: [{ required: true, message: '用户名必须填写' }],
            })(
              <Input />
            )}
          </FormItem>
          <FormItem label="注册邮箱">
            {getFieldDecorator('email', {
              rules: [
                { required: true, message: '注册邮箱必须填写' },

              ],
            })(
              <Input />
            )}
          </FormItem>
          <FormItem label="验证码">
            {getFieldDecorator('captcha', {
              rules: [

              ],
            })(
              <Input />
            )}
          </FormItem>
          <Button size="large" onClick={this.handleCaptcha} disabled={this.state.captchaDisabled}>获得验证码</Button>
          <FormItem label="新密码">
            {getFieldDecorator('new_password', {
              rules: [
                { required: true, message: '新密码必须填写' }
              ],
            })(
              <Input />
            )}
          </FormItem>
          <FormItem label="确认密码">
            {getFieldDecorator('repass', {
              rules: [
                { required: true, message: '确认密码必须填写' },
                { validator: this.checkPassword, }
              ],
            })(
              <Input />
            )}
          </FormItem>
        </Form>
      </Modal>
    )
  }
}
Find = Form.create()(Find);

export default Find
