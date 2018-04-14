import React, { Component } from 'react'
import { Link } from 'react-router'
import Slider from './body/slider'
import Header from './header'
import News from './news'
import PicCard from './body/pic'
import Intr from './body/intr'
import Links from './footer/links'
import './app.less'

class AppComponent extends Component {

  constructor(props) {
    super(props)

  }

  componentWillMount() {
    console.log(1)
  }

  componentDidMount() {

  }

  render () {
    return (
      <div className="App">
        <Header />
        <Slider />
        <div className="main">
          <div className="lside">
            {this.props.children}
          </div>
          <div className="rside">
            <PicCard params={this.props} />
          </div>
        </div>
        <div><hr/><Links /></div>
        <div className="footer">
          <span>版权所有©中国青年诗词楹联网
         </span>
          <span>
          闽ICP备12025194号-3</span>
        </div>
      </div>
    )
  }
}

export default AppComponent
