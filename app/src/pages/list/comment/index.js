import React ,{ Component } from 'react'
import ReactDOM from 'react'
import { Link } from 'react-router'
import { Button, Modal, Form, Input, Radio } from 'antd';
import CollectionCreateForm from './form_render'

const ERR_OK = 0;
class JumpForm extends Component {
  constructor(props) {
    super(props)
    console.log(props)
  }
  state = {
    visible: false,
  };


  componentDidMount() {
    console.log('component loaded')
  }

  componentWillReceiveProps (nextProps) {
    console.log('component reloaded')
    return true;
  }


  //提交函数
  //更健全的fetch
  fetchArticleDetail(data) {
    console.log(data)
    fetch('http://www.thmaoqiu.cn/poetry/public/index.php/testform',{
      method : 'POST',
      headers : {

      },
      body : JSON.stringify({ title : "this is title", desc : "this si " })
      //使用ES6的符号函数
    }).then((res) => {
      if(res.status !== 200) {
        console.log('请求出现错误')
        return;
      }
      return res.json();
    }).then(json => {
      console.log(json)
    })
  }




  showModal = () => {
    this.setState({ visible: true });
  }
  handleCancel = () => {
    this.setState({ visible: false });
  }
  handleCreate = () => {
    const form = this.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      //这里写fetch 代码进行提交操作
      this.fetchArticleDetail(values);
      console.log('Received values of form: ', values);
      form.resetFields();

      this.setState({ visible: false });
      //添加完毕之后对当前组件进行重载，展示列表
    });
  }
  saveFormRef = (form) => {
    this.form = form;
  }
  render() {

    const comment = [
      '这个世界太乱了',
      '这个世界太乱了',
      '这个世界太乱了',
      '这个世界太乱了'
    ];
    return (
      <div>
        <ul>
        {
          comment.map((item, index) => {
            return (
              <li key={index}>{item}</li>
            )
          })
        }
        </ul>


        <Button type="primary" onClick={this.showModal}>添加评论</Button>
        <CollectionCreateForm
          ref={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </div>
    );
  }
}
export default JumpForm