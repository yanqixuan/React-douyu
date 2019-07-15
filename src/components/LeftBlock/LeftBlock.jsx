import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './LeftBlock.css'
export class LeftBlock extends Component {
  state = {
    leftGroupItems: [
      {
        leftGroupTitle: '网游竞技',
        leftGroupItem: ['lol云顶之奕', '绝地求生', 'lol云顶之奕', '绝地求生', 'lol云顶之奕', '绝地求生', 'lol云顶之奕', '绝地求生', 'lol云顶之奕', '绝地求生',]
      }
    ]
  }
  render() {
    const leftGroupItems = this.state.leftGroupItems.map(items => {
      const leftGroupItem = items.leftGroupItem.map(item => {
        return (
          <NavLink className='left-group-item'>
            {item}
          </NavLink>
        )
      })
      return (
        <div className='left-group-container'>
          <NavLink className="left-second-title">{items.leftGroupTitle}</NavLink>
          <div className="left-group-items">
            {leftGroupItem}
          </div>
        </div>
      )
    })

    return (
      <div>
        {leftGroupItems}
      </div>
    )
  }
}

export default LeftBlock
