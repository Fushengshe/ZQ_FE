import React, { Component } from 'react'
import './index.less'
import SideBar from '../../../components/plugin/sideBar'
import NewsLink from '../../../components/plugin/NewsLink'
import goto from '../../../util'
const ERR_OK = 0

class NewsContent extends Component {
  constructor (props) {
    super(props)
    this.state = {}
    const {params} = this.props
    this.onHandleClick = this.onHandleClick.bind(this)
    this.fetchArticleList = this.fetchArticleList.bind(this)
  }

  componentDidMount() {
    this.fetchArticleList()
  }

  fetchArticleList() {
    fetch('http://www.thmaoqiu.cn/poetry/public/index.php/showtitle?list_id=3',{
      method :'GET',
      headers : {

      }

    }).then((res) => res.json()).then(json => {
      if(json.code === ERR_OK) {
        this.setState({
          fetchData : true,
          links : json.title
        })
        console.log(this.state.links)
      }
    })
  }




  onHandleClick (e) {
    console.log(e)
  }

  render () {
    const links = [
      '甘肃政法学院大学生崇文诗联社受邀参加河柳',
      '首届泰城高校文化艺术交流会举办',
      '无情对“联”欢二十 ',
      '甘肃政法学院大学生崇文诗联社受邀参加河柳',
      '甘肃政法学院大学生崇文诗联社受邀参加河柳',
      '首届泰城高校文化艺术交流会举办',
      '无情对“联”欢二十一期',
      '甘肃政法学院大学生崇文诗联社受邀参加河柳',
      '甘肃政法学院大学生崇文诗联社受邀参加河柳',
      '甘肃政法学院大学生崇文诗联社受邀参加河柳',
      '甘肃政法学院大学生崇文诗联社受邀参加河柳'
    ]
    const {params} = this.props //这个就是传入的文章catid

    const {param} = params
    //console.log(params);
    // const title = config

    return (
      <div className="list-content">
        <div className="list-content-side">
          {param === 'poem' && <SideBar title={'新闻速递'} active={'诗词要闻'} normal={'联坛动态'} />}
          {param !== 'poem' && <SideBar title={'新闻速递'} normal={'诗词要闻'} active={'联坛动态'} />}
        </div>
        <div className="list-content-content">
          <ul className="news-list">
            <NewsLink links={links} pathname={this.props.location.pathname} />
          </ul>
        </div>
      </div>
    )
  }

}

export default NewsContent
