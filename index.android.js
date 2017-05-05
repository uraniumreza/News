import React, { Component } from 'react';
import {AppRegistry, Text, View} from 'react-native';
import FirstPage from './src/components/FirstPage';
import SecondPage from './src/components/SecondPage';
import { StackNavigator } from 'react-navigation';

const News = StackNavigator(
  {
    FirstPage: { screen: FirstPage},
    SecondPage: { screen: SecondPage },
  }
);

AppRegistry.registerComponent('News', () => News);
