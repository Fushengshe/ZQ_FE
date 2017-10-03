import React, { Component } from 'react'
import { Card } from 'antd'
import { Link } from 'react-router'
import './index.less'
import pic1 from './pic1.gif'
import pic2 from './pic2.jpg'
import Luomu from './luomu.jpg'

const NewsCardRender = (props) => {
  const links = props.links
  const first = props.first
  const linksItem = links.map((item, index) => {
    return(
      <li className="news-card-link-item" key={index} >
        <Link to={'/news/'+item.list_id+'/'+item.id}>{item.title}</Link>
      </li>
    )
  })
  return (
    <div>
      <div className="news-card-content">
        <img src={Luomu} alt="" className="news-card-content-images"/>
        <Link to="/news/7/37">
        <div className="news-card-content-text">
          中青诗联网校园联盟2016-2017年度总结大会暨换届大会圆满落幕
        </div>
        </Link>
      </div>
      <ul>
        {linksItem}
      </ul>
    </div>
  )
}

export default NewsCardRender
