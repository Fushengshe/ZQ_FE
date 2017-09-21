import React, { Component } from 'react'
import { Card } from 'antd'
import './index.less'
import pics from './pics.png'

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
              <img src={pics} className="intr-show-item-img" alt="" />
              <div className="intr-show-item-text">
                xxx-活动-xxx
              </div>
            </li>
            <li className="intr-show-item">
              <img src={pics} className="intr-show-item-img" alt="" />
              <div className="intr-show-item-text">
                xxx-活动-xxx
              </div>
            </li>
            <li className="intr-show-item">
              <img src={pics} className="intr-show-item-img" alt="" />
              <div className="intr-show-item-text">
                xxx-活动-xxx
              </div>
            </li>
            <li className="intr-show-item">
              <img src={pics} className="intr-show-item-img" alt="" />
              <div className="intr-show-item-text">
                xxx-活动-xxx
              </div>
            </li>
          </ul>
        </div>
      </Card>
    )
  }
}

export default Intr