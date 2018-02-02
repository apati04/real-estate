import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import currentUserReducer from "./current_user_reducer";

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  form: formReducer
});

export default rootReducer;
