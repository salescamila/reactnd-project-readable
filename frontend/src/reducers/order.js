import { ORDER_BY } from '../actions/order'

export default function order (state = {}, action) {
  switch(action.type) {
    case ORDER_BY :
      return {
        ...state,
        ...action.order
      }
    default :
      return state
  }
}