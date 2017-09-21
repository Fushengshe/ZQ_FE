import React, { Component } from 'react'
import { Link } from 'react-router'
import { Button, Input, Form, Icon, message, Radio, Modal } from 'antd';

const ERR_OK = 0
const FormItem = Form.Item

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class Find extends Component {
  constructor(props) {
    super(props)
  }




  render () {
    const { visible, onCancel, onCreate, form } = this.props;
    const { getFieldDecorator } = form;
    return (
      <Modal
        visible={findVisible}
        title="找回密码"
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
          <FormItem label="密码">
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '密码必须填写' }],
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
          <FormItem label="邮箱">
            {getFieldDecorator('email', {
              rules: [
                { type: 'email', message: '邮箱必须有效' },
                { required: true, message: '邮箱必须填写' }

              ],
            })(
              <Input />
            )}
          </FormItem>
          <Button size="large" onClick={this.handleCaptcha} disabled={this.state.captchaDisabled}>获得验证码</Button>
          <FormItem label="验证码">
            {getFieldDecorator('captcha', {
              rules: [

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

Find = Form.create()(Find)
export default Find