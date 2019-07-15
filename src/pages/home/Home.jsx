import React, { Component } from 'react'
import HomeSwiper from '../../components/homeSwiper/HomeSwiper'
import HomeGroupList from '../../components/HomeGroupList/HomeGroupList'
import './Home.css'

export class Home extends Component {
  state = {
    HomeGroup: {
      HomeGroupListTitle: '英雄联盟',
      HomeGroupListSrc: 'https://sta-op.douyucdn.cn/dy-listicon/31ac7b28068e30d297e33ec6045bc05d.png?x-oss-process=image/format,webp',
      HomeGroupList: [
        {
          src: 'https://rpic.douyucdn.cn/asrpic/190710/288016_2056.png/webpdy1',
          title: '亚洲对抗赛总决赛直播66666666666666666666',
          group: '英雄联盟',
          master: '英雄联盟赛事',
          hot: 134,
          id: 2
        },
        {
          src: 'https://rpic.douyucdn.cn/asrpic/190710/288016_2056.png/webpdy1',
          title: '亚洲对抗赛总决赛直播',
          group: '英雄联盟',
          master: '英雄联盟赛事',
          hot: 134,
          id: 3
        },
        {
          src: 'https://rpic.douyucdn.cn/asrpic/190710/288016_2056.png/webpdy1',
          title: '亚洲对抗赛总决赛直播',
          group: '英雄联盟',
          master: '英雄联盟赛事',
          hot: 134,
          id: 4
        },
        {
          src: 'https://rpic.douyucdn.cn/asrpic/190710/288016_2056.png/webpdy1',
          title: '亚洲对抗赛总决赛直播',
          group: '英雄联盟',
          master: '英雄联盟赛事',
          hot: 134,
          id: 5
        },
        {
          src: 'https://rpic.douyucdn.cn/asrpic/190710/288016_2056.png/webpdy1',
          title: '亚洲对抗赛总决赛直播',
          group: '英雄联盟',
          master: '英雄联盟赛事',
          hot: 134,
          id: 6
        },
      ]
    }
  }
  
  render() {
    return (
      <div className='home-container'>
        <HomeSwiper />
        <HomeGroupList HomeGroup={this.state.HomeGroup} />
      </div>
    )
  }
}

export default Home
