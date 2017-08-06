import React, { Component } from 'react'
import { Carousel, Card } from 'antd'
import slide1 from './about.jpg'
import slide2 from './academic.jpg'
import slide3 from './admissions.jpg'
import slide4 from './collaboration.jpg'
import slide5 from './education.jpg'
import slide6 from './research.jpg'
import './index.less'

class Slider extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div className="slider-intr">

        <Carousel autoplay>
          <div className="intr-group">
          <div><img src={slide1} alt="about" /></div>
          <div><img src={slide2} alt="academic" /></div>
          <div><img src={slide3} alt="admissions" /></div>
          </div>
          <div className="intr-group">
            <div><img src={slide4} alt="collaboration" /></div>
            <div><img src={slide5} alt="education" /></div>
            <div><img src={slide6} alt="research" /></div>
          </div>
        </Carousel>
      </div>
    )
  }
}

export default Slider