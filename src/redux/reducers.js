import { combineReducers } from 'redux';  //组合reducer
import * as Actiontype from './actionTypes';

const initalState = {
  liveSonApi:''
}

function changeLiveSonApi (liveSonApi = initalState.liveSonApi, action) {
  switch (action.type) {
    case Actiontype.CHANGE_SON_API:
      return action.sonApi
      // return Object.assign({}, liveSonApi, {
      //   liveSonApi: action.sonApi
      // })
    default :
      return liveSonApi
  }
}

export default combineReducers ({
  changeLiveSonApi
})