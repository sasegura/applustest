import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, compose } from "redux";
import reducer from "../reducer";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  let store = createStore(
    persistedReducer,
    compose(applyMiddleware(sagaMiddleware))
  );
  let persistor = persistStore(store);

  return {
    store,
    persistor,
    sagaMiddleware,
  };
};

export default configureStore;
