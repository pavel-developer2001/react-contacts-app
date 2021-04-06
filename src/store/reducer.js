const SET_FETCH_DATA = "SET_FETCH_DATA"

const initialState = {
    items: []
}
export default function mainReducer(state = initialState, action) {
    switch(action.type){
        case SET_FETCH_DATA:
            return {
                ...state,
                items: action.payload
            }
    }

}

export const setFetchData = (payload) => ({type:SET_FETCH_DATA, payload})