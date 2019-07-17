import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import getApi from '../../api/getApi'
import URL from '../../api/url/index'
import './LeftBlock.css'
export class LeftBlock extends Component {
  state = {
    leftGroupTitle:'',
    leftGroupItem:[],
  }
  getData = (res) => {
    const leftGroupTitle = this.props.cateName
    const leftGroupItem = res.data.data
    this.setState({
      leftGroupTitle,
      leftGroupItem
    })
    // console.log(this.state)
  }
  componentWillMount(){
    console.log(this.props)
    getApi(URL.SON_API+this.props.shortName,this.getData)
  }
  handleSonApi = (id) => {
    this.props.changeSonApi(id)
    console.log(id,this.props)
  }
  render() {
      // const leftGroupItem = []
      // for(let i =0;i<15;i++){
      //   leftGroupItem.push(
      //     <div className='left-group-item-wraper'>
      //       <NavLink className='left-group-item'>
      //         {this.state.leftGroupItem[i].tag_name}
      //       </NavLink>
      //     </div>
      //   )
      // }
      const leftGroupItem = this.state.leftGroupItem.map(item => {
        return (
          <div className='left-group-item-wraper' onClick = {() => {this.handleSonApi(item.tag_id)}}>
            <NavLink className='left-group-item' >
              {item.tag_name}
            </NavLink>
          </div>
        )
      })
      return (
        <div className='left-group-container'>
          <NavLink className="left-second-title">{this.state.leftGroupTitle}</NavLink>
          <div className="left-group-items">
            {leftGroupItem}
          </div>
        </div>
      )
  }
}

export default LeftBlock
