import React, { useState, useEffect } from 'react';
import { Text, SafeAreaView, View, ScrollView, FlatList, Pressable, TouchableOpacity, Image } from 'react-native';
import { COLORS, FONTS } from '../../constants/theme';
// import { usePlaidLink, PlaidLinkOptions, PlaidLinkOnSuccess, PlaidLink } from 'react-plaid-link';
import { PlaidLink, LinkSuccess, LinkExit } from 'react-native-plaid-link-sdk';
import { bindActionCreators } from 'redux';
import { onSuccess, onExit } from '../../app/actions/plaidActions';
import axios from 'axios';
import { connect } from 'react-redux';
import styles from '../../styles/homeStyle';

const BankAccounts = ({ navigation, link_token }) => {

    const handleComponentDidMount = () => {
        return (
			<SafeAreaView style={[styles.container2, {backgroundColor: COLORS.bone}]}>
				<View style={styles.genericRow}>
					{/* Display name */}
					<Text style={{color: COLORS.primary, ...FONTS.h2}}>Bank Accounts</Text>

					{/* Add bank account link */}
					<PlaidLink
						tokenConfig ={{
							token: link_token
						}}
						onSuccess={(success) => onSuccess(success)}
						onExit={(exit) => onExit(exit)}
					>
						<View style={[styles.genericRow, {backgroundColor: COLORS.lightSalmon, borderRadius: 15, padding: 3, elevation:2}]}>
							<Image 
								source={require('../../assets/Icons/add.png')}
								style={{
									height: 20,
									width: 20,
									tintColor: COLORS.white
								}}
							/>
							<Text style={{...FONTS.h3, color: COLORS.white, marginHorizontal: 5}}>Add</Text>
						</View>
					</PlaidLink>
				</View>
				
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

const mapDispatchToProps = (dispatch) => bindActionCreators({ onSuccess, onExit }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BankAccounts); 

