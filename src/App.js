import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import { Provider } from 'react-redux';
import store from './redux/store';

import CustomTextInput from './components/CustomTextInput';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<CustomTextInput />
			</Provider>
		);
	}
}

export default App;
