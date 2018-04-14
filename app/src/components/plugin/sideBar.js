import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import './index.less'


//这是侧边栏
const SideBar = (props) => {

  return (
    <div className="sider-bar">
      <div className="sider-bar-title">1212121</div>
      <div className="sider-bar-active">
       1212121212
      </div>

      <div className="sider-bar-normal-blue" key={ 6 }>

          121212

      </div>
      <div className="sider-bar-empty" />
    </div>
  )
}
SideBar.protoTypes = {}
export default SideBar
