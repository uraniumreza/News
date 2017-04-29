/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import FirstPage from './src/components/FirstPage';
import SecondPage from './src/components/SecondPage';

export default class News extends Component {
  render() {
    return (
      <SecondPage />
    );
  }
}

AppRegistry.registerComponent('News', () => News);
