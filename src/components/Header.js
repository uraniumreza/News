import React from 'react'
import { Text, View, Image } from 'react-native'
import IconE from 'react-native-vector-icons/Entypo';
import IconFA from 'react-native-vector-icons/FontAwesome';

const Header = (props) => {
	const {textStyle, viewStyle, leftIconStyle, rightIconStyle} = Styles;
	return(
		<View style={viewStyle}>
      <View style={leftIconStyle}>
			   <IconE name="menu" size={40} color="#FFFFFF" />
      </View>
      <Text style={textStyle}>{props.headerText}</Text>
      <View style={rightIconStyle}>
        <IconFA name="ellipsis-v" size={30} color="#FFFFFF" />
      </View>
		</View>
	);
};

const Styles = {
	viewStyle: {
		backgroundColor: 'blue',
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		height: 60,
		shadowColor: '#000',
		shadowOffset: {width: 0, height: 2},
		shadowOpacity: 0.2,
		elevation: 2,
		position: 'relative'
	},
	textStyle: {
		fontSize: 27,
		color: "#FFFFFF"
	},
	leftIconStyle: {
    justifyContent: 'center',
		height: 40,
		width: 40,
		marginLeft: 15
	},
	rightIconStyle: {
    justifyContent: 'center',
		height: 30,
		width: 30,
		marginRight: 10
	}
};

export default Header;
