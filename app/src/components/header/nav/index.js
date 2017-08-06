import React, {Component} from 'react'
import {Menu, Icon} from 'antd'
import {Link} from 'react-router'
const SubMenu = Menu.SubMenu
import goto from '../../../util'
class Nav extends Component {
  state = {
    current: 'mail'
  }
  handleClick = (e) => {
    // console.dir(e)
    goto(e.key)
    this.setState({
      current: e.key
    })
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
          <Menu.Item key="setting:4">时代新声</Menu.Item>
          <Menu.Item key="setting:5">经典诗词鉴赏</Menu.Item>
          <Menu.Item key="setting:6">名家百科</Menu.Item>
        </SubMenu>
        <SubMenu title="楹联中国">
          <Menu.Item key="setting:7">楹联文化</Menu.Item>
          <Menu.Item key="setting:8">行业对联</Menu.Item>
          <Menu.Item key="setting:9">对联鉴赏</Menu.Item>
          <Menu.Item key="setting:10">联家风采</Menu.Item>
        </SubMenu>
        <SubMenu title="诗词大赛">
          <Menu.Item key="setting:11">征词征联</Menu.Item>
          <Menu.Item key="setting:12">获奖揭晓</Menu.Item>
          <Menu.Item key="setting:13">荣誉检索</Menu.Item>
        </SubMenu>
        <SubMenu title="大学堂">
          <Menu.Item key="setting:14">诗词学堂</Menu.Item>
          <Menu.Item key="setting:15">对联网校</Menu.Item>
          <Menu.Item key="setting:16">理论研习</Menu.Item>
          <Menu.Item key="setting:17">书画音像</Menu.Item>
        </SubMenu>
        <SubMenu title="校园联盟">
          <Menu.Item key="setting:18">校园资讯</Menu.Item>
          <Menu.Item key="setting:19">活动交流</Menu.Item>
          <Menu.Item key="setting:20">联盟介绍</Menu.Item>
          <Menu.Item key="setting:21">申请加入</Menu.Item>
        </SubMenu>
      </Menu>
    )
  }
}

export default Nav
