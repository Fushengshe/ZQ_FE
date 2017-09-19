import React, { Component } from 'react'
import './index.less'
import SideBar from '../../../components/plugin/sideBar'
import DetailRender from './detail_render'
import JumpFrom from '../comment/index'
const ERR_OK = 0

class NewsDetail extends Component {


  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      fetchData : false,
      links : [],
      cate : [],
      cate_father : [],
      cat_other : []
    }
    this.fetchArticleDetail = this.fetchArticleDetail.bind(this)
  }

  componentDidMount() {
    this.fetchArticleDetail()
  }






  fetchArticleDetail() {
    fetch('http://www.thmaoqiu.cn/poetry/public/index.php/showart?id='+this.props.params.id,{
      method : 'GET',
      headers : {

      }
    }).then((res) => res.json()).then(json => {
      if(json.code === ERR_OK) {
        console.log(json.cate_other)
        this.setState({
          fetchData : true,
          links : json.article,
          cate : json.cate,
          cate_father : json.cate_father,
          cat_other : json.cate_other
        })
        console.log(this.state.links)
      }
    })
  }


  render () {

    return (
      <div>
        {
          this.state.fetchData === true
            ? <DetailRender links={this.state.links} cate={this.state.cate} cate_father={this.state.cate_father} cat_other={this.state.cat_other}/>
            : "Loading..."
        }
        <JumpFrom article={this.props.params.id}/>
      </div>
    )
  }
}
export default NewsDetail


