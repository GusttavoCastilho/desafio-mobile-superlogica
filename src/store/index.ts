import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, compose } from "@reduxjs/toolkit";

import rootReducer from "./modules/rootReducer";
import { rootSaga } from "./modules/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;

export type RootState = ReturnType<typeof store.getState>;
