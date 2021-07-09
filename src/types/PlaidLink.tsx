import React, { useState, useCallback, FunctionComponent} from 'react';
import { Button } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { PlaidLinkPropTypes, usePlaidLink, PlaidLinkOptions, PlaidLinkOnSuccess, PlaidLinkOnExit, PlaidLinkOnEvent } from 'react-plaid-link';

interface Props {
    token: string;
}

export const PlaidLink: FunctionComponent<Props> = ({token}) => {
    const onSuccess = useCallback<PlaidLinkOnSuccess>(
        (public_token, metadata) => {
            // send public_token to server
            console.log(public_token, 'success');
        },[]
    );

    const onExit = useCallback<PlaidLinkOnExit>(
        (error, metadata) => {
            // send public_token to server
            console.log(error, 'exit');
        },[]
    );

    const onEvent = useCallback<PlaidLinkOnEvent>(
        (eventName, metadata) => {
            // send public_token to server
            console.log(eventName, 'event');
        },[]
    );

    const config: PlaidLinkOptions = {
        token,
        onSuccess,
        onExit,
        onEvent,
    };

    const { open, ready, error, exit } = usePlaidLink(config);

    return (
        <Button
            title="Add"
            onPress={() => open()}
            disabled={!ready}
        />

    );
}

PlaidLink.displayName = 'PlaidLink';