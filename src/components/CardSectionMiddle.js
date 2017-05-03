import React from 'react'
import {View} from 'react-native'
import {StackNavigator} from 'react-navigation';

const CardSectionMiddle = (props) => {
  //const { navigate } = this.props.navigation;
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    height: 119,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    position: 'relative'
  }
};

export default CardSectionMiddle;
