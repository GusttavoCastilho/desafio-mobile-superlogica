import { AxiosResponse } from "axios";
import { call, put, all, takeLatest } from "redux-saga/effects";
import api from "../../../services/api";
import { fetchCharacterSuccess } from "./actions";
import { CharacterTypes, ICharacter } from "./types";

const getCharacter = () => api.get<ICharacter[]>("character");

function* fetchCharacterSaga() {
  try {
    const response: AxiosResponse = yield call(getCharacter);
    yield put(fetchCharacterSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
}

function* characterSaga() {
  yield all([
    takeLatest(CharacterTypes.fetchCharacterRequest, fetchCharacterSaga),
  ]);
}

export default characterSaga;
