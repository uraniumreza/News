import React, {Component} from 'react';
import {ScrollView, View, TouchableHighlight, Image} from 'react-native';
import { Container, Content, Button, Icon, Text, Fab } from 'native-base';
import IconMI from 'react-native-vector-icons/MaterialIcons';
import Header from './Header';
import moment from 'moment';
import Card from './Card';
import CardSection from './CardSection';
import CardSectionBottom from './CardSectionBottom';
import CardSectionMiddleStretch from './CardSectionMiddleStretch';

class SecondPage extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor() {
    super();

    this.state = {
      active: true,
    };
  }

  render() {
    const { params } = this.props.navigation.state;
    var time = moment(params.time).format("lll");
    return(
      <Container>
         <Header headerText={'NEWS'} />
         <Card>
           <CardSection>
             <View style={styles.thumbnailContainerStyle}>
               <Image
                 style = {styles.thumbnailStyle}
                 source = {{uri: "http://showboxappdownloads.com/wp-content/uploads/2017/01/news-icon-13.png"}}
               />
             </View>
             <View style={styles.headerContentStyle}>
               <View>
                 <Text style={styles.headerTextStyle}>{params.title}</Text>
               </View>
               <View style={styles.headerTextStyleBottom1}>
                 <View style={styles.headerTextStyleBottom1}>
                   <Image
                     style = {{height: 12, width:12}}
                     source = {{uri: 'https://cdn0.iconfinder.com/data/icons/feather/96/clock-128.png'}}
                   />
                   <Text style={{fontSize: 13, padding: 3, color: '#000'}}>{time}</Text>
                 </View>
                 <View style={styles.headerTextStyleBottom2}>
                   <Image style={{height: 14, width:14}} source={{uri: 'https://maxcdn.icons8.com/Share/icon/Messaging//attach1600.png'}} />
                   <Text style={{fontSize: 13, color: '#000'}}>{'2 attachments'}</Text>
                 </View>
               </View>
             </View>
           </CardSection>

           <CardSectionMiddleStretch>
             <Text style={{color: '#000'}} title= 'SecondPage'onPress={() => navigate('Second', { title: obj.title, description: obj.description, time: obj.createdAt })} title= 'SecondPage' >{params.description}</Text>
           </CardSectionMiddleStretch>

           <CardSectionBottom>
               <Image
                 style = {{height: 22, width:22}}
                 source = {{uri: 'http://www.iconsdb.com/icons/preview/black/speech-bubble-2-xxl.png'}}
               />
               <Text style={{marginLeft: 8, fontSize: 12, color: '#000'}}>{'53 Comments'}</Text>
           </CardSectionBottom>
         </Card>
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
    bottom: 30,
    right:20,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    },
    elevation: 5,
  },
  headerContentStyle: {
    justifyContent: 'center',
    flexDirection: 'column',
    marginLeft: 10
  },

  headerTextStyle: {
    fontSize: 21,
    color: '#000'
  },

  headerTextStyleBottom1: {
		flexDirection: 'row',
    justifyContent: 'space-around',
		alignItems: 'center'
  },

  headerTextStyleBottom2: {
		flexDirection: 'row',
    justifyContent: 'space-around',
		alignItems: 'center',
    marginLeft: 10
  },

  thumbnailStyle: {
    height: 85,
    width: 85
  },

  coverPhotoStyle: {
    height: 350,
    flex: 1,
    width: null
  },

  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center'
  },
};

export default SecondPage;
