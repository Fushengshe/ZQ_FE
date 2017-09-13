import React, {Component} from 'react'
import {Menu, Icon} from 'antd'
import {Link} from 'react-router'
import NavRender from './nav_render'
const ERR_OK = 0
const SubMenu = Menu.SubMenu
import goto from '../../../util'

class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fetchData: false,
      links: [],
    }
    this.fetchNavList = this.fetchNavList.bind(this)
  }


  componentDidMount() {
    this.fetchNavList()
  }

  fetchNavList () {
    fetch('http://www.thmaoqiu.cn/poetry/public/index.php/showlists',{
      method : 'GET',
      headers : {
      }
    }).then((res) => res.json()).then(json => {
      if (json.code === ERR_OK) {
        this.setState({
          links : json.res,
          fetchData : true
        })
        //console.log(this.state.links)
      }
    })
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
      <div>
        {
          this.state.fetchData === true
            ?<NavRender links={this.state.links}/>
            :"loading"
        }

      </div>
    )
  }
}

export default Nav
