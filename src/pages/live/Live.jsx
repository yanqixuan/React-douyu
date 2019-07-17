import React, { Component } from 'react'
import LeftSlide from '../../components/LeftSlide/LeftSlide'
// import LiveContent from '../../components/LiveContent/LiveContent'
import LiveContent from '../containers/LiveContent'
import './Live.css'
export class Live extends Component {
  componentDidMount(){
    // console.log(this.props)
  }
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
