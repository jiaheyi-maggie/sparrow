import { Client } from 'plaid';
import React, { useState, useCallback, FunctionComponent} from 'react';
import { Button } from 'react-native';
import { usePlaidLink, PlaidLinkOptions,  PlaidLinkError,
    PlaidLinkOnSuccess, PlaidLinkOnSuccessMetadata,
    PlaidLinkOnExit, PlaidLinkOnExitMetadata,
    PlaidLinkOnEvent, PlaidLinkOnEventMetadata, PlaidLinkStableEvent } from 'react-plaid-link';

interface Props {
    token: string;
    client: Client;
}

export const PlaidLink: FunctionComponent<Props> = ({token, client}) => {
    const [publicToken, setPublicToken] = useState(null);
    const [accessToken, setAccessToken] = useState(null);
    const [institutionID, setInstitutionID] =  useState('ins_109508');
	const [initialProducts, setInitialProducts] = useState(['auth', 'assets', 'balance', 'transactions']);

    const getPublicTokenSandbox = async () => {
		try {
			const publicTokenResponse = await client.sandboxPublicTokenCreate(
				institutionID,
				initialProducts,
			).catch((error) => {
				console.log(error);
			});
			// const public_token = publicTokenResponse.public_token;
			// setPublicToken(public_token);
            console.log(publicTokenResponse);
		} catch (error) {
			console.log(error);
		}
	};

    const getAccessToken = async () => {
		const exchangeTokenResponse = await client.exchangePublicToken(publicToken)
			.catch((error) => {
				console.log(error);
			});
        const accessToken = exchangeTokenResponse.access_token;
        setAccessToken(accessToken);
        console.log(exchangeTokenResponse);
	};

    const onSuccess = useCallback<PlaidLinkOnSuccess>(
        (public_token: string, metadata: PlaidLinkOnSuccessMetadata) => {
            // send public_token to server
            getPublicTokenSandbox()
            // fetch('/api/set_access_token', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({
            //         public_token: public_token,
            //         metadata: metadata,
            //     })
            // })
            // .then((response) => {
            //     console.log('success', response);
            // })
            // .catch((error) => {
            //     console.log(error);
            // })
        },[]
    );

    const onExit = useCallback<PlaidLinkOnExit>(
        (error: PlaidLinkError, metadata: PlaidLinkOnExitMetadata) => {
            // send public_token to server
            console.log('exit', metadata);

            if (error != null && error.error_code === 'INVALID_LINK_TOKEN') {
                // TODO: generate new link token
                console.log(error);
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

    return (
        <Button
            title="Add"
            onPress={() => open()}
            disabled={!ready}
        />

    );
}

PlaidLink.displayName = 'PlaidLink';
