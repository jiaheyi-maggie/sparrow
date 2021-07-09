import React, { useState, useEffect } from 'react';
import { Text, SafeAreaView, View, ScrollView, FlatList, Pressable, TouchableOpacity, Image, NativeEventEmitter, NativeModules, Platform, Button } from 'react-native';
import { COLORS, FONTS } from '../../constants/theme';
import { PlaidLink } from '../../types/PlaidLink';
import { connect } from 'react-redux';
import styles from '../../styles/homeStyle';
import OpenPlaidLink from '../../types/OpenPlaidLink';

const Link = ({ navigation, link_token, client }) => {
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


    const getAccounts = async () => {
        client.getAccounts(accessToken, function (error, accountResponse) {
            if (error != null) {
                console.log(error);
                return; 
            }
            console.log(accountResponse);
        });
    }

    
	useEffect(() => {
        getPublicTokenSandbox();
        getAccessToken();
        getAccounts();
	}, [])

    const handleComponentDidMount = () => {
        return (
			<SafeAreaView style={styles.container2}>
				<View style={styles.genericRow}>
					<Text style={{color: COLORS.primary, ...FONTS.h2}}>Bank Accounts</Text>
                    <PlaidLink token={link_token} client={client}/>
				</View>
				
			</SafeAreaView>
			
        );
    };

    return link_token === null ? (
        <SafeAreaView style={styles.container2}>
            <View style={styles.genericRow}>
                <Text style={{color: COLORS.primary, ...FONTS.h2}}>Bank Accounts</Text>
            </View>
        </SafeAreaView>
    ) : (
        handleComponentDidMount()
    )
};

const mapStateToProps = (store) => ({
    link_token: store.plaidReducer.link_token,
	client: store.plaidReducer.client,
});

export default connect(mapStateToProps, null)(Link); 
