import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";

import rootReducer from "./modules/rootReducer";
import { rootSaga } from "./modules/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
