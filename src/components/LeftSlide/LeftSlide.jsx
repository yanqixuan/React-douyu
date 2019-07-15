import React, { Component } from 'react'
import LeftBlock from '../LeftBlock/LeftBlock'
import { NavLink } from 'react-router-dom'
import './LeftSilde.css'
import URL from '../../api/url/index'
import spider from '../../api/spider'
const axios = require('axios')
const cheerio = require('cheerio')

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
    ]
  }
  componentWillMount() {
    function gettt() {
      axios.get('/directory/all', (res) => {
        console.log('res---------', res)
        const $ = cheerio.load(res.data)
        // console.log($('.Aside-menu-title').text())
      })
    }
    gettt()
    // console.log(URL.LIVE_API)
    // request(LIVE_API,function(err,res,body){
    //   console.log(res)
    // })
    // start(URL.LIVE_API)
    // console.log(start(LIVE_API))
    // const AsideMenuTitle = spider(URL.LIVE_URL,'Aside-menu-title')
    // const AsideMenuItem = spider(URL.LIVE_URL,'Aside-menu-item')
    // const AsideMenuTitle = spider('/directory/all', 'Aside-menu-title')
    // const AsideMenuItem = spider('/directory/all', 'Aside-menu-item')
    // console.log(AsideMenuTitle,AsideMenuItem)
  }
  Control() {

  }
  render() {
    const leftTitle = this.state.slideTitle.map(item => {
      return (
        <div className="left-title">
          <NavLink className='left-title-text'>{item.text}</NavLink>
        </div>
      )
    })
    return (
      <div className='left-container'>
        {leftTitle}
        <LeftBlock />
      </div>
    )
  }
}



export default LeftSlide
