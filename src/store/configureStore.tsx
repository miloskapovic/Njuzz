import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from 'redux-persist'
import storage from "redux-persist/lib/storage";

import rootReducer from "./reducers/rootReducer";
import rootSaga from "./sagas/rootSaga";

const persistConfig = {
  key: 'root',
  storage: storage,
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer)

const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
  const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
  let persistor = persistStore(store)
  sagaMiddleware.run(rootSaga);
  return { store, persistor };
};

export default configureStore;