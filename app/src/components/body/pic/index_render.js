import React, {Component} from 'react'
import { Link } from 'react-router'
import {Carousel} from 'antd'
import { Card } from 'antd'
import bottomOne from './bottom_0.png'
import bottomZero from './bottom_1.png'
import Anhuishifan from './anhuishifan.jpg'
import Donghualigong from './donghualigong.jpg'
import Gansuzhengfa from './gansuzhengfa.jpg'
import Dongqin from './dongqin.jpg'
const ERR_OK = 0

const RightRender = (props) => {
  const links = props.links
  console.log(links)
  const linksItem = links.map((item, index) => {
    return(
      <div className="pic-card-item" key={index}>
          <Link to={"/news/"+item.list_id+"/"+item.url}>
          <img src={item.pic} alt="" />
          <div className="pic-card-item-desc">{item.name}</div>
          </Link>
      </div>
    )
  })

  return (
    <div>
      <Card className="pic-card" title={null} style={{width:'100%'}}>
        {linksItem}
        <div className="pic-card-item-large">
          <a href="http://www.chinaysc.cn">
          <img  src={bottomOne} alt="" />
          </a>
        </div>
        <div className="pic-card-item-large">
          <a href="http://s.lapsang.cn">
          <img  src={bottomZero} alt="" />
          </a>
        </div>
      </Card>
      
      </div>
  )
}

export default RightRender
