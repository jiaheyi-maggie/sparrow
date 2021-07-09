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
    const [accounts, setAccounts] = useState(null);

    const getPublicTokenSandbox = async () => {
		try {
			const publicTokenResponse = await client.sandboxPublicTokenCreate(
				institutionID,
				initialProducts,
			).catch((error) => {
				console.log(error);
			});
			const public_token = publicTokenResponse.public_token;
			setPublicToken(public_token);
            // console.log(publicTokenResponse);
		} catch (error) {
			console.log(error);
		}
	};

    const getAccessToken = async () => {
        try {
            const exchangeTokenResponse = await client.exchangePublicToken(publicToken)
			.catch((error) => {
				console.log(error);
			});
            const accessToken = exchangeTokenResponse.access_token;
            setAccessToken(accessToken);
            // console.log(exchangeTokenResponse);
        } catch (error) {
			console.log(error);
		}
		
	};


    const getAccounts = async () => {
        try {
            client.getAccounts(accessToken, function (error, accountResponse) {
                if (error != null) {
                    console.log(error);
                    return; 
                }
                setAccounts(accountResponse);
                // console.log(accounts);
            });
        } catch(error) {
            console.log(error);
        }
    }

    const extractInfo = () => {
        const listOfAccounts = accounts['accounts'];
        const accountNames = listOfAccounts.map(obj => obj.name);
        console.log(accountNames);
        return accountNames;
    }
    

	useEffect(() => {
        console.log("NONONNONONONONN");
        getPublicTokenSandbox();
        getAccessToken();
        getAccounts();
        console.log('NAMES');
        extractInfo();
	}, [])

   


    const handleComponentDidMount = () => {
        return (
			<SafeAreaView style={[styles.container2, {backgroundColor:COLORS.desertGreen}]}>
				<View style={styles.genericRow}>
					<Text style={{color: COLORS.white, ...FONTS.h2}}>Bank Accounts</Text>
                    <PlaidLink token={link_token} client={client}/>
				</View>

                {/* list of bank accounts */}
                <FlatList
                    data={extractInfo()}
                    renderItem={({item}) => {
                        return (
                            <View>
                                <Text>{item}</Text>
                            </View>
                            
                        );
                    }}
                    keyExtractor={item => item.id}
                />
    
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
