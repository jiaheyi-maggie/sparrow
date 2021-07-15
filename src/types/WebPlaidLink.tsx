import React, { useState, useCallback, useEffect } from 'react';
import { View, Modal, TouchableOpacity, Text, Image } from 'react-native';
import styles from '../styles/homeStyle';
import WebView from 'react-native-webview';
import { COLORS, FONTS } from '../constants/theme';
import { connect } from 'react-redux';

// interface Props {
//     token: string;
//     client: Client;
// }

const WebPlaidLink = ({ navigation }) => {

    const handleRendering = () => {
        return (
            <View style={[styles.container3, {flex: 1}]}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <View style={{flexDirection: 'row', alignItems:'center'}}>
                        <Image 
                            source={require('../assets/Icons/back.png')}
                            style={{
                                width: 13,
                                height: 13,
                                tintColor: COLORS.primary,
                                marginRight: 5
                            }}
                        />
                        <Text style={{...FONTS.h4, color: COLORS.primary}}>Back</Text>
                    </View>
                    
                </TouchableOpacity>
                <WebView source={{uri: 'http://192.168.1.20:19002'}} 
                    style={{flex:1,  height: 200}}
                />
            </View>
        );
    }

    return (
        handleRendering()
        
    );
}

const mapStateToProps = (store) => ({
    client: store.plaidReducer.client,
})
export default connect(mapStateToProps, null)(WebPlaidLink);