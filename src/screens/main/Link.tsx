import React, { useState, useEffect } from 'react';
import { Text, SafeAreaView, View, ScrollView, FlatList, Pressable, TouchableOpacity, Image, NativeEventEmitter, NativeModules, Platform, Button } from 'react-native';
import { COLORS, FONTS } from '../../constants/theme';
import { PlaidLink } from '../../types/PlaidLink';
import { connect } from 'react-redux';
import styles from '../../styles/homeStyle';
import OpenPlaidLink from '../../types/OpenPlaidLink';
import BankBalanceInfo from '../../components/main/BankBalanceInfo';
import store from '../../app/store';

const Link = ({ navigation, link_token, client }) => {
    const [publicToken, setPublicToken] = useState(null);
    const [accessToken, setAccessToken] = useState(null);
    const [accounts, setAccounts] = useState(null);
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
            const public_token = publicTokenResponse.public_token;
            setPublicToken(public_token);

            store.dispatch({
                type: 'pushPublicToken',
                payload: {publicToken}
            })

            // access token
            const exchangeTokenResponse = await client.exchangePublicToken(public_token)
            .catch((error) => {
                console.log(error);
            });
            
            const accessTokenResponse = exchangeTokenResponse.access_token;

            setAccessToken(accessTokenResponse);
            store.dispatch({
                type: 'pushAccessToken',
                payload: {accessToken}
            })

            // account 
            client.getAccounts(accessToken, function (error, accountResponse) {
                if (error !== null) {
                    console.log(error);
                    return; 
                }

                setAccounts(accountResponse['accounts']);
                store.dispatch({
                    type: 'pushBankAccounts',
                    payload: {accounts}
                })

            });

        } catch(error) {
            console.log(error);
        }
    }
    

	useEffect(() => {
        getPublicTokenSandbox();
	}, [])



    const handleComponentDidMount = () => {
        return (
			<SafeAreaView style={[styles.container2, {flexGrow: 1}]}>
				<View style={styles.genericRow}>
					<Text style={{color: COLORS.desertGreen, ...FONTS.h2}}>Bank Accounts</Text>
                    <PlaidLink token={link_token} client={client}/>
				</View>

                <BankBalanceInfo 
                    title='Total Available'
                    displayAmount="30000"
                    currency="USD"
                    changePct="2.3"
                />

                {/* list of bank accounts */}
                <FlatList
                    data={accounts}
                    renderItem={({item}) => {

                        const colorSelection = (current, available) => {
                            if (available === null) {
                                return COLORS.yellow;
                            } else if (available < current) {
                                return COLORS.tea;
                            } else if (available == current) {
                                return COLORS.melon;
                            }
                        };

                        return (
                            <View style={{marginBottom: 8}}>
                                <View style={styles.genericRow}>
                                    <Text style={{...FONTS.h3, color: COLORS.primary, textDecorationLine: 'underline'}}>{item.name}</Text>
                                    <Text style={{...FONTS.h4, color: COLORS.lightGray4}}>({item.type})</Text>
                                </View>

                                <TouchableOpacity style={{backgroundColor: colorSelection(item.balances.current, item.balances.available), marginVertical: 5, padding: 5, borderRadius: 15}}>
                                    <Text>{item.balances.current}</Text>
                                    <Text>{item.balances.available}</Text>
                                    <Text>{item.balances.iso_currency_code}</Text>
                                </TouchableOpacity>

                                <View style={{borderBottomColor: COLORS.bone,borderBottomWidth: 1, }}/>
                            </View>
                        );
                    }}
                    keyExtractor={item => item.id}
                />
    
			</SafeAreaView>
			
        );
    };

    const handleComponentEmptyRendering = () => {
        return (
            <SafeAreaView style={styles.container2}>
                <View style={styles.genericRow}>
                    <Text style={{color: COLORS.primary, ...FONTS.h2}}>Bank Accounts</Text>
                </View>
            </SafeAreaView>
        );
    }

    // return link_token === null? (
    //     handleComponentEmptyRendering()
    // ) : (
    //     handleComponentDidMount()
    // )
    return handleComponentDidMount();
};

const mapStateToProps = (store) => ({
    link_token: store.plaidReducer.link_token,
	client: store.plaidReducer.client,
});

export default connect(mapStateToProps, null)(Link); 
