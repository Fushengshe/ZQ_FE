import React from 'react'
import './index.less'
import {Tooltip,Input,Form} from 'antd'
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
        <Search
          placeholder=""
          style={{ width: 200 }}
          onSearch={value => console.log(value)}
        />
        <div className="top-bar-users-entry">
          登录/注册
        </div>
        <div className="top-bar-users-forum">
          中青论坛
        </div>
      </div>
    </div>
  )
}
export default TopBar
