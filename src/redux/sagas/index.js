import { all, fork } from 'redux-saga/effects';
import CustomTextInputSagas from './CustomTextInputSagas';

export default function* rootSaga() {
	yield all([fork(CustomTextInputSagas.watcherTextChanged)]);
}
