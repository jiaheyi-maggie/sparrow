import React, { useState, useEffect } from 'react';
import { Text, SafeAreaView, View, FlatList, TouchableOpacity, Image, Button } from 'react-native';
import { COLORS, FONTS } from '../../constants/theme';
import { connect } from 'react-redux';
import styles from '../../styles/homeStyle';
import BankBalanceInfo from '../../components/main/BankBalanceInfo';
import store from '../../app/store';
import { Searchbar } from 'react-native-paper';

const Link = ({ navigation, link_token, client }) => {
    const [accounts, setAccounts] = useState(null);
    const [loans, setLoans] = useState(null);
    const [credit, setCredit] = useState(null);
    const [searchQuery, setSearchQuery] = React.useState('');
    
    const getAccountsFromMongo = async () => {
        try {
            const response = await fetch('http://192.168.1.20:19002/api/accounts');
            const json = await response.json();
            setAccounts(json);
          } catch (error) {
            console.error(error);
          }
    };

	useEffect(() => {
        getAccountsFromMongo();
	}, [])

    const calculateCurrentTotal = () => {
        const depository = accounts.filter(obj => obj.type==='depository');
        const amounts = depository.map(obj => obj.balances.current);
        const result = amounts.reduce((a, b) => a+b, 0);
        return result.toFixed(2);
    };

    const calculateAvailableTotal = () => {
        const availables = accounts.map((obj) => obj.balances.available);
        const result = availables.reduce((a,b) => a+b, 0); 
        return result.toFixed(2);
    }

    const calculateLoansTotal  = () => {
        const loans = accounts.filter(obj => obj.type==='loan');
        const amounts = loans.map(obj => obj.balances.current);
        const result = amounts.reduce((a, b) => a+b, 0);
        return result.toFixed(2);
    }

    const calculateCreditTotal = () => {
        const credits = accounts.filter(obj => obj.type==='credit');
        const amounts = credits.map(obj => obj.balances.current);
        const result = amounts.reduce((a, b) => a+b, 0);
        return result.toFixed(2);
    }

    const calculateInvestmentsTotal = () => {
        const investments = accounts.filter(obj => obj.type==='investment');
        const amounts = investments.map(obj => obj.balances.current);
        const result = amounts.reduce((a, b) => a+b, 0);
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
        return (
			<SafeAreaView style={[styles.container3, {flexGrow: 1}]}>
				<View style={[styles.genericRow, {marginBottom: 10}]}>
					<Text style={{color: COLORS.primary, ...FONTS.h2}}>Bank Accounts</Text>
                    <View style={[styles.genericRow,{backgroundColor: COLORS.yellow, borderRadius: 15,paddingVertical: 3,paddingHorizontal: 8}]}>
                        <Image
                            source={require('../../assets/Icons/add.png')}
                            style={{
                                width: 14,
                                height: 14,
                                tintColor: COLORS.secondary,
                                marginRight: 3
                            }}
                        />
                        <TouchableOpacity onPress={() => navigation.navigate("WebPlaidLink")}>
                            <Text style={{...FONTS.h4, color: COLORS.secondary}}>Add Account</Text>
                        </TouchableOpacity>
                    </View>
                    
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
                        title='Current Depositories:'
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

                <View style={[styles.genericRow, {justifyContent:'space-evenly'}]}>
                    <BankBalanceInfo 
                        title='Loans / Mortgages:'
                        displayAmount={calculateLoansTotal()}
                        currency="USD"
                        changePct={calculateCurrentChangePct()}
                    />
                    <BankBalanceInfo 
                        title='Credits:'
                        displayAmount={calculateCreditTotal()}
                        currency="USD"
                        changePct={calculateTotalAvailableChangePct()}
                    />
                </View>

                <BankBalanceInfo 
                        title='Investments:'
                        displayAmount={calculateInvestmentsTotal()}
                        currency="USD"
                        changePct={calculateTotalAvailableChangePct()}
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
                    ListHeaderComponent={
                        <View style={styles.genericRow}>
                            <Text style={{...FONTS.h3, color: COLORS.secondary, marginBottom:5}}>Details</Text>
                            <Text style={{...FONTS.h4, color: COLORS.lightGray4, marginBottom:5}}>(Bold amounts are period independent)</Text>
                        </View>
                    }
                    ListFooterComponent={<View style={{height: 50}}></View>}
                />
    
			</SafeAreaView>
			
        );
    };

    const handleComponentEmptyRendering = () => {

        const render = () => {
            return (
                <View style={styles.container3}>
                    <View style={styles.genericRow}>
                        <Text style={{color: COLORS.primary, ...FONTS.h2}}>Add Bank Accounts</Text>
                        <View style={[styles.genericRow,{backgroundColor: COLORS.yellow, borderRadius: 15,paddingVertical: 3,paddingHorizontal: 8}]}>
                            <Image
                                source={require('../../assets/Icons/add.png')}
                                style={{
                                    width: 14,
                                    height: 14,
                                    tintColor: COLORS.secondary,
                                    marginRight: 3
                                }}
                            />
                            <TouchableOpacity onPress={() => navigation.navigate("WebPlaidLink")}>
                                <Text style={{...FONTS.h4, color: COLORS.secondary}}>Add Account</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text style={{...FONTS.h4, color: COLORS.orange, marginTop: 10}}>Thank you for using Sparrow! Let's make budgetting easy for you with more information.{"\n"}{"\n"}
                        If you haven't added bank accounts yet, try linking them securly by clicking on the "Add Account"
                        button.
                    </Text>
                    <Image 
                        source={require('../../assets/onboarding/long-term.png')}
                        style={{
                            width: 380,
                            height: 300,
                            marginTop:80

                        }}
                    />
                </View>
            );
        }
        return (
            render()
            
        );
    }

    return (accounts === null)? (
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
