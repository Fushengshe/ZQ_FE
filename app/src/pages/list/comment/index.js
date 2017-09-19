import React ,{ Component } from 'react'
import ReactDOM from 'react'
import { Link } from 'react-router'
import { Button, Modal, Form, Input, Radio } from 'antd';
import CollectionCreateForm from './form_render'

const ERR_OK = 0;
class JumpForm extends Component {
  constructor(props) {
    super(props)
    //这里需要props继承上面的

    this.fetchArticleComments = this.fetchArticleComments.bind(this)
  }
  state = {
    fetchData : false,
    links : [],
    visible: false,
  };


  componentDidMount() {
    console.log(this.props)
    this.fetchArticleComments()
  }

  componentWillReceiveProps (nextProps) {
    //console.log('component reloaded')
    return true;
  }


  fetchArticleComments () {

    fetch('http://www.thmaoqiu.cn/poetry/public/index.php/showcomment/'+this.props.article,{
      method : 'GET',
      headers : {},
    }).then((res) => res.json()).then(json => {
      if(json.code === ERR_OK) {
        console.log(json.data)
        this.setState({
          fetchData : true,
          links : json.data
        })
      }
    })
  }



  fetchArticleDetail(data) {
    //对data进行预处理
    data.article = this.props.article;
    data.comment = 0;
    fetch('http://www.thmaoqiu.cn/poetry/public/index.php/addcomment',{
      method : 'POST',
      headers : {

      },
      body : JSON.stringify(data)
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

    return (
      <div>
        <ul>
        {
          this.state.links.map((item, index) => {
            return (
              <li key={index}>{item.comment}</li>
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