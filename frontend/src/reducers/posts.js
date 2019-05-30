import { RECEIVE_POSTS, ADD_POST, ADD_VOTE_POST } from '../actions/posts'

export default function posts (state = {}, action) {
  switch(action.type) {
    case RECEIVE_POSTS :
      let posts = null
      const post_keys = Object.keys(action.posts)
      post_keys.map((i)=>(
        posts = {
          ...posts,
          [action.posts[i].id]: action.posts[i]
        }
      ))

      return {
        ...state,
        ...posts
      }
    case ADD_POST:
      return {
        ...state,
        [action.post.id]: action.post
      }
    case ADD_VOTE_POST:
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
