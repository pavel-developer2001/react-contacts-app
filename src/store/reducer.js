const SET_FETCH_DATA = "SET_FETCH_DATA"

const initialState = {
    items: [],
    loading: true
}
export default function mainReducer(state = initialState, action) {
    switch(action.type){
        case SET_FETCH_DATA:
            return {
                ...state,
                items: action.payload,
                loading: false
            }
        default:
            return state
    }

}

export const setFetchData = (payload) => ({type:SET_FETCH_DATA, payload})