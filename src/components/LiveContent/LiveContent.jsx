import React, { Component } from 'react'
import ListItem from '../../common/ListItem/ListItem'
import getApi from '../../api/getApi'
import URL from '../../api/url/index'
import './LiveContent.css'

export class LiveContent extends Component {
  state = {
    // liveSonApi:this.props.liveSonApi,
    liveList:[

    ]
  }
  getData = (res) => {
    const liveList = res.data.data
    this.setState({
      liveList
    })
    // console.log(this.state)
    // console.log('leftContent',this.props)
  }
  componentWillMount(){
    // this.props.changeSonApi('这是更改后的api')
    getApi(URL.LIVE_API+this.props.liveSonApi,this.getData)
  }
  render() {
    getApi(URL.LIVE_API_BASE+this.props.liveSonApi+'?&limit=30&offset=0',this.getData)
    // console.log(URL.LIVE_API+this.props.liveSonApi)
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
