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

import './index.less'

class PicCard extends Component {
  constructor (props) {
    super(props);
    console.log(props)
    this.state = {};
    //console.log(props);
    //this.FetchArticleCommit = this.FetchArticleCommit.bind(this)
  }


  //需要文章ID才能查询文章下的评论



  render () {

    // const {title} = config
    return (
      <div>
      <Card className="pic-card" title={null} style={{width:'100%'}}>
        <div className="pic-card-item">
          <img src={Dongqin} alt="" />
          <div className="pic-card-item-desc">东秦诗词楹联学社</div>
        </div>
        <div className="pic-card-item">
          <img src={Gansuzhengfa} alt="" />
          <div className="pic-card-item-desc">甘肃政法崇文诗联</div>
        </div>
        <div className="pic-card-item">
          <img src={Donghualigong} alt="" />
          <div className="pic-card-item-desc">东华理工秋云诗社</div>
        </div>
        <div className="pic-card-item">
          <img  src={Anhuishifan} alt="" />
          <div className="pic-card-item-desc">安徽师范江南诗社</div>
        </div>
        <div className="pic-card-item-large">
          <a href="http://www.chinaysc.cn">
          <img  src={bottomOne} alt="" />
          </a>
        </div>
        <div className="pic-card-item-large">
          <a href="http://s.lapsang.cn">
          <img  src={bottomZero} alt="" />
          </a>
        </div>
      </Card>
        {
          this.props.params.params.id === null || this.props.params.params.id === undefined
            ? ""
            : <JumpForm article={this.props.params.params.id}/>
        }
      </div>
    )
  }
}

export default PicCard