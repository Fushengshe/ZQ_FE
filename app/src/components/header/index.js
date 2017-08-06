import React from 'react'
import {config} from './index.json'
import Logo from './logo'
import Nav from './nav'
import Bar from './topBar'
import './index.less'
const Header = (props) => {
  const title = config
  return (
    <div className="header">
      <Bar/>
      <Logo/>
      <div className="header-nav">
        <Nav/>
      </div>
    </div>
  )
}
export default Header
