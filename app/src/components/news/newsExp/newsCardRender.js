import React, { Component } from 'react'
import { Card } from 'antd'
import { Link } from 'react-router'
import './index.less'
import pic1 from './pic1.gif'
import pic2 from './pic2.jpg'
import Xiangtu from './xiangtuchenggong.jpg'

const NewsCardRender = (props) => {
  const links = props.links
  const first = props.first
  const linksItem = links.map((item, index) => {
    return(
      <li className="news-card-link-item" key={index} >
        <Link to={'/news/article/'+item.id}>{item.title}</Link>
      </li>
    )
  })
  return (
    <div>
      <div className="news-card-content">
        <img src={Xiangtu} alt="" className="news-card-content-images"/>
        <Link to="/news/9/36">
        <div className="news-card-content-text">
          全国青年诗词楹联家“湘图”论坛圆满成功
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
