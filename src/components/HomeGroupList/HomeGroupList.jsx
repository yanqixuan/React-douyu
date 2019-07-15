import React, { Component } from 'react'
import ListItem from '../../common/ListItem/ListItem'
import { NavLink } from 'react-router-dom'
import './HomeGroupList.css'
export class HomeGroupList extends Component {
  state = {
    HomeGroup: {}
  }
  componentWillMount() {
    this.setState({
      HomeGroup: this.props.HomeGroup
    })
  }
  componentDidMount() {

  }
  render() {
    const ListItems = this.state.HomeGroup.HomeGroupList.map((item) => {
      return (
        <div className="list-item">
          <ListItem listData={item} key={item.id} />
        </div>
      )
    })
    return (
      <div className='home-group-list-container'>
        <div className="home-group-list-title">
          <NavLink>
            <img src={this.state.HomeGroup.HomeGroupListSrc} alt="" />
            <span className="home-group-list-text">{this.state.HomeGroup.HomeGroupListTitle}</span>
          </NavLink>
        </div>
        <div className="home-group-list-items">
          {ListItems}
        </div>
      </div>
    )
  }
}

export default HomeGroupList
