import React, {Component} from 'react';
import {ListView, Text, View, Button, ScrollView, Image, TouchableHighlight} from 'react-native';
import Header from './Header';
import SecondPage from './SecondPage';
import Card from './Card';
import CardSection from './CardSection';
import CardSectionBottom from './CardSectionBottom';
import CardSectionMiddle from './CardSectionMiddle';
import Meteor, { createContainer, MeteorListView } from 'react-native-meteor';
import moment from 'moment';
import Spinner from 'react-native-loading-spinner-overlay';

Meteor.connect('ws://durbintest.pro/websocket');

class FirstPage extends Component {
  static navigationOptions = {
    header: null,
  };


  constructor() {
    super();

    this.state = {
    };
  }

  render() {
    let collection2 = [];
    const { NewsList, NewsReady} = this.props;
    if(NewsReady){
      collection2 = [];
      NewsList.map(function (obj, index) {
        var time = moment(obj.createdAt).format("lll");
        collection2[index] =
        <TouchableHighlight key={index} onPress={() => navigate('SecondPage', { title: obj.title, description: obj.description, time: obj.createdAt })}>
          <View >
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
                    <Text style={styles.headerTextStyle}>{obj.title}</Text>
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

              <CardSectionMiddle>
                <Text style={{color: '#000'}} >{obj.description}</Text>
              </CardSectionMiddle>

              <CardSectionBottom>
                  <Image
                    style = {{height: 22, width:22}}
                    source = {{uri: 'http://www.iconsdb.com/icons/preview/black/speech-bubble-2-xxl.png'}}
                  />
                  <Text style={{marginLeft: 8, fontSize: 12, color: '#000'}}>{'53 Comments'}</Text>
              </CardSectionBottom>
            </Card>
          </View>
        </TouchableHighlight>
      });

    }
    // console.log("--------------------");
    //console.log(props.news.title);
    const { navigate } = this.props.navigation;
    //console.log(this.state.dataSource);
    return(
      <View style={{flex: 1}}>
        {!NewsReady && <Spinner visible={true} textContent={"Loading..."} textStyle={{color: 'blue'}} />}
        <Header headerText={'NEWS'} />
        <ScrollView>
          {collection2}
        </ScrollView>
      </View>
    );
  }
};

const styles = {
  headerContentStyle: {
    justifyContent: 'center',
    flexDirection: 'column',
    marginLeft: 10,
  },

  headerTextStyle: {
    fontSize: 21,
    color: '#000',
  },

  headerTextStyleBottom1: {
		flexDirection: 'row',
    justifyContent: 'space-around',
		alignItems: 'center',
  },

  headerTextStyleBottom2: {
		flexDirection: 'row',
    justifyContent: 'space-around',
		alignItems: 'center',
    marginLeft: 10,
  },

  thumbnailStyle: {
    height: 85,
    width: 85,
  },

  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  }
};

export default createContainer(params=>{
  const handle = Meteor.subscribe('fetch.news');
  return {
    NewsReady: handle.ready(),
    NewsList: Meteor.collection('News').find(),
  };
}, FirstPage);
