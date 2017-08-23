import React, { Component } from 'react';
import {
  AppRegistry,
  TextInput,
} from 'react-native';

import { Provider } from 'react-redux';
import store from './Store';

import CustomTextInput from './Components/CustomTextInput';

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
