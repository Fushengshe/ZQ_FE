import React, { Component } from 'react';
import { Link, hashHistory } from 'react-router'
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete, message } from 'antd';
import './reg.css';

const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;
const ERR_OK = 0;

const residences = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
    }],
  }],
}];


class FindPage extends Component {


  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        if(typeof (values.captcha) === 'undefined' || values.captcha === null || values.captcha === undefined) {
          message.error('请输入验证码');
          return;
        }
        fetch('http://www.thmaoqiu.cn/poetry/public/index.php/forgot/password', {
          method : "POST",
          headers : {},
          body : JSON.stringify({ username : values.username, email : values.email, captcha : values.captcha, new_password : values.new_password })
        }).then((res) => {
          if(res.status !== 200) {
            console.log('请求失败')
            return;
          }
          return res.json()
        }).then((json) => {
          if(json.code === ERR_OK) {
            message.info('修改密码成功请重新登录')
            hashHistory.push('/');
          } else {
            message.info('修改密码失败请重试')
          }
        })
      }
    });
  }
  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }
  checkPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('new_password')) {
      callback('两个密码不一致');
    } else {
      callback();
    }
  }
  checkConfirm = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

  handleCaptcha = (e) => {
    console.log(1)
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        fetch('http://www.thmaoqiu.cn/poetry/public/index.php/forgot/email', {
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
      }
    });
  }

  handleWebsiteChange = (value) => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 14,
          offset: 6,
        },
      },
    };
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select style={{ width: 60 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    );

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));

    return (
      <Form onSubmit={this.handleSubmit}>
        <h1 className="reg-item-title">密码找回</h1>
        <FormItem
          {...formItemLayout}
          label="用户名"
          hasFeedback
        >
          {getFieldDecorator('username', {
            rules: [{
              required: true, message: '请输入用户名',
            }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="注册时的邮箱"
          hasFeedback
        >
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: '请输入正确的邮箱',
            }, {
              required: true, message: '请输入注册时的邮箱',
            }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="新密码"
          hasFeedback
        >
          {getFieldDecorator('new_password', {
            rules: [{
              required: true, message: 'Please input your password!',
            }, {
              validator: this.checkConfirm,
            }],
          })(
            <Input type="password" />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="重复密码"
          hasFeedback
        >
          {getFieldDecorator('repass', {
            rules: [{
              required: true, message: 'Please confirm your password!',
            }, {
              validator: this.checkPassword,
            }],
          })(
            <Input type="password" onBlur={this.handleConfirmBlur} />
          )}
        </FormItem>



        <FormItem
          {...formItemLayout}
          label="邮箱验证码"
          extra="确定你不是机器人"
        >
          <Row gutter={8}>
            <Col span={12}>
              {getFieldDecorator('captcha', {
                rules: [],
              })(
                <Input size="large" />
              )}
            </Col>
            <Col span={12}>
              <Button size="large" onClick={this.handleCaptcha}>获得验证码</Button>
            </Col>
          </Row>
        </FormItem>

        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">找回密码</Button>
        </FormItem>
      </Form>
    );
  }
}


FindPage = Form.create()(FindPage);

export default FindPage;
