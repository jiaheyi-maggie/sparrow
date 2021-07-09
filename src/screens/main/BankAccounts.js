import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Text, SafeAreaView, View, ScrollView, FlatList, Pressable, TouchableOpacity, Image, NativeEventEmitter, NativeModules, Platform, Button } from 'react-native';
import { COLORS, FONTS } from '../../constants/theme';
// import { PlaidLink } from 'react-native-plaid-link-sdk';
import { usePlaidLink } from 'react-plaid-link';
import { PlaidLink } from '../../types/PlaidLink';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import { connect } from 'react-redux';
import styles from '../../styles/homeStyle';

const BankAccounts = ({ navigation, link_token, client }) => {
	const [publicToken, setPublicToken] = useState(null);
	const [accessToken, setAccessToken] = useState(null);

	// testing info
	const [institutionID, setInstitutionID] =  useState('ins_109508');
	const [initialProducts, setInitialProducts] = useState(['auth', 'assets', 'balance', 'transactions']);

	const getTokensSandbox = async () => {
		try {
			const publicTokenResponse = await client.sandboxPublicTokenCreate(
				institutionID,
				initialProducts,
			).catch((error) => {
				console.log(error);
			});

			console.log(publicTokenResponse);

			const public_token = publicTokenResponse.public_token;
			// dispatch(pushPublicToken(publicToken));
			setPublicToken(public_token);

			const exchangeTokenResponse = await client.exchangePublicToken(publicToken)
			.catch((error) => {
				console.log(error);
			});
			const accessToken = exchangeTokenResponse.access_token;
			setAccessToken(accessToken);
		} catch (error) {
			console.log(error);
		}
	};

	const onExit = (error, metadata) => console.log('onExit', error, metadata);
	const onEvent = (eventName, metadata) => console.log('onEvent', eventName, metadata);
	const onSuccess = (token, metadata) => console.log('onSuccess', token, metadata);
	

	useEffect(() => {
		// getTokensSandbox();
	}, [])

    const handleComponentDidMount = () => {
        return (
			<SafeAreaView style={styles.container2}>
				<View style={styles.genericRow}>
					<Text style={{color: COLORS.primary, ...FONTS.h2}}>Bank Accounts</Text>

					<PlaidLink
						className="CustomButton"
						style={{ padding: '20px', fontSize: '16px', cursor: 'pointer' }}
						token={link_token}
						onExit={onExit}
						onSuccess={onSuccess}
						onEvent={onEvent}
					>
						<Text>Open Link and connect your bank!</Text>
					</PlaidLink>

					{/* 
					<PlaidLink
						tokenConfig ={{
							token: link_token
						}}
						onSuccess={() => open()
							// (success) => {
							// fetch('https://sandbox.plaid.com/exchange_public_token', {
							// 	method: 'POST',
							// 	body: {
							// 		publicToken: publicToken,
							// 		// accounts: linkSuccess.metadata.accounts,
      						// 		institution: {name: "First Platypus Bank", id:"ins_109508"},
      						// 		// linkSessionId: linkSuccess.metadata.linkSessionId,
							// 	}
							// })}
						}
						// onExit={() => }
					>
						<View style={[styles.genericRow, {backgroundColor: COLORS.lightSalmon, borderRadius: 15, padding: 3, elevation:2}]}>
							<Image 
								source={require('../../assets/Icons/add.png')}
								style={{
									height: 20,
									width: 20,
									tixsntColor: COLORS.white
								}}
							/>
							<Text style={{...FONTS.h3, color: COLORS.white, marginHorizontal: 5}}>Add</Text>
						</View>
					</PlaidLink> 
					*/}

				</View>
				
			</SafeAreaView>
			
        );
    };



    return (
        handleComponentDidMount()
    )
};

const mapStateToProps = (store) => ({
    link_token: store.plaidReducer.link_token,
	client: store.plaidReducer.client,
});

// const mapDispatchToProps = (dispatch) => bindActionCreators({ onSuccess, onExit }, dispatch);

export default connect(mapStateToProps, null)(BankAccounts); 

