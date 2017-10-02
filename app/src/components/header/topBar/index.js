import React from 'react'
import './index.less'
import {Tooltip,Input,Form} from 'antd'
import { Link } from 'react-router'
import User from './user'
import qrCode from './qr-code.jpg'

const FormItem = Form.Item
const Search = Input.Search
const TopBar = (props) => {

  return (
    <div className="top-bar">
      <div className="top-bar-connect">
        <div className="weibo-logo connect-logo">微博</div>
        <Tooltip placement="bottom" title={<img src={qrCode} className="qr-code" width={100} height={100} />}>
        <div className="wechat-logo connect-logo">微信</div>
        </Tooltip>
      </div>
      <div className="top-bar-users">
        <User />
      </div>
    </div>
  )
}
export default TopBar
