import React, {Component} from 'react'
import {View, Text, Image, Navigator} from 'react-native'
import Card from './Card'
import CardSection from './CardSection'
import CardSectionBottom from './CardSectionBottom'
import CardSectionMiddle from './CardSectionMiddle'


class NewsDetail extends Component {
  render() {
    return(
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
                <Text style={styles.headerTextStyle}>{'Latest News 1'}</Text>
              </View>
              <View style={styles.headerTextStyleBottom1}>
                <View style={styles.headerTextStyleBottom1}>
                  <Image
                    style = {{height: 12, width:12}}
                    source = {{uri: 'https://cdn0.iconfinder.com/data/icons/feather/96/clock-128.png'}}
                  />
                  <Text style={{fontSize: 13, padding: 3}}>{'2 hours ago'}</Text>
                </View>
                <View style={styles.headerTextStyleBottom2}>
                  <Image style={{height: 14, width:14}} source={{uri: 'https://maxcdn.icons8.com/Share/icon/Messaging//attach1600.png'}} />
                  <Text style={{fontSize: 13}}>{'2 attachments'}</Text>
                </View>
              </View>
            </View>
          </CardSection>

          <CardSectionMiddle>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
          </CardSectionMiddle>

          <CardSectionBottom>
              <Image
                style = {{height: 20, width:20}}
                source = {{uri: 'http://www.iconsdb.com/icons/preview/black/speech-bubble-2-xxl.png'}}
              />
              <Text style={{marginLeft: 8, fontSize: 12}}>{'53 Comments'}</Text>
          </CardSectionBottom>
        </Card>
    );
  }
};

const styles = {
  headerContentStyle: {
    justifyContent: 'center',
    flexDirection: 'column',
    marginLeft: 10
  },

  headerTextStyle: {
    fontSize: 25,
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
  }
};

export default NewsDetail;
