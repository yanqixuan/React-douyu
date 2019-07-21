
import { connect } from 'react-redux';
import GroupItem from '../../common/GroupItem/GroupItem'
import { changeSonApi } from '../../redux/action'
/**
 * 返回的当作props
 * container component
 * pure component
 */
// 从redux获取数据
const mapStateToProps = (state) => {
  return {
    liveSonApi:state.changeLiveSonApi
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeSonApi: (sonApi) => {
      dispatch(changeSonApi(sonApi))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupItem)