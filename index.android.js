/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import FirstPage from './src/components/FirstPage';
import SecondPage from './src/components/SecondPage';
import { StackNavigator } from 'react-navigation';



const News = StackNavigator({
  First: { screen: FirstPage },
  Second: { screen: SecondPage },
});


AppRegistry.registerComponent('News', () => News);
