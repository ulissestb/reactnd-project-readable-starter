import * as API from '../utils/ReadableAPI'
import * as Types from './actionTypes'

export const fecthAllPosts = () => {
    return (dispatch) => {
        API.fetchPosts().then( post => {
            dispatch({
                type: Types.FETCH_POSTS, posts
            })
        })
    }
}

export const fetchPostByCategory = ( category ) => {
    return (dispatch) => {
        API.fetchPostByCategory(category).then( post => {
            dispatch({
                type: Types.GET_CATEGORY_POSTS, post
            })
        })
    }
}