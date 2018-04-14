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
    return (
      <div className="list-route">
        {this.props.children}
      </div>
    )
  }

}
export default Index
