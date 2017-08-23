import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import CustomTextInput from './src/App';


export default class CustomTextInputExample extends Component {
  render() {
    return (
      <CustomTextInput />
    );
  }
}


AppRegistry.registerComponent('CustomTextInputExample', () => CustomTextInputExample);
