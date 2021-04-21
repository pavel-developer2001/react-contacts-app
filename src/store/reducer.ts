const SET_FETCH_DATA = "SET_FETCH_DATA";

type InitialStateType = {
	items: any[],
	loading: boolean
}

const initialState: InitialStateType = {
	items: [],
	loading: true,
};
export default function mainReducer(state = initialState, action: any) {
	switch (action.type) {
		case SET_FETCH_DATA:
			return {
				...state,
				items: action.payload,
				loading: false,
			};
		default:
			return state;
	}
}

export const setFetchData = (payload: any) => ({ type: SET_FETCH_DATA, payload });

