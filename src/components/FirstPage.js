import React, {Component} from 'react';
import {View} from 'react-native';
import Header from './Header'
import NewsList from './NewsList'

class FirstPage extends Component {
  render() {
    return(
      <View style={{flex: 1}}>
        <Header headerText={'NEWS'} />
        <NewsList />
      </View>
    );
  }
};

export default FirstPage;
