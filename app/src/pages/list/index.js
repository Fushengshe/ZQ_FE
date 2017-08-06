import React,{Component} from 'react'
import './index.less'
import SideBar from '../../components/plugin/sideBar'
import NewsLink from '../../components/plugin/NewsLink'
class Index extends Component{
  constructor (props){
    super(props)
    this.state={
    }
  }
  render(){
    const links = [
      '甘肃政法学院大学生崇文诗联社受邀参加河柳',
      '首届泰城高校文化艺术交流会举办',
      '无情对“联”欢二十一期',
      '甘肃政法学院大学生崇文诗联社受邀参加河柳',
      '甘肃政法学院大学生崇文诗联社受邀参加河柳',
      '首届泰城高校文化艺术交流会举办',
      '无情对“联”欢二十一期',
      '甘肃政法学院大学生崇文诗联社受邀参加河柳',
      '甘肃政法学院大学生崇文诗联社受邀参加河柳',
      '甘肃政法学院大学生崇文诗联社受邀参加河柳',
      '甘肃政法学院大学生崇文诗联社受邀参加河柳'
    ]
    // const title = config
    return (
      <div className="list-route">
        {this.props.children}
      </div>
    )
  }

}
export default Index
