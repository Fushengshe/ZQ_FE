import React from 'react'
import './index.less'
import SideBar from '../../../components/plugin/sideBar'
import NewsLink from '../../../components/plugin/NewsLink'
import {content,title} from './config.json'
const NewsDetail = (props) => {
  const {params} = props
  const {param} = params
  console.log(props)
  return (
    <div className="list-content">
      <div className="list-content-side">
        {param === 'poem' && <SideBar title={'新闻速递'} active={'诗词要闻'} normal={'联坛动态'} />}
        {param !== 'poem' && <SideBar title={'新闻速递'} normal={'诗词要闻'} active={'联坛动态'} />}
      </div>
      <div className="list-content-content">
        <h2 className="details-title">中青诗联网关于举办第二届“全国青年诗词楹联家论坛”的通知</h2>
        <div className="details-msg">
          <span>时间:</span>
          <span>来源:</span>
          <span>责编:</span>
        </div>
        <div
          className="news-detail"
          dangerouslySetInnerHTML={{__html: content}} />
      </div>

    </div>
  )
}
export default NewsDetail
