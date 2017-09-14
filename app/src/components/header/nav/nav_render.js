import React, {Component} from 'react'
import {Menu, Icon} from 'antd'
import {Link} from 'react-router'
const ERR_OK = 0
const SubMenu = Menu.SubMenu
import goto from '../../../util'

class NavRender extends Component {
  constructor(props) {
    super(props);
    //console.log(this.props.links)
  }
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
      {
        this.props.links.map((item, index) => {
          return (
            <SubMenu title={item.column} key={index}>
              {
                (item.childColumn) === undefined
                  ? <Menu.Item key={index} to="news" >下无分类</Menu.Item>
                  : item.childColumn.map((sitem,sindex) => {
                    return (
                      <Menu.Item key={sindex} to="news" >{sitem.name}</Menu.Item>
                    )
                })
              }

            </SubMenu>
          )
        })
      }
    </Menu>
  )
}

}

export default NavRender
