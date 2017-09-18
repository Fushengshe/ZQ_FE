import React from 'react'
import './index.less'
import SideBar from '../../../components/plugin/sideBar'
import NewsLink from '../../../components/plugin/NewsLink'

const DetailRender = (props) => {
  const links = props.links
  console.log(links)
  return (
    <div className="list-content">
      <div className="list-content-side">
        <SideBar title={'新闻速递'} active={'诗词要闻'} normal={'联坛动态'} />
      </div>
      <div className="list-content-content">
        <h2 className="details-title">{links.title}</h2>
        <div className="details-msg">
          <span>时间:{links.created_at}</span>
          <span>来源:{links.source}</span>
          <span>责编:{links.author}</span>
        </div>
        <div
          className="news-detail"
          dangerouslySetInnerHTML={{__html: links.content}} />
      </div>

    </div>
  )
}

export default DetailRender