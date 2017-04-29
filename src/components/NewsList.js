import React, {Component} from 'react'
import {ScrollView} from 'react-native'
import axios from 'axios';
import NewsDetail from './NewsDetail'

class NewsList extends Component {
  state = {newss: []};

  componentWillMount(){
     axios.get('https://rallycoding.herokuapp.com/api/music_albums')
       .then(response => this.setState({newss: response.data}));
  }

  renderNewss() {
    return this.state.newss.map(news =>
      <NewsDetail key={news.title} news={news} />
    );
  }

  render() {
    return(
      <ScrollView>
        {this.renderNewss()}
      </ScrollView>
    );
  }
}

export default NewsList;
