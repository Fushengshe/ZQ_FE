import React, { Component } from 'react'
// import {config} from './index.json'
import { Card } from 'antd'
import pic1 from './pic1.gif'
import pic2 from './pic2.jpg'
import './index.less'
import NewsLink from '../../plugin/NewsLink'

const NewsTitle = (props) => {
  // const title = config
  return (
    <div className="news-title">
      <div className="news-title-lside">本站动态</div>
      <div className="news-title-rside">更多>></div>
    </div>
  )
}

class NewsCard extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    const props = this.props
    const links = [
      '甘肃政法学院大学生崇文诗联社受邀参加河柳',
      '首届泰城高校文化艺术交流会举办',
      '无情对“联”欢二十一期',
      '甘肃政法学院大学生崇文诗联社受邀参加河柳',
      '甘肃政法学院大学生崇文诗联社受邀参加河柳',
      '甘肃政法学院大学生崇文诗联社受邀参加河柳',
      '甘肃政法学院大学生崇文诗联社受邀参加河柳'
    ]
    // const {title} = config
    return (
      <Card className="news-card" title={<NewsTitle />} style={{width: '49%'}}>
        <div className="news-card-content">
          <img src={pic2} alt="" className="news-card-content-images" />
          <div className="news-card-content-text">
            第四届“中青诗联杯”全国校园诗词楹联大赛获奖名单（附作品） 2016年5月1日，由中国楹联学会教育委员会指导，中青诗联网主办 . . .
          </div>
        </div>
        <NewsLink className="news-card-link" links={links} pathname={"/news/active"} />
      </Card>
    )
  }
}

export default NewsCard