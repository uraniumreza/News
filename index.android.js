/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import FirstPage from './src/components/FirstPage';
import SecondPage from './src/components/SecondPage';
import Dummy from './src/components/Dummy';
import { StackNavigator } from 'react-navigation';



const News = StackNavigator({
  First: { screen: FirstPage },
  Second: { screen: SecondPage },
  Dummy: { screen: Dummy },
});


AppRegistry.registerComponent('News', () => News);
