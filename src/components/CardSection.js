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
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
    marginBottom: 5,
    position: 'relative'
  }
};

export default CardSection;
