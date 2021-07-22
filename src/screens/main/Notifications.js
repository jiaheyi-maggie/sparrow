import React, { useState, useEffect }  from 'react';
import { Text, SafeAreaView, View, ScrollView, FlatList, Pressable, TouchableOpacity, Image, Modal, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { sendPushNotifications } from '../../app/actions/notificationActions';
import { Searchbar } from 'react-native-paper';
import SortModal from '../../components/main/SortModal';
import { COLORS, FONTS } from '../../constants/theme';
import styles from '../../styles/homeStyle';
import store from '../../app/store';

const deviceHeight = Dimensions.get('window').height; 

const Notifications = ({ navigation, notification_token, notifications }) => {
	const [transactions, setTransactions] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
	const [accountMap, setAccountMap] = useState(null);
	const [modalVisible, setModalVisible] = useState(false);

	const onChangeSearch = query => setSearchQuery(query);

    const getTransactionsFromMongo = async () => {
        try {
            const response = await fetch('http://192.168.1.20:19002/transactions/get');
			const json = await response.json()
			setTransactions(json);
		} catch (error) {
			console.error(error);
		}
    };

	const getAccountMap = async () => {
        try {
            const response = await fetch('http://192.168.1.20:19002/api/accounts/map');
			const json = await response.json();
			setAccountMap(json);
		} catch (error) {
			console.error(error);
		}
    };

	useEffect(() => {
        getTransactionsFromMongo();
		getAccountMap();
		
		// update redux
		store.dispatch({
			type:"updateTransactions",
			payload: {transactions}
		})
		// console.log(store.getState().plaidReducer.transactions);
	}, [])

	const handleSort = () => {
		return (
			<SortModal modalVisible={!modalVisible}/>
		)
	}

    const handleComponentDidMount = () => {
        return (
			<SafeAreaView style={styles.container3}>
				<View style={styles.genericRow}>
					<Text style={styles.title}>Transactions</Text>
					<TouchableOpacity onPress={() => navigation.openDrawer()}>
						<Image 
							source={require('../../assets/Icons/menu.png')}
							resizeMode='contain'
							style={{
								width: 20,
								height: 20,
								tintColor: COLORS.primary,
							}}
						/>
					</TouchableOpacity>
				</View> 
				{/* 				
				<TouchableOpacity>
					<Image

					/>
				</TouchableOpacity> */}

				<Searchbar
					placeholder="Search Transactions"
					onChangeText={onChangeSearch}
					value={searchQuery}
					style={{width: 370, height: 40, marginVertical: 8, elevation:3}}
					inputStyle={{...FONTS.h33}}
					iconColor={COLORS.lightSalmon}
				/>

				<View style={[styles.genericRow, {marginBottom: 5}]}>
					<TouchableOpacity style={{backgroundColor:COLORS.desertGreen, borderRadius:15, padding: 3, flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
						<Text style={{...FONTS.h4, color: COLORS.white, marginLeft: 5}}>Filter by</Text>
						<Image
							source={require('../../assets/Icons/filter.png')}
							style={{width: 13, height: 13, tintColor: COLORS.white, margin: 5, marginTop: 6}}
						/>
					</TouchableOpacity>

					<TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={{backgroundColor:COLORS.lightSalmon, borderRadius:15, padding: 3, flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
						<Text style={{...FONTS.h4, color: COLORS.white, marginLeft: 5}}>Sort by</Text>
						<Image
							source={require('../../assets/Icons/down-arrow.png')}
							style={{width: 13, height: 13, tintColor: COLORS.white, margin: 5, marginTop: 6}}
						/>
					</TouchableOpacity>
				</View>

				<Modal animationType={'fade'} transparent={false} visible={modalVisible}>
					<View style={{justifyContent:'flex-end'}}>
						<View style={{maxHeight: deviceHeight * 0.4, borderRadius: 30}}>
							<Text> Hello</Text>
						</View>
						
					</View>
					<View>
						<TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
							<Text>Back</Text>
						</TouchableOpacity>
					</View>
				</Modal>
				

				<FlatList
                    data={transactions}
                    renderItem={({item}) => {
                        let priceColor = (item.amount < 0) ? COLORS.grass : COLORS.red;
						let itemName = (item.merchant_name == null) ? item.name : item.merchant_name;
						let itemAccount; 
						
						// TODO: optimize the runtime O(n^2) right now
						for (var i = 0; i < accountMap.length; i++) {
							if (accountMap[i].account_id === item.account_id) {
								itemAccount = accountMap[i].name; 
							}
						}
						// const obj = accountMap.filter(obj => obj.account_id === item.account_id);
						// itemAccount = obj.name; 
                        return (
							<View style={{borderWidth: 1, margin: 5,  borderColor: COLORS.bone, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, borderTopWidth: 3, backgroundColor:COLORS.white}}>
								<View style={styles.genericRow}>
									<Text style={{...FONTS.body4, fontStyle:'italic', color: COLORS.orange, marginHorizontal: 5}}>{itemAccount}</Text>
									<TouchableOpacity style={{borderRadius: 10, backgroundColor:COLORS.melon, padding: 3, paddingHorizontal: 8, margin:3}}>
										<Text style={{color: COLORS.lightGray3, fontStyle:'italic'}}>Flag</Text>
									</TouchableOpacity>
								</View>
								
								<View style={[styles.genericRow, {marginHorizontal: 10}]}>
									<Text style={{...FONTS.h4, fontWeight:'bold', color: COLORS.bluebell}}>{itemName}</Text>
									<Text style={{...FONTS.h3, color: priceColor}}>$ {item.amount}</Text>
								</View>
								<View style={[styles.genericRow, {marginHorizontal: 10}]}>
									<Text style={{...FONTS.body4, color: COLORS.lightGray3}}>{item.category[0]}: {item.category[1]}</Text>
									<Text style={{...FONTS.body4, color: COLORS.lightGray3}}>{item.date}</Text>
								</View>
						
							</View>
                        );
                    }}
                    keyExtractor={item => item.id}
					// TODO: when click on load more transactions
                    ListFooterComponent={() => {
						return (
							<View style={{alignSelf:'center'}}>
								<TouchableOpacity>
									<Text style={{...FONTS.body4, color: COLORS.lightGray4}}>Load more transactions...</Text>
								</TouchableOpacity>
								
							</View>
						)
					}
						
						
					}
                />	
			</SafeAreaView>
        );
    };

	const handleComponentEmptyRendering = () => {
        const render = () => {
            return (
                <View style={styles.container3}>
                    <View style={styles.genericRow}>
                        <Text style={{color: COLORS.primary, ...FONTS.h2}}>No Transactions</Text>
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
                    <Text style={{...FONTS.h4, color: COLORS.orange, marginTop: 10}}>This could be because you haven't added bank accounts yet. Add accounts
						to get your transaction data.
                    </Text>
                    <Image 
                        source={require('../../assets/home/transactions.png')}
                        style={{
                            width: 380,
                            height: 330,
                            marginTop: 80,
                        }}
                    />
                </View>
            );
        }
        return (
            render()
            
        );
    }

    return (accountMap === null)? (
        handleComponentEmptyRendering()
    ) : (
        handleComponentDidMount()
		// handleComponentEmptyRendering()
    )
};

const mapStateToProps = (store) => ({
	notification_token: store.notificationReducer.notification_token,
	notifications: store.notificationReducer.notifications,
});

export default connect(mapStateToProps, null)(Notifications); 