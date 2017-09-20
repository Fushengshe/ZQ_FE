import React from 'react'
import './index.less'
import {Tooltip,Input,Form} from 'antd'
import { Link } from 'react-router'
import User from './user'
import qrCode from './qr-code.jpg'
// import {config} from './index.json'
const FormItem = Form.Item
const Search = Input.Search
const TopBar = (props) => {
  // const title = config
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
        <Search
          placeholder=""
          style={{ width: 200 }}
          onSearch={value => console.log(value)}
        />
        <a href={ 'http://www.zqslw.com' }>

        <div className="top-bar-users-forum">
          中青论坛
        </div>
        </a>
      </div>
    </div>
  )
}
export default TopBar
