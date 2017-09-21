import React, {Component} from 'react'

import {Carousel} from 'antd'
const ERR_OK = 0

const SliderRender = (props) => {
  const links = props.links
  const linksItem = links.map((item, index) => {
    return(
      <div key={index}><img src={item.url} alt={item.id}/></div>
    )
  })

  return (

      <div className="slider">
        <Carousel autoplay>
          {linksItem}
        </Carousel>
        <div className="slider-text">中 国 青 年 诗 词 楹 联 网 欢 迎 您</div>
      </div>

  )
}

export default SliderRender
