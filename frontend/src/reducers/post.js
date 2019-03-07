import * as Types from '../actions/actionTypes'
//import sortBy from 'sort-by'

function posts(state = [], action){
    const {posts, post, postId, updatedPost, sortKey } = action
    switch(action.type){
        case Types.FETCH_POSTS:
            return action.posts.filter(post => !(post.deleted))
        case Types.GET_CATEGORY_POSTS:
            return posts.filter(post => !(post.deleted))
        case Types.ADD_POST:
            return state.concat([post])
        case Types.UPDATE_POST:
            return state.map(post => post.id === postId ? updatedPost : post)
        case Types.DELETE_POST:
            return state.filter(post => post.id !== postId)
        //case Types.VOTE_POST:
            // make upvote n downvote
        //case types.SORT_POST:
            //return [].concat(state.sort(sortBy("-"+sortKey)))
        default:
            return state
    }
}