import React, { useState, useEffect }  from 'react';
import { Text, SafeAreaView, View, ScrollView, FlatList, Pressable, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import { sendPushNotifications } from '../../app/actions/notificationActions';
import { Searchbar } from 'react-native-paper';
import { COLORS, FONTS } from '../../constants/theme';
import styles from '../../styles/homeStyle';

const Notifications = ({ navigation, notification_token, notifications }) => {
	const [transactions, setTransactions] = useState(null);
    const [searchQuery, setSearchQuery] = React.useState('');
	// search bar function
	const onChangeSearch = query => setSearchQuery(query);

    const getTransactionsFromMongo = async () => {
        try {
            await fetch('http://192.168.1.20:19002/transactions/get')
				.then(response => response.json())
				.then(response => setTransactions(response))
				.catch((error) => {
					console.log(error);
				});
          
          } catch (error) {
            console.error(error);
          }
    };

	useEffect(() => {
        getTransactionsFromMongo();
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
				
				{/* dummy send notification button */}
				<TouchableOpacity onPress={() => sendPushNotifications(notification_token, 'Welcome to Sparrow', "Add 	bank accounts!")}>
					<Text>Press to send notification</Text>
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
                        return (
							<View style={{borderBottomWidth: 1, borderBottomColor: COLORS.bone}}>
								<View style={styles.genericRow}>
									<Text style={{...FONTS.h4, color: COLORS.lightGray3, margin: 10}}>{itemName}</Text>
									<Text style={{...FONTS.h3, color: priceColor, margin: 10}}>$ {item.amount}</Text>
								</View>
								<View style={styles.genericRow}>
									<Text>{item.category[0]}: {item.category[1]}</Text>
									<Text>{item.date}</Text>
								</View>
						
							</View>
                        );
                    }}
                    keyExtractor={item => item.id}
                    ListFooterComponent={<View style={{height: 60}}></View>}
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