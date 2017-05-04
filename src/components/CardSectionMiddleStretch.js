import React from 'react'
import {View} from 'react-native'

const CardSectionMiddleStretch = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    height: 420,
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

export default CardSectionMiddleStretch;
