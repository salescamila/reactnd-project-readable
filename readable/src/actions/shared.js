//import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { setAuthedUser } from '../actions/authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'

const AUTHED_ID = 'camilasales'

export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading())

    /*
    return getInitialData()
      .then(({ users, tweets }) => {
        dispatch(receiveUsers(users))
        //dispatch(receiveTweets(posts))
        //dispatch(receiveTweets(comments))
        dispatch(setAuthedUser(AUTHED_ID))
        dispatch(hideLoading())
      })
    */
  }
}