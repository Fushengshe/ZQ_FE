import React from 'react'
import './index.less'
import SideBar from '../../../components/plugin/sideBar'
import NewsLink from '../../../components/plugin/NewsLink'

const DetailRender = (props) => {
  const links = props.links
  const cat_other = props.cat_other
  console.log(links)
  return (
    <div className="list-content">
      <div className="list-content-side">
        <SideBar title={props.cate_father.name} active={props.cate.name} cat_other={ props.cat_other } />
      </div>
      <div className="list-content-content">
        <center><h2 className="details-title">{links.title}</h2></center>
        <div className="details-msg">
          <span className="details-item">时间:{links.created_at}</span><br/>
          <span className="details-item">来源:{links.source}</span><br/>
          <span className="details-item">责编:{links.author}</span><br/>
        </div>

        <div
          className="news-detail"
          dangerouslySetInnerHTML={{__html: links.content}} />
      </div>

    </div>
  )
}

export default DetailRender