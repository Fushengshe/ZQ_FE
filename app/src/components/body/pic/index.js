import React, { Component } from 'react'
import { Link } from 'react-router';
import JumpForm from '../../../pages/list/comment/index'
// import {config} from './index.json'
import pic from './pic.png'
import bottomOne from './bottom_0.png'
import bottomZero from './bottom_1.png'
import Anhuishifan from './anhuishifan.jpg'
import Donghualigong from './donghualigong.jpg'
import Gansuzhengfa from './gansuzhengfa.jpg'
import Dongqin from './dongqin.jpg'
import { Card } from 'antd'
import API from  '../../../../api.js';
import RightRender from './index_render.js';
import Loading from '../slider/loading'


import './index.less'
const ERR_OK = 0
class PicCard extends Component {
  constructor (props) {
    super(props);
    // console.log(props)
    this.state = {
      fetchData: false,
      links: [],
    };
    //console.log(props);
    //this.FetchRightPics = this.FetchRightPics.bind(this)
    this.FetchRightPics = this.FetchRightPics.bind(this)
  }

  componentDidMount () {
    this.FetchRightPics()
  }

  


  //需要文章ID才能查询文章下的评论
  FetchRightPics () {
    fetch(API()+'/links/show',{
      method : 'GET',
      headers : {

      }
    }).then((res) => res.json()).then(json => {
      if (json.code === ERR_OK) {
        this.setState({
          links : json.data,
          fetchData : true
        })
        // console.log(this.state.links)
      }
    })
  }

  



  render () {

    // const {title} = config
    return (
      <div>

      {
          this.state.fetchData === true
            ? <RightRender links={this.state.links}/>
            : <Loading/>
        }
        
      </div>
    )
  }
}

export default PicCard