import React, { Component } from 'react'
import './index.less'
import SideBar from '../../../components/plugin/sideBar'
import DetailRender from './detail_render'

const ERR_OK = 0

class NewsDetail extends Component {


  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      fetchData : false,
      links : []
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
        this.setState({
          fetchData : true,
          links : json.article
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
            ? <DetailRender links={this.state.links}/>
            : "Loading..."
        }
      </div>
    )
  }
}
export default NewsDetail


