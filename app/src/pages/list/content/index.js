import React, { Component } from 'react'
import './index.less'
import SideBar from '../../../components/plugin/sideBar'
import NewsLink from '../../../components/plugin/NewsLink'
import goto from '../../../util'

class NewsContent extends Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.onHandleClick = this.onHandleClick.bind(this)
  }

  onHandleClick (e) {
    console.log(e)
  }

  render () {
    const links = [
      '甘肃政法学院大学生崇文诗联社受邀参加河柳',
      '首届泰城高校文化艺术交流会举办',
      '无情对“联”欢二十一期',
      '甘肃政法学院大学生崇文诗联社受邀参加河柳',
      '甘肃政法学院大学生崇文诗联社受邀参加河柳',
      '首届泰城高校文化艺术交流会举办',
      '无情对“联”欢二十一期',
      '甘肃政法学院大学生崇文诗联社受邀参加河柳',
      '甘肃政法学院大学生崇文诗联社受邀参加河柳',
      '甘肃政法学院大学生崇文诗联社受邀参加河柳',
      '甘肃政法学院大学生崇文诗联社受邀参加河柳'
    ]
    const {params} = this.props
    const {param} = params
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
