import React from 'react'
import ReactDOM from 'react'
import { Link } from 'react-router'
import { Button, Modal, Form, Input, Radio, Switch } from 'antd';
const FormItem = Form.Item;

const CollectionCreateForm = Form.create()(
  (props) => {
    const { visible, onCancel, onCreate, form } = props;
    const { getFieldDecorator } = form;
    return (
      <Modal
        visible={visible}
        title="新建评论"
        okText="发表评论"
        onCancel={onCancel}
        onOk={onCreate}
      >
        <Form layout="vertical">

          <FormItem label="评论内容">
            {getFieldDecorator('content', {
              rules : [{ required: true, message: '请填写评论内容' }]
            })(<Input type="textarea" />)}
          </FormItem>
          <FormItem label="机器人验证">
            {getFieldDecorator('machine', {
              rules: [{ required: true, message: '请验证是否为机器人' }],
            })(
              <Switch checkedChildren="我是人" unCheckedChildren="我不是人" />
            )}
          </FormItem>

        </Form>
      </Modal>
    );
  }
);

export default CollectionCreateForm
