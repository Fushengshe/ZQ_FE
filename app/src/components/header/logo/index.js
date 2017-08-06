import React from 'react'
// import {config} from './index.json'
import logoIcon from './ZQSLW-logo.png'
// import logoText from './logo-text.png'
import './index.less'
const Logo = (props) => {
  // const title = config
  return (
    <div className="logo"><img className="logo-icon" src={logoIcon} alt=""/></div>
  )
}
export default Logo
