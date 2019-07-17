import React, { Component } from 'react'
import GroupItem from '../../common/GroupItem/GroupItem'
import getApi from '../../api/getApi'
import URL from '../../api/url/index'
import './GroupList.css'
export class GroupList extends Component {
  state = {
    // shortName:'',
    groupList:[

    ]
  }
  getData = (res) => {

    const groupList = res.data.data
    this.setState({
      groupList
    })
    // console.log(this.state)
  }
  componentWillMount(){
    // this.setState({
    //   shortName:this.props.shortName
    // })
    getApi(URL.SON_API+this.props.shortName,this.getData)
  }
  render() {
    const groupContentList = this.state.groupList.map(item => {
      return (
        <div className="group-content-item" key={item.tag_id}>
          <GroupItem groupData={item}  />
        </div>
      )
    })
    return (
      <div className='group-list-content'>
        {groupContentList}
      </div>
    )
  }
}

export default GroupList
