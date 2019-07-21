import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './GroupItem.css'

export class GroupItem extends Component {
  state = {
    src:'',
    groupData: {
    }
  }
  componentDidMount() {
    const regex = /(?<="web":").*(?="})/
    const src = this.props.groupData.square_icon_name.match(regex).toString()
    this.setState({
      groupData: this.props.groupData,
      src
    })
    // console.log(src)
  }
  handleSonApi = (id) => {
    this.props.changeSonApi(id);
    console.log(id)
  }
  render() {
    return (
      <div className='GroupItem-container'>
        {/* <NavLink to='../../components/GroupLiveContent/GroupLiveContent.jsx'> */}
        <NavLink to='/live' onClick = {() => {this.handleSonApi(this.props.clickId)}}>
          <div className="GroupItem-img">
            <img src={this.state.src} alt=""/>
          </div>
          <div className="GroupItem-content">
            <div className="GroupItem-title"><strong>{this.state.groupData.tag_name}</strong></div>
            {/* <div className="GroupItem-hot">{this.state.groupData.count}</div> */}
          </div>
        </NavLink>

      </div>
    )
  }
}

export default GroupItem
