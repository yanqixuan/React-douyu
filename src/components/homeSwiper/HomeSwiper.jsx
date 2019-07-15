import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './HomeSwiper.css'

export class HomeSwiper extends Component {
  state = {
    curIndex:0,
    slider:[
      {
        leftPlayer:'https://sta-op.douyucdn.cn/douyu-vrp-admin/2019/06/28/1a14a63a8a677e5eb89b0e3e61c05504.jpg?x-oss-process=image/format,webp',
        rightBlock:'https://sta-op.douyucdn.cn/douyu-vrp-admin/2019/06/28/1a14a63a8a677e5eb89b0e3e61c05504.jpg?x-oss-process=image/format,webp',
      },
      {
        leftPlayer:'https://sta-op.douyucdn.cn/douyu-vrp-admin/2019/06/25/27269f56c2db3725a95af00bce5582f7.png?x-oss-process=image/format,webp',
        rightBlock:'https://sta-op.douyucdn.cn/douyu-vrp-admin/2019/06/25/27269f56c2db3725a95af00bce5582f7.png?x-oss-process=image/format,webp'
      },
      {
        leftPlayer:'https://sta-op.douyucdn.cn/douyu-vrp-admin/2019/06/28/1a14a63a8a677e5eb89b0e3e61c05504.jpg?x-oss-process=image/format,webp',
        rightBlock:'https://sta-op.douyucdn.cn/douyu-vrp-admin/2019/06/28/1a14a63a8a677e5eb89b0e3e61c05504.jpg?x-oss-process=image/format,webp'
      },
      {
        leftPlayer:'https://sta-op.douyucdn.cn/douyu-vrp-admin/2019/06/28/1a14a63a8a677e5eb89b0e3e61c05504.jpg?x-oss-process=image/format,webp',
        rightBlock:'https://sta-op.douyucdn.cn/douyu-vrp-admin/2019/06/28/1a14a63a8a677e5eb89b0e3e61c05504.jpg?x-oss-process=image/format,webp'
      },
      {
        leftPlayer:'https://sta-op.douyucdn.cn/douyu-vrp-admin/2019/06/28/1a14a63a8a677e5eb89b0e3e61c05504.jpg?x-oss-process=image/format,webp',
        rightBlock:'https://sta-op.douyucdn.cn/douyu-vrp-admin/2019/06/28/1a14a63a8a677e5eb89b0e3e61c05504.jpg?x-oss-process=image/format,webp'
      },
      {
        leftPlayer:'https://sta-op.douyucdn.cn/douyu-vrp-admin/2019/06/28/1a14a63a8a677e5eb89b0e3e61c05504.jpg?x-oss-process=image/format,webp',
        rightBlock:'https://sta-op.douyucdn.cn/douyu-vrp-admin/2019/06/28/1a14a63a8a677e5eb89b0e3e61c05504.jpg?x-oss-process=image/format,webp'
      },
    ]
  }
  changeActive = (index) => {
    this.setState({
      curIndex:index
    })
  }
  render() {
    const rightBlock = this.state.slider.map((item,index) => {
      return (
        <div  className={ this.state.curIndex === index ? 'home-swiper-active right-block' : 'right-block'}  key={index}>
          <NavLink onClick={()=>this.changeActive(index)}>
          <div className={ this.state.curIndex === index ? 'home-swiper-point' : ''}></div>
            <img src={item.rightBlock}/>
          </NavLink>
        </div>
      )
    })
    return (
      <div className='home-swiper-container'>
        <div className="home-swiper-left">
          <img src={ this.state.slider[this.state.curIndex].leftPlayer } alt=""/>
        </div>
        <div className="home-swiper-right">
          {rightBlock}
        </div>
      </div>
    )
  }
}

export default HomeSwiper
