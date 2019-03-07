import * as API from '../utils/ReadableAPI'
import * as Types from './actionTypes'

export const fetchCategories = () =>{
    return (dispatch) => {
        API.fetchCategories().then(res => {
            dispatch({
                type: Types.FETCH_CATEGORY, res
            })
        })
    }
}