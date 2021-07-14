import React, { FunctionComponent, useCallback, useEffect } from 'react';
import { View } from 'react-native';
import WebView from 'react-native-webview';
import { Client } from 'plaid';
import { connect } from 'react-redux';

// interface Props {
//     token: string;
//     client: Client;
// }

const WebPlaidLink = () => {
    return (
        <WebView source={{uri: 'http://192.168.1.20:19002'}} style={{flex:1, marginTop: 50}}/>
        
    );
}

const mapStateToProps = (store) => ({
    client: store.plaidReducer.client,
})
export default connect(mapStateToProps, null)(WebPlaidLink);