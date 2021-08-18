import selectAdminReducer from "./selectAdminReducer";
import selectFoundationReducer from "./selectFoundationReducer";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  selectAdminReducer,
  selectFoundationReducer,
});

const middlewares = applyMiddleware(thunk);
export const store = createStore(rootReducer, middlewares);

export default store;
