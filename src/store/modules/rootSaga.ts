import { all, fork } from "redux-saga/effects";
import characterSaga from "./Character/sagas";

export function* rootSaga() {
  yield all([fork(characterSaga)]);
}
