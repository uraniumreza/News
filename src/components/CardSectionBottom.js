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
    flex: 1,
    width: null,
    padding: 20,
    backgroundColor: '#dcdcdc',
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export default CardSectionBottom;
