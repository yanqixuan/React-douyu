import React, { Component } from 'react'
import LeftSlide from '../../components/LeftSlide/LeftSlide'
import GroupContent from '../../components/GroupContent/GroupContent'
import './Group.css'
export class Group extends Component {
  render() {
    return (
      <div className='group'>
        <LeftSlide />
        <GroupContent />
      </div>
    )
  }
}

export default Group
