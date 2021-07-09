import React, { useState, useEffect, FunctionComponent } from 'react';
import { Text, SafeAreaView, View, ScrollView, FlatList, Pressable, TouchableOpacity, Image, NativeEventEmitter, NativeModules, Platform, Button } from 'react-native';
import { COLORS, FONTS } from '../../constants/theme';
import { PlaidLink } from '../../types/PlaidLink';
import { connect } from 'react-redux';
import styles from '../../styles/homeStyle';
import OpenPlaidLink from '../../types/OpenPlaidLink';

const Link = ({ navigation, link_token, client }) => {
    
	useEffect(() => {
	}, [])

    const handleComponentDidMount = () => {
        return (
			<SafeAreaView style={styles.container2}>
				<View style={styles.genericRow}>
					<Text style={{color: COLORS.primary, ...FONTS.h2}}>Bank Accounts</Text>
                    <PlaidLink token={link_token} />
				</View>
				
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
