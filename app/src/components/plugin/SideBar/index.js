import React, { Component } from 'react';
import { Link } from 'react-router';
import './index.less'
import API from '../../../../api'

const ERR_OK = 0;

class SideBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fetchData : false,
      links : [],
      cat_father:"Loading"
    }
    //console.log(this.props)
    this.FetchCateList = this.FetchCateList.bind(this)
  }

  componentDidMount() {
    this.FetchCateList();
  }
  //还需要找到这些分类的父级名字
  componentWillReceiveProps(nextProps) {
    this.FetchCateList(); //动态刷新支援
    return true;
  }




  //根据分类找到分类列表
  FetchCateList() {
    const cid = this.props.cate
    fetch(API()+'/breadfather/'+cid, {
      header : {},
      method : "GET"
    }).then((res) => {
      if(res.status !== 200) {
        console.log('请求出错')
        return;
      }
      return res.json()
    }).then((json) => {
      if(json.code === ERR_OK) {
        this.setState({
          cat_father: json.data.name
        })
      }
    });
    fetch(API()+'/bread/'+cid, {
      header : {},
      method : "GET"
    }).then((res) => {
      if(res.status !== 200) {
        console.log('请求出错')
        return;
      }
      return res.json()
    }).then((json) => {
      if(json.code === ERR_OK) {
        //console.log(json)
        this.setState({
          fetchData : true,
          links : json.data
        })
      }
    })

  }


  render () {
    const linksItem = this.state.links.map((item, index) => {

      if(item.id === this.props.cate) {
        return (

          <div className="sider-bar-active" key={ index }>
          {item.name}
          </div>

        );
      } else {
        return (<div className="sider-bar-normal-blue" key={ index }>
          <Link to={'/news/'+item.id}>
            { item.name }
          </Link>
        </div>);
      }
    });

    return (
      <div className="sider-bar">
        <div className="sider-bar-title">{ this.state.cat_father }</div>
        {linksItem}
      </div>
    );
  }
}

export default SideBar
