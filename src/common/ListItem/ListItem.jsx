import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './ListItem.css'

export class ListItem extends Component {
  state = {
    listData: {}
  }
  componentDidMount() {
    this.setState({
      listData: this.props.listData
    })
  }
  render() {
    return (
      <div className="ListItem-container">
        <NavLink>
          <div className="ListItem-img">
            <img src={this.state.listData.room_src} />
          </div>
          <div className="ListItem-content">
            <div className="ListItem-title">
              <span className="ListItem-group"><h3>{this.state.listData.game_name}</h3></span><h2 className="ListItem-title-name">{this.state.listData.room_name}</h2>
            </div>
            <div className="ListItem-info">
              <h3><span className='ListItem-hot'>{(this.state.listData.hn/10000).toFixed(1)}万</span><img src="" alt="" /><span className="ListItem-master">{this.state.listData.nickname}</span></h3>
            </div>
          </div>
        </NavLink>
      </div>
    )
  }
}

export default ListItem
