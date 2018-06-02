import { all, fork } from 'redux-saga/effects';
import TextSagas from './TextSagas';

export default function* rootSaga() {
	yield all([fork(TextSagas.watcherTextChanged)]);
}
