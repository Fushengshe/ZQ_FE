import React, {Component} from 'react'
import {Carousel} from 'antd'
import SliderRender from '../slider_render/index'
import slide1 from './about.jpg'
import slide2 from './academic.jpg'
import slide3 from './admissions.jpg'
import slide4 from './collaboration.jpg'
import slide5 from './education.jpg'
import slide6 from './research.jpg'
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