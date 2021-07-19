import React, { useState, useEffect }  from 'react';
import { Text, SafeAreaView, View, ScrollView, FlatList, Pressable, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import { sendPushNotifications } from '../../app/actions/notificationActions';
import { Searchbar } from 'react-native-paper';
import { COLORS, FONTS } from '../../constants/theme';
import styles from '../../styles/homeStyle';

const Notifications = ({ navigation, notification_token, notifications }) => {
	const [transactions, setTransactions] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
	let accountIDs = new Array();
	const [accountMap, setAccountMap] = useState(null);

	const onChangeSearch = query => setSearchQuery(query);

    const getTransactionsFromMongo = async () => {
        // try {
            await fetch('http://192.168.1.20:19002/transactions/get')
				.then(response => response.json())
				.then(response => {
					setTransactions(response);
					for (var i = 0; i < response.length; i++) {
						accountIDs.push(response[i].account_id);
					}
				})
				.catch((error) => {
					console.log(error);
				});
          
        //   } catch (error) {
        //     console.error(error);
        //   }
    };

	const getAccountMap = async () => {
        // try {
            await fetch('http://192.168.1.20:19002/api/accounts/map')
				.then(response => response.json())
				.then(response => {
					setAccountMap(response);
				})
				.catch((error) => {
					console.log(error);
				});
		
		// } catch (error) {
		// 	console.error(error);
		// }
    };

	const findAccountName = async (id) => {
		try {
			const response = accountMap.filter(obj => obj.account_id === id);
			// console.log(response);
			return response.name;
		} catch (error) {
			console.log(error);
		}
	}



	useEffect(() => {
        getTransactionsFromMongo();
		getAccountMap();
		findAccountName("EMkJoZBJeaCvAnxkPeDLCxLN9AVDlVujWQNq7");
		// console.log(accountMap);
	}, [])

    const handleComponentDidMount = () => {
        return (
			<SafeAreaView style={styles.container2}>
				<View style={styles.genericRow}>
					<Text style={{color: COLORS.primary, ...FONTS.h2}}>Notifications</Text>
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
				
				<TouchableOpacity>
					<Image

					/>
				</TouchableOpacity>

				<Searchbar
					placeholder="Search Transactions"
					onChangeText={onChangeSearch}
					value={searchQuery}
					style={{width: 370, height: 40, marginBottom: 8, elevation:3}}
					inputStyle={{...FONTS.h33}}
					iconColor={COLORS.lightSalmon}
				/>

				<View style={styles.genericRow}>
					<Text style={{...FONTS.h3, color: COLORS.secondary, marginBottom:5}}>Transactions</Text>
				</View>

				<View style={styles.genericRow}>
					<TouchableOpacity style={{backgroundColor:COLORS.desertGreen, borderRadius:15, padding: 3, flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
						<Text style={{...FONTS.h4, color: COLORS.white, marginLeft: 5}}>Filter</Text>
						<Image
							source={require('../../assets/Icons/filter.png')}
							style={{width: 13, height: 13, tintColor: COLORS.white, margin: 5, marginTop: 6}}
						/>
					</TouchableOpacity>

					<TouchableOpacity style={{backgroundColor:COLORS.lightSalmon, borderRadius:15, padding: 3, flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
						<Text style={{...FONTS.h4, color: COLORS.white, marginLeft: 5}}>Sort by</Text>
						<Image
							source={require('../../assets/Icons/down-arrow.png')}
							style={{width: 13, height: 13, tintColor: COLORS.white, margin: 5, marginTop: 6}}
						/>
					</TouchableOpacity>
				</View>
				

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
							<View style={{borderWidth: 1,margin: 5,  borderBottomColor: COLORS.bone}}>
								<Text style={{...FONTS.body4, color: COLORS.orange, marginTop: 10}}>{itemAccount}</Text>
								<View style={styles.genericRow}>
									<Text style={{...FONTS.h4, color: COLORS.bluebell, marginHorizontal: 10}}>{itemName}</Text>
									<Text style={{...FONTS.h3, color: priceColor, marginHorizontal: 10}}>$ {item.amount}</Text>
								</View>
								<View style={styles.genericRow}>
									<Text style={{...FONTS.body4, color: COLORS.lightGray3, marginHorizontal: 10}}>{item.category[0]}: {item.category[1]}</Text>
									<Text style={{...FONTS.body4, color: COLORS.lightGray3, marginHorizontal: 10}}>{item.date}</Text>
								</View>
						
							</View>
                        );
                    }}
                    keyExtractor={item => item.id}
                    ListFooterComponent={<View style={{height: 10}}></View>}
                />
			</SafeAreaView>
        );
    };

    return (
        handleComponentDidMount()
    )
};

const mapStateToProps = (store) => ({
	notification_token: store.notificationReducer.notification_token,
	notifications: store.notificationReducer.notifications,
});

export default connect(mapStateToProps, null)(Notifications); 