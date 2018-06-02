import Reactotron from 'reactotron-react-native';
import sagaPlugin from 'reactotron-redux-saga';
import apisaucePlugin from 'reactotron-apisauce';

Reactotron.configure({ name: 'CustomTextInputExample' })
	.useReactNative()
	.use(apisaucePlugin())
	.use(sagaPlugin());

Reactotron.connect();
Reactotron.clear();

const sagaMonitor = Reactotron.createSagaMonitor();

console.tron = Reactotron;

module.exports = { sagaMonitor };
