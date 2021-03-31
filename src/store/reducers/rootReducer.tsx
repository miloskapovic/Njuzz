import { combineReducers } from "redux";
import newsHedlineReducer from "./newsHedlineReducer";
import isLoadingReducer from "./IsLoadingReducer";
import errorReducer from "./errorReducer";
import newsEverythingReducer from "./newsEverythingReducer";

const rootReducer = combineReducers({
  hedlineNews: newsHedlineReducer,
  everythingNews: newsEverythingReducer,
  isLoading: isLoadingReducer,
  error: errorReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
