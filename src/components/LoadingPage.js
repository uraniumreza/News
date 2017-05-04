import React, {Component} from 'react';
import { View, Text } from 'react-native';
import FirstPage from './FirstPage';



class LoadingPage extends Component {
  static navigationOptions = {
    title: 'LoadingPage',
    header: null,
  };

  constructor(props) {
    super();
    this.state = {
      visible: false
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        visible: !this.state.visible
      });
    }, 3000);
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1 }}>
        <Spinner visible={this.state.visible} textContent={"Loading..."} textStyle={{color: 'blue'}} />
      </View>
    );
  }
}

export default LoadingPage;
