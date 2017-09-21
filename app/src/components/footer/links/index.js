import React from 'react'
import BottomPic from './bottom_logo.png'
import './index.less'

const links = (props) => {
  return (
    <div className="links">

      <div className="links-item">
        <hr/>
        <div className="link-item-detail">
          首页
        </div>
        <div className="link-item-detail">
          首页
        </div>
        <div className="link-item-detail">
          首页
        </div>
        <div className="link-item-detail">
          首页
        </div>
        <div className="link-item-detail">
          首页
        </div>
        <div className="link-item-detail">
          首页
        </div>
      </div>
      <hr/>
      <div className="links-item-pic">
        <img src={BottomPic} alt="" />
      </div>
      <div className="links-item">
        <hr/>
        <div className="link-item-detail">
          首页
        </div>
        <div className="link-item-detail">
          首页
        </div>
        <div className="link-item-detail">
          首页
        </div>
        <div className="link-item-detail">
          首页
        </div>
        <div className="link-item-detail">
          首页
        </div>
        <div className="link-item-detail">
          首页
        </div>
      </div>
    </div>
  )
}
export default links
