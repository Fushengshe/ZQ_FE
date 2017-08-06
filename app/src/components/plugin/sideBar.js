import React, { PropTypes } from 'react'
import './index.less'

const SideBar = (props) => {
  // const title = config
  return (
    <div className="sider-bar">
      <div className="sider-bar-title">{props.title}</div>
      <div className="sider-bar-active">
        {props.active}
      </div>
      <div className="sider-bar-normal">
        {props.normal}
      </div>
      <div className="sider-bar-empty" />
    </div>
  )
}
SideBar.protoTypes = {}
export default SideBar
