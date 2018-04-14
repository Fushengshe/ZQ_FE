import React, {Component} from 'react'
import {Menu, Icon} from 'antd'
import {Link} from 'react-router'
import NavRender from './nav_render'
const ERR_OK = 0
const SubMenu = Menu.SubMenu
import goto from '../../../util'
import API from '../../../../api'
import Loading from './loading'

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
    fetch(API()+'/showlists',{
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



  render() {
    return (
      <div>
        {
          this.state.fetchData === true
            ?<NavRender links={this.state.links}/>
            :<Loading/>
        }

      </div>
    )
  }
}

export default Nav
