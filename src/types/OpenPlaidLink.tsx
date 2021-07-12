import React, { useEffect, useCallback, FunctionComponent } from 'react';
import { Button } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { PlaidLinkPropTypes, usePlaidLink, PlaidLinkOptions, PlaidLinkOnSuccess, PlaidLinkOnExit, PlaidLinkOnEvent } from 'react-plaid-link';

interface Props {
    token: string;
}

const OpenPlaidLink: FunctionComponent<Props> = ({token}) => {
    const onSuccess = useCallback<PlaidLinkOnSuccess>(
        (public_token, metadata) => {
            // send public_token to server
            console.log('success', public_token, metadata);
        },[]
    );

    const onExit = useCallback<PlaidLinkOnExit>(
        (error, metadata) => {
            // send public_token to server
            console.log('exit', error, metadata);
        },[]
    );

    const onEvent = useCallback<PlaidLinkOnEvent>(
        (eventName, metadata) => {
            // send public_token to server
            console.log('event', eventName, metadata);
        },[]
    );

    const config: PlaidLinkOptions = {
        token,
        onSuccess,
        onExit,
        onEvent,
    };

    const { open, ready, error } = usePlaidLink(config);

    useEffect(() => {
        if (!ready) {
          return;
        }
        open();
      }, [ready, open]);

      return null;
}

// OpenPlaidLink.displayName = 'OpenPlaidLink';
export default OpenPlaidLink;