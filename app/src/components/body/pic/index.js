import React, { Component } from 'react'
// import {config} from './index.json'
import pic from './pic.png'
import bottomOne from './bottom_0.png'
import bottomZero from './bottom_1.png'
import { Card } from 'antd'
import './index.less'

class PicCard extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    const props = this.props
    // const {title} = config
    return (
      <Card className="pic-card" title={null} style={{width:'100%'}}>
        <div className="pic-card-item">
          <img src={pic} alt="" />
          <div className="pic-card-item-desc">杨帆</div>
        </div>
        <div className="pic-card-item">
          <img src={pic} alt="" />
          <div className="pic-card-item-desc">杨帆</div>
        </div>
        <div className="pic-card-item">
          <img src={pic} alt="" />
          <div className="pic-card-item-desc">杨帆</div>
        </div>
        <div className="pic-card-item">
          <img  src={pic} alt="" />
          <div className="pic-card-item-desc">杨帆</div>
        </div>
        <div className="pic-card-item-large">
          <img  src={bottomOne} alt="" />
        </div>
        <div className="pic-card-item-large">
          <img  src={bottomZero} alt="" />
        </div>
      </Card>
    )
  }
}

export default PicCard