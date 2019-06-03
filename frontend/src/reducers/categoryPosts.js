import { RECEIVE_CATEGORY_POSTS,
         ADD_VOTE_CATEGORY_POST, } from '../actions/categoryPosts'

export default function categoryPosts (state = {}, action) {
  switch(action.type) {
    case RECEIVE_CATEGORY_POSTS :
      let posts = null
      const post_keys = Object.keys(action.categoryPosts)
      post_keys.map((i)=>(
        posts = {
          ...posts,
          [action.categoryPosts[i].id]: action.categoryPosts[i]
        }
      ))

      return {
        ...state,
        ...posts
      }
    case ADD_VOTE_CATEGORY_POST:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          voteScore: state[action.id].voteScore + action.count
        }
      }
    default :
      return state
  }
}