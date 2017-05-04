import React, { Component } from 'react';
import {AppRegistry, Text} from 'react-native';
import FirstPage from './src/components/FirstPage';
import SecondPage from './src/components/SecondPage';
import { StackNavigator } from 'react-navigation';

const News = StackNavigator({
  First: { screen: FirstPage },
  Second: { screen: SecondPage },
});


AppRegistry.registerComponent('News', () => News);
