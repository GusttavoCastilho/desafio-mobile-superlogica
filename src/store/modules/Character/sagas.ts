import { AxiosResponse } from "axios";
import { all, call, put, select, takeLatest } from "redux-saga/effects";
import api from "../../../services/api";
import { getAllCharacter, addCharacter, searchCharacter } from "./reducers";

function* getCharacter(): Generator {
  try {
    const {
      //@ts-ignore
      character: { search, currentPage },
    } = yield select((state) => state);

    //@ts-ignore
    const response: AxiosResponse = yield call(
      api.get,
      `character?name=${search}&page=${currentPage}`
    );
    yield put(
      addCharacter({
        character: [...response.data.results],
        fullPage: response.data.info.pages,
      })
    );
  } catch (error) {
    console.log(error);
  }
}

function* watchRequestFilter() {
  yield takeLatest(searchCharacter, getCharacter);
}

function* watchRequestCharacter() {
  yield takeLatest(getAllCharacter, getCharacter);
}

function* root() {
  yield all([watchRequestCharacter(), watchRequestFilter()]);
}

export default root;
