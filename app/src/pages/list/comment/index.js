import React ,{ Component } from 'react'
import ReactDOM from 'react'
import { Link } from 'react-router'
import { Button, Modal, Form, Input, Radio } from 'antd';
import CollectionCreateForm from './form_render'
import API from '../../../../api'
import './comment.css';

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
    isLogged : false,
    username : undefined,
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
    //先对用户token进行验证
    //console.log('ss'+localStorage.getItem('loginToken'))
    //console.log(11)
    if(typeof(localStorage.getItem('loginToken')) === 'undefined') {
      console.log('无token')
      return;
    }
    fetch(API()+'/user', {
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
      //console.log(json)
      if(json.code !== ERR_OK) {
        //进行组件重载
        this.setState({
          isLogged: false,
        })
      } else {
        this.setState({
          isLogged: true,
          username : json.data.username
        })
      }
    })

    fetch(API()+'/showcomment/'+this.props.article,{
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

    console.log(data)
    fetch(API()+'/addcomment',{
      method : 'POST',
      headers : {

      },
      body : JSON.stringify({ content : data.content, article : data.article, username : this.state.username, comment : 0 })
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
    console.log(loginToken) //是有logintoken的
    return (
      <div className="comment-list">
        {
          this.state.isLogged
            ?<Button type="primary" onClick={this.showModal}>添加评论</Button>
            :<Button  disabled>请先登录</Button>
        }

        <CollectionCreateForm
          ref={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
        <h4>最新评论</h4>
        <hr/>
        <ul className="comment-list-ul">
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