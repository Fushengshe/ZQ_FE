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
    //console.log(this.props)
    this.fetchArticleComments()
  }

  componentWillReceiveProps (nextProps) {
    //console.log('component reloaded')
    this.fetchArticleComments()
    return true;
  }


  fetchArticleComments () {

    fetch('http://www.thmaoqiu.cn/poetry/public/index.php/showcomment/'+this.props.article,{
      method : 'GET',
      headers : {},
    }).then((res) => res.json()).then(json => {
      if(json.code === ERR_OK) {
        //console.log(json.data)
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
    console.log(localStorage.getItem('loginToken'))
    //根据token找到用户信息 进行上传
    fetch('http://www.thmaoqiu.cn/poetry/public/index.php/user', {
      method : "POST",
      headers : {},
      body : JSON.stringify({ token : localStorage.getItem('loginToken') })
    }).then((res) => {
      if(res.status !== 200) {
        console.log('请求失败')
        return;
      }
      return res.json()
    }).then(json => {
      if(json.code === ERR_OK) {
        console.log(json)
        data.username = json.data.username
      }
    })
    console.log(data)
    fetch('http://www.thmaoqiu.cn/poetry/public/index.php/addcomment',{
      method : 'POST',
      headers : {

      },
      body : JSON.stringify({ content : data.content, article : data.article, username : data.username, comment : 0 })
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
    this.fetchArticleComments()
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
      if(values.machine === false) {
        return;
      }
      //这里写fetch 代码进行提交操作
      //console.log(values);
      this.fetchArticleDetail(values);
      //console.log('Received values of form: ', values);
      form.resetFields();

      this.setState({ visible: false });
      //添加完毕之后对当前组件进行重载，展示列表
      this.fetchArticleComments()
    });
  }
  saveFormRef = (form) => {
    this.form = form;
  }

  render() {
    //通过对localStorage 的侦测 确定是否已经登录
    //console.log(this.state.links)
    const loginToken = localStorage.getItem('loginToken');
    console.log(loginToken)
    return (
      <div className="comment-list">
        {
          loginToken === "undefined" || null
            ?<Button  disabled>请先登录</Button>
            :<Button type="primary" onClick={this.showModal}>添加评论</Button>
        }

        <CollectionCreateForm
          ref={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
        <h4>最新评论</h4>
        <hr/>
        <ul>
        {
          this.state.links.map((item, index) => {
            return (
              <li key={index}>
                <div>
                  <em>{item.user_name}</em>&nbsp;&nbsp;&nbsp;&nbsp;{item.created_at}
                </div>
                {item.comment}
                <hr/>
              </li>
            )
          })
        }
        </ul>



      </div>
    );
  }
}
export default JumpForm