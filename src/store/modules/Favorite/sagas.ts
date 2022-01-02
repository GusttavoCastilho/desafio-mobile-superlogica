import { all, put } from "redux-saga/effects";

import { removeFavoriteCharacter } from "./reducers";

function* watchRequestCharacterRemove() {
  yield put(removeFavoriteCharacter);
}

function* root() {
  yield all([watchRequestCharacterRemove()]);
}

export default root;
