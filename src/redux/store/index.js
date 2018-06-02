import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { sagaMonitor } from '../../configs';
import reducers from '../reducers';
import rootSaga from '../sagas';

const middleWare = [];
//middleWare.push(loggerMiddleware);

// Setup Redux-Saga
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
middleWare.push(sagaMiddleware);

const store = createStore(reducers, {}, compose(applyMiddleware(...middleWare)));

// Initiate root saga.
sagaMiddleware.run(rootSaga);

export default store;
