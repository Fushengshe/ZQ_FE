import React, {Component} from 'react'
import {Menu, Icon} from 'antd'
import {Link} from 'react-router'

const ERR_OK = 0
const SubMenu = Menu.SubMenu
import goto from '../../../util'

class NavRender extends Component {
  constructor(props) {
    super(props)
    console.log(props);
  }

  state = {
    current: 'mail'
  }





render() {
  return (
    <Menu
      onClick={this.handleClick}
      selectedKeys={[this.state.current]}
      mode="horizontal"
    >
      <Menu.Item key="/">
        首页
      </Menu.Item>
      <SubMenu title="新闻速递">
        <Menu.Item key="/news/poem" to="news" >诗词要闻</Menu.Item>
        <Menu.Item key="/news/active" to="news">连坛动态</Menu.Item>
      </SubMenu>

      <SubMenu title="中华诗词">
        <Menu.Item key="setting:3">诗词大观</Menu.Item>
      </SubMenu>
      <SubMenu title="楹联中国">
        <Menu.Item key="setting:7">楹联文化</Menu.Item>
      </SubMenu>
      <SubMenu title="诗词大赛">
        <Menu.Item key="setting:11">征词征联</Menu.Item>
      </SubMenu>
      <SubMenu title="大学堂">
        <Menu.Item key="setting:14">诗词学堂</Menu.Item>
      </SubMenu>
      <SubMenu title="校园联盟">
        <Menu.Item key="setting:18">校园资讯</Menu.Item>
      </SubMenu>
    </Menu>
  )
}

}

export default NavRender
