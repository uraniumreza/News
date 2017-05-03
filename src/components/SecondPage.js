import React, {Component} from 'react';
import {ScrollView, View, TouchableHighlight} from 'react-native';
import { Container, Content, Button, Icon, Text } from 'native-base';
import IconMI from 'react-native-vector-icons/MaterialIcons';
import Header from './Header';
import SingleNews from './SingleNews';
import { StackNavigator } from 'react-navigation';

class SecondPage extends Component {
  static navigationOptions = {
    title: 'SecondPage',
    header: null,
  };
  render() {
    //const { navigate } = this.props.navigation;
    return(
      <Container>
        <Header headerText={'NEWS'} />
        <ScrollView style={{flex: 1}}>
          <SingleNews />
        </ScrollView>
        <Button style={styles.addButton}>
            <IconMI name='mode-comment' size={28} color="#FFFFFF" />
        </Button>
      </Container>
    );
  }
};

const styles = {
  addButton: {
    backgroundColor: 'blue',
    borderColor: 'blue',
    borderWidth: 1,
    height: 60,
    width: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    right:20,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    },
    elevation: 3
  }
};

export default SecondPage;
