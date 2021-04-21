import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import mainReducer from "./reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
	main: mainReducer,
});
//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunk))
);
export type RootState = ReturnType<typeof rootReducer>;
export default store;
