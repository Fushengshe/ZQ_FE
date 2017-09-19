import React, { PropTypes } from 'react'
import './index.less'


//这是侧边栏
const SideBar = (props) => {
  // const title = config
  const cat_other = props.cat_other
  const catOthers = cat_other.map((item, index) => {
    return (
      <div className="sider-bar-normal" key={ index }>
        { item.name }
      </div>
    )
  })
  return (
    <div className="sider-bar">
      <div className="sider-bar-title">{props.title}</div>
      <div className="sider-bar-active">
        {props.active}
      </div>
      {catOthers}
      <div className="sider-bar-empty" />
    </div>
  )
}
SideBar.protoTypes = {}
export default SideBar
