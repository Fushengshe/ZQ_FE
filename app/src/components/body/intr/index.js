import React, { Component } from 'react'
import { Card } from 'antd'
import { Link } from 'react-router'
import './index.less'
import pics from './pics.png'
import Pic0 from './27.jpg'
import Pic1 from './28.jpg'
import Pic2 from './29.jpg'
import Pic3 from './36.jpg'

class Intr extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <Card className="intr">
        <div className="intr-title">
          {/*<div>*/}
          热门推荐
          {/*</div>*/}
        </div>
        <div className="intr-show">
          <ul className="intr-show-list">
            <li className="intr-show-item">
              <Link to="news/7/35">
              <img src={Pic0} className="intr-show-item-img" alt="" />
              <div className="intr-show-item-text">
                首届泰城高校文化艺术交流会举办
              </div>
              </Link>
            </li>
            <li className="intr-show-item">
              <Link to="news/7/34">
              <img src={Pic1} className="intr-show-item-img" alt="" />
              <div className="intr-show-item-text">
                中青诗联网“最美城市，诗意中国”诗联摄影专题推送活动圆满落幕
              </div>
              </Link>
            </li>
            <li className="intr-show-item">
              <Link to="news/8/33">
              <img src={Pic2} className="intr-show-item-img" alt="" />
              <div className="intr-show-item-text">
                诗意中国·联动青春—全国青年诗词楹联社家“湘图”论坛圆满成功
              </div>
              </Link>
            </li>
            <li className="intr-show-item">
              <Link to="news/25/23">
              <img src={Pic3} className="intr-show-item-img" alt="" />
              <div className="intr-show-item-text">
                吹响青年的“集结号”
              </div>
              </Link>
            </li>
          </ul>
        </div>
      </Card>
    )
  }
}

export default Intr