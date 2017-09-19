import React, { Component } from 'react'
import './index.less'
import SideBar from '../../../components/plugin/sideBar'
import NewsLink from '../../../components/plugin/NewsLink'
import goto from '../../../util'

const ERR_OK = 0
const EMPTY = 2
class NewsContent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      cid : this.props.params.param,
      fetchData : false,
      links : [],
      cat_father_info : 'Loading',
      cat_info : 'Loading',
      cat_other : []
    }

    this.onHandleClick = this.onHandleClick.bind(this)
    this.fetchArticleList = this.fetchArticleList.bind(this)

  }

  componentDidMount() {
    this.fetchArticleList(this.props.params.param)
    //console.log(this.props.params.param)
  }

  componentWillReceiveProps(nextProps) {
    //在修改param的时候访问了这个方法
    this.fetchArticleList(nextProps.params.param)
    return true
  }

  fetchArticleList(cid) {


    fetch('http://www.thmaoqiu.cn/poetry/public/index.php/showtitle?list_id='+cid,{
      method :'GET',
      headers : {

      }

    }).then((res) => res.json()).then(json => {
      //console.log(json.cat_other)
      if(json.code === ERR_OK) {
        this.setState({
          cid : cid,
          fetchData : true,
          links : json.title,
          cat_father_info : json.cate_father_info,
          cat_info : json.cate_info,
          cat_other : json.cate_other
        })
      } else if(json.code === EMPTY) {
        this.setState({
          cid : cid,
          fetchData : false,
          links : [],
          cat_father_info : json.cate_father_info,
          cat_info : json.cate_info,
          cat_other : json.cate_other
        })
      }
    })
  }




  onHandleClick (e) {
    console.log(e)
  }

  render () {

    const {params} = this.props //这个就是传入的文章catid

    const {param} = params

    console.log(this.state.links);
    // const title = config

    return (
      <div className="list-content">
        <div className="list-content-side">
         <SideBar title={ this.state.cat_father_info.name } active={ this.state.cat_info.name } cat_other={ this.state.cat_other } />
        </div>
        <div className="list-content-content">
          <ul className="news-list">
            {
              this.state.fetchData === true
                ? <NewsLink  links={this.state.links} pathname={this.props.location.pathname} />
                : "栏目下无文章"
            }

          </ul>
        </div>
      </div>
    )
  }

}

export default NewsContent
