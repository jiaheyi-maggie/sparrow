import React, { useState, useEffect } from 'react';
import { Text, SafeAreaView, View, ScrollView, FlatList, Pressable, TouchableOpacity, Image } from 'react-native';
import { COLORS, FONTS } from '../../constants/theme';
// import { usePlaidLink, PlaidLinkOptions, PlaidLinkOnSuccess, PlaidLink } from 'react-plaid-link';
import { PlaidLink, LinkSuccess, LinkExit } from 'react-native-plaid-link-sdk';

import { connect } from 'react-redux';
import styles from '../../styles/homeStyle';
import store from '../../app/store';

const BankAccounts = ({ navigation, link_token }) => {

    const handleComponentDidMount = () => {
		// console.log(link_token);
        return (
			<SafeAreaView style={styles.container2}>
				
					{/* Display name */}
					<Text style={{color: COLORS.primary, ...FONTS.h2}}>Bank Accounts</Text>

					<PlaidLink
						tokenConfig ={{
							token: link_token
						}}
						onSuccess={(success) => {
							console.log(success);
						}}
						onExit={(exit) => {
							console.log(exit);
						}}
					>
						<Text>Add Bank Account</Text>
					</PlaidLink>
			</SafeAreaView>
			
        );
    };



    return (
        handleComponentDidMount()
    )
};

const mapStateToProps = (store) => ({
    link_token: store.plaidReducer.link_token
});

export default connect(mapStateToProps, null)(BankAccounts); 

