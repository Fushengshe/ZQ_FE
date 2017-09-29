import React, { Component } from 'react'
import { Link } from 'react-router'
import './index.less'
import DetailRender from './detail_render'
import API from '../../../../api'

const ERR_OK = 0

class NewsDetail extends Component {


  constructor(props) {
    super(props)
    //console.log(props)
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
    fetch(API()+'/showart?id='+this.props.params.id,{
      method : 'GET',
      headers : {}
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
      <div >
        {
          this.state.fetchData === true
            ? <DetailRender links={this.state.links} cate={this.state.cate} cate_father={this.state.cate_father} cat_other={this.state.cat_other}/>
            : "Loading..."
        }

      </div>
    )
  }
}
export default NewsDetail


