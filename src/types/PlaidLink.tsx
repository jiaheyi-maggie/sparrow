import { Client } from 'plaid';
import React, { useState, useCallback, FunctionComponent} from 'react';
import { Button } from 'react-native';
import { usePlaidLink, PlaidLinkOptions, PlaidLinkError,
    PlaidLinkOnSuccess, PlaidLinkOnSuccessMetadata,
    PlaidLinkOnExit, PlaidLinkOnExitMetadata,
    PlaidLinkOnEvent, PlaidLinkOnEventMetadata, PlaidLinkStableEvent } from 'react-plaid-link';

interface Props {
    token: string;
    client: Client;
}

export const PlaidLink: FunctionComponent<Props> = ({token, client}) => {
   
    const onSuccess = useCallback<PlaidLinkOnSuccess>(
        (public_token: string, metadata: PlaidLinkOnSuccessMetadata) => {
            // send public_token to server
            fetch('http://192.168.1.20:19002/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ public_token })
            })
            .then((response) => {
                // TODO: handle response
                console.log('success', response);
            })
            .catch((error) => {
                console.log(error);
            })
        },[]
    );

    const onExit = useCallback<PlaidLinkOnExit>(
        (error: PlaidLinkError, metadata: PlaidLinkOnExitMetadata) => {
            // send public_token to server
            console.log('exit', metadata);

            if (error != null && error.error_code === 'INVALID_LINK_TOKEN') {
                // TODO: generate new link token
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
            // send public_token to server
            console.log(eventName, metadata);
        },[]
    );

    const config: PlaidLinkOptions = {
        token,
        onSuccess,
        onExit,
        onEvent,
    };

    const { open, ready, error, exit } = usePlaidLink(config);

    // TODO: button is not ready
    return (
        <Button
            title="Add"
            onPress={() => open()}
            disabled={!ready}
        />

    );
}

PlaidLink.displayName = 'PlaidLink';
