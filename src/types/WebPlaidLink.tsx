import React, { Component } from 'react';
import WebView from 'react-native-webview';

export default class WebPlaidLink extends Component {
    render() {
        return <WebView source={{uri: 'https://expo.io'}} style={{marginTop: 20}}/>
    }
}
