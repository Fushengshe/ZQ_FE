import React, { Component } from 'react'
import { Card } from 'antd'
import { Link } from 'react-router'
import './index.less'
import pic1 from './pic1.gif'
import pic2 from './pic2.jpg'

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
        <img src={pic2} alt="" className="news-card-content-images"/>
        <div className="news-card-content-text">
          {first}
        </div>
      </div>
      <ul>
        {linksItem}
      </ul>
    </div>
  )
}

export default NewsCardRender
