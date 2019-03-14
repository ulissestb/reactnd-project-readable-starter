import * as Types from '../actions/actionTypes'
import sortBy from 'sort-by'


function posts(state=[], action) {
  const { posts, post, postId, updatedPost, sortKey } = action
  switch(action.type) {
    case Types.FETCH_POSTS:
      return action.posts.filter(post => !(post.deleted))
    case Types.GET_CATEGORY_POSTS:
      return posts.filter(post => !(post.deleted))
    case Types.ADD_POST:
      return state.concat([post])
    case Types.UPDATE_POST:
      return state.map(post => {
        if(post.id === postId) {
          post = updatedPost
        }
        return post
      })
    case Types.DELETE_POST:
      return state.filter(post => post.id !== postId)
    case Types.VOTE_POST:
    return state.map(post => {
      if (post.id === action.postId) {
        let updatedScore = post.voteScore
        if (action.option === "upVote") {
          updatedScore += 1
        }
        if (action.option === "downVote") {
          updatedScore -= 1
        }
        return {
          ...post,
          voteScore: updatedScore
        }
      }
      return post
    })
      case Types.SORT_POST:
        return [].concat(state.sort(sortBy("-"+sortKey)))
    default:
      return state
  }
}

export default posts
