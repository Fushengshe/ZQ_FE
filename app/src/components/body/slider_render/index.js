import React, {Component} from 'react'
import { Link } from 'react-router'
import {Carousel} from 'antd'
const ERR_OK = 0

const SliderRender = (props) => {
  const links = props.links
  const linksItem = links.map((item, index) => {
    return(
      <div key={index}><Link to={'/news/'+item.list_id+'/'+item.art_id}><img src={item.url} alt={item.id}/></Link><h3><div className="slider-text">{ item.art_title }</div></h3></div>
    )
  })

  return (

      <div className="slider">
        <Carousel autoplay vertical>
          {linksItem}
        </Carousel>

      </div>

  )
}

export default SliderRender
