import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import './GroupMenu.css'

export class GroupMenu extends Component {
  state = {
    group: [
      {
        title: '热门分类',
        item: [
          '英雄联盟', '穿越火线', 'DOTA2'
        ]
      },
      {
        title: '网友推荐',
        item: [
          'DNF', '二次元', '多多自走棋'
        ]
      }
    ]
  }
  render() {
    const group = this.state.group.map((items) => {
      let item = items.item

      const groupItem = item.map((item) => {
        return (
          <div className="items" key={item}>
            <NavLink className="item">
              {item}
            </NavLink>
          </div>
        )
      })

      return (
        <div className='wrapper' key={item.title}>
          <div className="title">{item.title}</div>
          <div className="content">
            {groupItem}
          </div>
        </div>
      )
    })

    return (
      <div className='group-container'>
        {group}
      </div>
    )
  }
}

export default GroupMenu
