import React, { Component } from 'react';
import {AppRegistry, Text, View} from 'react-native';
import FirstPage from './src/components/FirstPage';
import SecondPage from './src/components/SecondPage';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  render(){
    const { navigate } = this.props.navigation;
    return(
      <View style={{ flex: 1 }}>
        <Text onPress={() => navigate('FirstPage')}>Assignment-a</Text>
      </View>
    );
  }
}

const News = StackNavigator({
  HomeScreen: { screen: HomeScreen },
  FirstPage: { screen: FirstPage },
  SecondPage: { screen: SecondPage },
});


AppRegistry.registerComponent('News', () => News);
