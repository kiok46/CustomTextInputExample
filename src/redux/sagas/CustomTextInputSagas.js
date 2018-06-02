import { put, take, fork } from 'redux-saga/effects';
import { TEXT_CHANGED, TEXT_CHANGED_SUCCESS } from '../types';

// ****************
// WORKERS
// ****************

function* workerTextChanged(action) {
	console.log(action);
	try {
		yield put({ type: TEXT_CHANGED_SUCCESS, text: action.payload });
	} catch (e) {
		console.log('Error', e);
	}
}

// ****************
// WATCHERS
// ****************

export function* watcherTextChanged() {
	while (true) {
		const action = yield take(TEXT_CHANGED);
		yield fork(workerTextChanged, action);
	}
}

module.exports = {
	watcherTextChanged
};
