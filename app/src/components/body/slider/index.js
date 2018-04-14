import React, {Component} from 'react'
import {Carousel} from 'antd'
import Loading from './loading'
import SliderRender from '../slider_render/index'
import API from  '../../../../api.js';

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

  componentWillMount () {

  }

  componentDidMount () {
    this.fetchSliderList()
  }

  fetchSliderList () {
    fetch(API()+'/carousel/show',{
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
            : <Loading/>
        }
      </div>
    )
  }
}

export default Slider