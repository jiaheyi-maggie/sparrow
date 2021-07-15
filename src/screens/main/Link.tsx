import React, { useState, useEffect, FunctionComponent } from 'react';
import { Text, SafeAreaView, View, FlatList, Pressable, TouchableOpacity, Image, NativeEventEmitter, NativeModules, Platform, Button } from 'react-native';
import axios from 'axios';
import { COLORS, FONTS } from '../../constants/theme';
import { connect } from 'react-redux';
import styles from '../../styles/homeStyle';
import BankBalanceInfo from '../../components/main/BankBalanceInfo';
import store from '../../app/store';
import { Searchbar } from 'react-native-paper';

// move all the mongo stuff here?

const Link = ({ navigation, link_token, client }) => {
    const [publicToken, setPublicToken] = useState(null);
    const [accessToken, setAccessToken] = useState(null);
    const [accounts, setAccounts] = useState(null);
    const [institutionID, setInstitutionID] =  useState('ins_109508');
	const [initialProducts, setInitialProducts] = useState(['auth', 'assets', 'balance', 'transactions']);
    const [searchQuery, setSearchQuery] = React.useState('');



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
            // this token is permenant
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
    
    const getAccountsFromMongo = async () => {
        axios.get('/api')
        .then((response) => {
            const data = response.data;
            console.log('Data has been received!!');
        })
        .catch((error) => {
            console.log(error);
        });
        
    };

	useEffect(() => {
        getPublicTokenSandbox();
        getAccountsFromMongo();
	}, [])

    const calculateCurrentTotal = () => {
        const currents = accounts.map((obj) => obj.balances.current);
        const result = currents.reduce((a,b) => a+b, 0); 
        // setCurrentBalance(result);
        return result.toFixed(2);
    };

    const calculateAvailableTotal = () => {
        const availables = accounts.map((obj) => obj.balances.available);
        const result = availables.reduce((a,b) => a+b, 0); 
        // setTotalAvailable(result);
        return result.toFixed(2);
    }

    // TODO: Calculate percentages
    const calculateCurrentChangePct = () => {
        return 2.3
    }

    const calculateTotalAvailableChangePct = () => {
        return 3.6;
    }

    const colorSelection = (current, available) => {
        if (available === null) {
            return COLORS.yellow;
        } else if (available < current) {
            return COLORS.tea;
        } else if (available === current) {
            return COLORS.melon;
        } else {
            return COLORS.melon;
        }
    };

    // search bar function
    const onChangeSearch = query => setSearchQuery(query);

    const handleComponentDidMount = () => {
        // console.log('dad');
        return (
			<SafeAreaView style={[styles.container2, {flexGrow: 1}]}>
				<View style={[styles.genericRow, {marginBottom: 10}]}>
					<Text style={{color: COLORS.primary, ...FONTS.h2}}>Bank Accounts</Text>
                    {/* TODO: PlaidLink leads to OAuth */}
                    {/* <PlaidLink token={link_token} client={client}/> */}

                    <Button
                        title="Add"
                        onPress={() => navigation.navigate("WebPlaidLink")}
                    />
				</View>

                <View style={styles.genericRow}> 
                    <Text style={{...FONTS.h3, color: COLORS.secondary}}>Summary</Text>
                    {/* TODO: switch viewing periods */}
                    <TouchableOpacity style={{backgroundColor:COLORS.lightSalmon, borderRadius:15, padding: 3, flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                        <Text style={{...FONTS.h4, color: COLORS.white, marginLeft: 5}}>Change Period</Text>
                        <Image
                            source={require('../../assets/Icons/down-arrow.png')}
                            style={{width: 13, height: 13, tintColor: COLORS.white, margin: 5, marginTop: 6}}
                        />
                    </TouchableOpacity>
                    
                </View>
                

                <View style={[styles.genericRow, {justifyContent:'space-evenly'}]}>
                    <BankBalanceInfo 
                        title='Current Balance:'
                        displayAmount={calculateCurrentTotal()}
                        currency="USD"
                        changePct={calculateCurrentChangePct()}
                    />
                    <BankBalanceInfo 
                        title='Total Available:'
                        displayAmount={calculateAvailableTotal()}
                        currency="USD"
                        changePct={calculateTotalAvailableChangePct()}
                    />
                </View>

                {/* search bar */}
                {/* TODO: filter bank accounts */}
                <Searchbar
                    placeholder="Search Bank Accounts"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                    style={{width: 370, height: 40, marginBottom: 8, elevation:3}}
                    inputStyle={{...FONTS.h33}}
                    iconColor={COLORS.lightSalmon}
                />

                {/* list of bank accounts */}
                <FlatList
                    data={accounts}
                    renderItem={({item}) => {
                        let priceColor = (item.balances.available / item.balances.current > 0) ? COLORS.grass : COLORS.red;
                        return (
                            <View style={{marginBottom: 15, backgroundColor: "#fffee9", padding: 8, borderBottomLeftRadius: 15, borderBottomRightRadius: 15, borderWidth: 1, borderColor: COLORS.grass, borderTopWidth: 2}}>
                                <View style={styles.genericRow}>
                                    <Text style={{...FONTS.h3, color: COLORS.grass}}>{item.name}</Text>
                                    <Text style={{...FONTS.h4, color: COLORS.lightGray4}}>({item.type})</Text>
                                </View>

                                <TouchableOpacity style={{flexDirection: 'row', justifyContent:'space-between'}}> 
                                    {/* current */}
                                    <View style={{backgroundColor: colorSelection(item.balances.current, item.balances.available), marginVertical: 5, padding: 5, borderRadius: 15, width: 175, flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                                        <Text style={{...FONTS.h4, color: COLORS.lightGray3, marginLeft: 5, textDecorationLine:'underline'}}>Current:</Text>
                                        <View style={{marginRight: 5}}>
                                            <Text style={{...FONTS.h3, color: COLORS.lightGray3, textAlign: 'right'}}>$ {item.balances.current}</Text>
                                            <View style={{flexDirection:'row', alignSelf:'flex-end'}}>
                                                {
                                                    item.balances.current != 0 && 
                                                    <Image
                                                        source={require('../../assets/Icons/up-arrow.png')}
                                                        style={{
                                                            width: 10,
                                                            height: 10,
                                                            alignSelf: 'center',
                                                            tintColor: priceColor,
                                                            transform: (item.balances.current - item.balances.available >= 0) ? [{rotate: '45deg'}] : [{rotate:'125deg'}]
                                                        }}
                                                    />
                                                }
                                                <Text style={{alignSelf:'center',color: priceColor, marginHorizontal: 2}}>
                                                    {(item.balances.available / item.balances.current).toFixed(2)}%
                                                </Text>
                                            </View>
                                        </View>
                                    </View>

                                    {/* available */}
                                    <View style={{backgroundColor: colorSelection(item.balances.current, item.balances.available), marginVertical: 5, padding: 5, borderRadius: 15, width: 175, flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                                        <Text style={{...FONTS.h4, color: COLORS.lightGray3, marginLeft: 5, textDecorationLine:'underline'}}>Available:</Text>
                                        <View style={{marginRight: 5}}>
                                            <Text style={{...FONTS.h3, color: COLORS.lightGray3, textAlign: 'right'}}>$ {item.balances.available}</Text>
                                            <View style={{flexDirection:'row', alignSelf:'flex-end'}}>
                                                {
                                                    item.balances.available != 0 && 
                                                    <Image
                                                        source={require('../../assets/Icons/up-arrow.png')}
                                                        style={{
                                                            width: 10,
                                                            height: 10,
                                                            alignSelf: 'center',
                                                            tintColor: priceColor,
                                                            transform: (item.balances.current - item.balances.available >= 0) ? [{rotate: '45deg'}] : [{rotate:'125deg'}]
                                                        }}
                                                    />
                                                }
                                                <Text style={{alignSelf:'center',color: priceColor, marginHorizontal: 2}}>
                                                    {(item.balances.available / item.balances.current).toFixed(2)}%
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                          
                        );
                    }}
                    keyExtractor={item => item.id}
                    ListHeaderComponent={<Text style={{...FONTS.h3, color: COLORS.secondary, marginBottom:5}}>Details</Text>}
                    ListFooterComponent={<View style={{height: 50}}></View>}
                />
    
			</SafeAreaView>
			
        );
    };

    const handleComponentEmptyRendering = () => {
        return (
            <SafeAreaView style={styles.container2}>
                <View style={styles.genericRow}>
                    <Text style={{color: COLORS.primary, ...FONTS.h2}}>Bank Accounts</Text>
                    <Button
                        title="Add"
                        onPress={() => navigation.navigate("WebPlaidLink")}
                    />
                </View>
            </SafeAreaView>
        );
    }

    return (link_token === null || accounts === null)? (
        handleComponentEmptyRendering()
    ) : (
        handleComponentDidMount()
    )
};

const mapStateToProps = (store) => ({
    link_token: store.plaidReducer.link_token,
	client: store.plaidReducer.client,
});

export default connect(mapStateToProps, null)(Link); 
