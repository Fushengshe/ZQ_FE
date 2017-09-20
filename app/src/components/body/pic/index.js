import React, { Component } from 'react'
import JumpForm from '../../../pages/list/comment/index'
// import {config} from './index.json'
import pic from './pic.png'
import bottomOne from './bottom_0.png'
import bottomZero from './bottom_1.png'
import { Card } from 'antd'
import './index.less'

class PicCard extends Component {
  constructor (props) {
    super(props)
    //console.log(props)
    this.state = {}
  }
  //需要文章ID才能查询文章下的评论

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