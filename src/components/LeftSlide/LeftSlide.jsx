import React, { Component } from 'react'
// import LeftBlock from '../LeftBlock/LeftBlock'
import LeftBlock from '../../pages/containers/LeftBlock'
import { NavLink } from 'react-router-dom'
import './LeftSilde.css'
import URL from '../../api/url/index'
import getApi from '../../api/getApi'

export class LeftSlide extends Component {
  state = {
    slideTitle: [
      {
        text: '我的关注'
      },
      {
        text: '排行榜'
      },
      {
        text: '页游中心'
      },
      {
        text: '赛事'
      }
    ],
    slideList:[]
  }
  getData = (res) => {
    // console.log(res.data.data)
    const slideList = res.data.data
    // return res;
    this.setState({
      slideList
    })
    // console.log(this.state)
  }
  componentWillMount(){
    getApi(URL.FATHER_API,this.getData)
  }
  render() {
    const leftTitle = this.state.slideTitle.map(item => {
      return (
        <div className="left-title">
          <NavLink className='left-title-text'>{item.text}</NavLink>
        </div>
      )
    })
    const slideList = this.state.slideList.map(item => {
      return (
        <LeftBlock cateName={item.cate_name} shortName={item.short_name} />
      )
    })
    return (
      <div className='left-container'>
        {leftTitle}
        {slideList}
      </div>
    )
  }
}



export default LeftSlide
