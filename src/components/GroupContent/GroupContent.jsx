import React, { Component } from 'react'
// import GroupItem from '../../common/GroupItem/GroupItem'
import GroupList from '../GroupList/GroupList'
import getApi from '../../api/getApi'
import URL from '../../api/url/index'
import './GroupContent.css'
export class GroupContent extends Component {
  state = {
    groupNameList:[
      
    ]
  }
  getData = (res) => {
    // console.log(res.data.data)
    const groupNameList = res.data.data
    // return res;
    this.setState({
      groupNameList
    })
    // console.log(this.state)
  }
  componentWillMount(){
    getApi(URL.FATHER_API,this.getData)
  }
  render() {
    const groupContentList = this.state.groupNameList.map(item => {
      return (
        <div className="group-content-list" key={item.cate_id}>
          <div className="group-content-list-name">{item.cate_name}</div>
          <GroupList shortName={item.short_name}  />
        </div>
      )
    })
    return (
      <div className="group-content" >
        {groupContentList}
      </div>
    )
  }
}

export default GroupContent
