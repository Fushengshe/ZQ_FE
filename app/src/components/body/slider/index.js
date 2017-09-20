import React, {Component} from 'react'
import {Carousel} from 'antd'
import SliderRender from '../slider_render/index'

import './index.less'
const ERR_OK = 0

class Slider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fetchData : false,
      links : [],
    }
    this.fetchSliderList = this.fetchSliderList.bind(this)
  }

  componentDidMount () {
    this.fetchSliderList()
  }

  fetchSliderList () {
    fetch('http://www.thmaoqiu.cn/poetry/public/index.php/carousel/show',{
      method : 'GET',
      headers : {

      }
    }).then((res) => res.json()).then(json => {
      if (json.code === ERR_OK) {
        this.setState({
          links : json.data,
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
            ? <SliderRender links={this.state.links}/>
            : "loading"
        }

      </div>
    )
  }
}

export default Slider