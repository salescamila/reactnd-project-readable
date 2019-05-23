import { RECEIVE_SINGLE_POST } from '../actions/singlePost'

export default function posts (state = {}, action) {
  switch(action.type) {
    case RECEIVE_SINGLE_POST:
      return {
        ...state,
        ...action.singlePost
      }
    default :
      return state
  }
}