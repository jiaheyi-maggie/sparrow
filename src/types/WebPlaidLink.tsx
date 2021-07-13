import React, { FunctionComponent, useCallback, useEffect } from 'react';
import WebView from 'react-native-webview';
import { usePlaidLink, PlaidLinkOptions,
    PlaidLinkOnSuccess, PlaidLinkOnSuccessMetadata, 
    PlaidLinkOnEventMetadata, PlaidLinkStableEvent, PlaidLinkOnEvent,
    PlaidLinkOnExitMetadata, PlaidLinkOnExit, PlaidLinkError } from 'react-plaid-link';
import { Client } from 'plaid';
import { connect } from 'react-redux';
import { COLORS, FONTS } from '../constants/theme';

interface Props {
    token: string;
    client: Client;
}

const WebPlaidLink: FunctionComponent<Props>  = ({ token, client }) => {

    return (
        <WebView source={{uri: 'http://192.168.1.20:19002'}} style={{marginTop:50}}/>
    );
}

const mapStateToProps = (store) => ({
    client: store.plaidReducer.client,
})
export default connect(mapStateToProps, null)(WebPlaidLink);