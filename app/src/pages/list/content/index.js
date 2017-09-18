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
      links : []
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

    console.log('http://www.thmaoqiu.cn/poetry/public/index.php/showtitle?list_id='+cid)
    fetch('http://www.thmaoqiu.cn/poetry/public/index.php/showtitle?list_id='+cid,{
      method :'GET',
      headers : {

      }

    }).then((res) => res.json()).then(json => {

      if(json.code === ERR_OK) {
        this.setState({
          cid : cid,
          fetchData : true,
          links : json.title
        })
      } else if(json.code === EMPTY) {
        this.setState({
          cid : cid,
          fetchData : false,
          links : []
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
          {param === 'poem' && <SideBar title={'新闻速递'} active={'诗词要闻'} normal={'联坛动态'} />}
          {param !== 'poem' && <SideBar title={'新闻速递'} normal={'诗词要闻'} active={'联坛动态'} />}
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
