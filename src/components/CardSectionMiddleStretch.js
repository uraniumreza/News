import React from 'react'
import {ScrollView} from 'react-native'

const CardSectionMiddleStretch = (props) => {
  return (
    <ScrollView style={styles.containerStyle}>
      {props.children}
    </ScrollView>
  );
};

const styles = {
  containerStyle: {
    height: 413,
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderColor: '#ddd',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    position: 'relative'
  }
};

export default CardSectionMiddleStretch;
