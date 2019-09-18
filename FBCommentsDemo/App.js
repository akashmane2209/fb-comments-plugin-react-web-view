import React, {Component} from 'react';
import {Image, View, StyleSheet, Platform, BackHandler} from 'react-native';
import {WebView} from 'react-native-webview';

export default class App extends Component {
  state = {
    key: 1,
    uri: 'http://192.168.0.120:5500',
    isWebViewUrlChanged: false,
  };

  resetWebViewToInitialUrl = () => {
    if (this.state.isWebViewUrlChanged) {
      this.setState({
        key: this.state.key + 1,
        isWebViewUrlChanged: false,
      });
    }
  };

  setWebViewUrlChanged = webviewState => {
    console.log(webviewState.url);
    const check = 'https://m.facebook.com/plugins/close_popup.php';
    const url = webviewState.url;
    if (url.indexOf(check) !== -1) {
      this.setState({key: this.state.key + 1});
    }
  };

  render() {
    console.log('Render Called');
    console.log('Render URL', this.state.uri);
    return (
      <View style={{flex: 1}}>
        <Image source={require('./assets/image.jpg')} style={styles.image} />
        <WebView
          key={this.state.key}
          originWhitelist={['*']}
          source={{uri: this.state.uri}}
          style={styles.comments}
          onNavigationStateChange={this.setWebViewUrlChanged}
        />
      </View>
    );
  }
  // state = {
  //   uri:"http://192.168.0.120:5500"
  // }
  // render() {
  //   return (
  //     <View style={{flex: 1}}>
  //       <Image source={require('./assets/image.jpg')} style={styles.image} />
  //       <WebView
  //         originWhitelist={['*']}
  //         source={{uri: this.state.uri}}
  //         style={styles.comments}
  //       />
  //     </View>
  //   );
  // }
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '50%',
  },
  comments: {
    width: '100%',
    height: '50%',
    // backgroundColor: 'pink',
  },
});
