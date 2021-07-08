import { useCallback } from 'react';
import { usePlaidLink, PlaidLinkOptions, PlaidLinkOnSuccess, PlaidLinkOnSuccessMetadata } from 'react-plaid-link';
import store from '../../app/store';

let link_token = store.getState().plaidReducer.link_token;

const config: PlaidLinkOptions = {
    onSuccess: (public_token, metadata) => {onSuccess},
    onExit: (public_token, metadata) => {},
    onEvent: (public_token, metadata) => {},
    token: link_token
};

const { open, exit, ready } = usePlaidLink(config);

const onSuccess = useCallback<PlaidLinkOnSuccess>(
    (public_token: string, metadata: PlaidLinkOnSuccessMetadata) => {
        fetch('', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            // body : {
            //     public_token,
            // },
        });
    },
    [],
)

export default {config, open, exit, ready};