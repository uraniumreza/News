import React from 'react'
import {View} from 'react-native'

const CardSection = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    height: 120,
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

export default CardSection;
