import React from 'react';
import {ScrollView, View, TouchableHighlight} from 'react-native';
import { Container, Content, Button, Icon, Text } from 'native-base';
import IconMI from 'react-native-vector-icons/MaterialIcons';
import Header from './Header'
import SingleNews from './SingleNews'

const SecondPage = () => {
  return(

    <Container>
      <Header headerText={'NEWS'} />
      <ScrollView style={{flex: 1}}>  
        <SingleNews />
      </ScrollView>
      <Button style={styles.addButton}>
          <IconMI name='mode-comment' size={35} color="#FFFFFF" />
      </Button>
    </Container>
  );
};

const styles = {
  addButton: {
    backgroundColor: 'blue',
    borderColor: 'blue',
    borderWidth: 1,
    height: 70,
    width: 70,
    borderRadius: 50,
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
