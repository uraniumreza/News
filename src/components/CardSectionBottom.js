import React from 'react'
import {View} from 'react-native'

const CardSectionBottom = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    height: 45,
    padding: 20,
    backgroundColor: '#dcdcdc',
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: '#ddd',
  }
};

// flex: 1,
// width: null,

export default CardSectionBottom;
