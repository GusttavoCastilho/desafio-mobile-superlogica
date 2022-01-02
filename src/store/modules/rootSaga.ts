import { all } from "redux-saga/effects";
import characterSaga from "./Character/sagas";

export function* rootSaga() {
  yield all([characterSaga()]);
}
