import React, { Component } from 'react'
import ListItem from '../../common/ListItem/ListItem'
import getApi from '../../api/getApi'
import URL from '../../api/url/index'
import './LiveContent.css'

export class LiveContent extends Component {
  state = {
    liveList:[

    ]
  }
  getData = (res) => {
    // console.log(res.data.data)
    const liveList = res.data.data
    // return res;
    this.setState({
      liveList
    })
    console.log(this.state)
  }
  componentWillMount(){
    getApi(URL.LIVE_API,this.getData)
  }
  componentDidMount(){
    console.log(this.state)
  }
  render() {
    const liveContentList = this.state.liveList.map(item => {
      return (
        <div className="live-content-item">
          <div className="live-content-list">
            <ListItem listData={item} key={item.room_id}/>
          </div>
        </div>
      )
    })
    return (
      <div className='live-content'>
        {liveContentList}
      </div>
    )
  }
}

export default LiveContent
