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

    const onSuccess = useCallback<PlaidLinkOnSuccess>(
        (public_token: string, metadata: PlaidLinkOnSuccessMetadata) => {
            console.log(public_token);
        },[]
    );
    
        const onExit = useCallback<PlaidLinkOnExit>(
            (error: PlaidLinkError, metadata: PlaidLinkOnExitMetadata) => {
                // send public_token to server
                console.log('exit', metadata);
    
                if (error != null && error.error_code === 'INVALID_LINK_TOKEN') {
                    const response = client
                    .createLinkToken({
                        user: {
                            client_user_id: "1234",
                        },
                        client_name: "Sparrow",
                        products: ["auth", "transactions"],
                        country_codes: ["US"],
                        language: "en",
                    })
                    .catch((error) => {
                        console.log(error);
                    });
                    console.log(response);
                }
            },[]
        );
    
        const onEvent = useCallback<PlaidLinkOnEvent>(
            (eventName: PlaidLinkStableEvent | string , metadata: PlaidLinkOnEventMetadata) => {
                console.log(eventName, metadata);
            },[]
        );
    
        const config: PlaidLinkOptions = {
            token,
            onSuccess,
            onExit,
            onEvent,
        };

        const { open, exit, ready } = usePlaidLink(config);

        useEffect(() => {
            open()
        }, []);
    

    return (
        <WebView source={{uri: 'https://expo.io'}} style={{marginTop:50}}/>
    );
}

const mapStateToProps = (store) => ({
    client: store.plaidReducer.client,
})
export default connect(mapStateToProps, null)(WebPlaidLink);