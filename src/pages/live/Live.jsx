import React, { Component } from 'react'
import LeftSlide from '../../components/LeftSlide/LeftSlide'
import LiveContent from '../../components/LiveContent/LiveContent'
import './Live.css'
export class Live extends Component {
  render() {
    return (
      <div className='live'>
        <LeftSlide />
        <LiveContent />
      </div>
    )
  }
}

export default Live
