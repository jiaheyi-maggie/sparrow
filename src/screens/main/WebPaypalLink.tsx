import React, { useState, useCallback, useEffect } from 'react';
import { View, Modal, TouchableOpacity, Text, Image, Platform, SafeAreaView} from 'react-native';
import styles from '../../styles/homeStyle';
import WebView from 'react-native-webview';
import { COLORS, FONTS, deviceWidth, deviceHeight } from '../../constants/theme';
import { connect } from 'react-redux';

const WebPaypalLink = ({ navigation }) => {

    const handleRendering = () => {
        switch (Platform.OS) {
            case 'ios':
                // TODO: style
                return (
                    <SafeAreaView style={{marginTop: 20}}>
                        
                        <WebView source={{uri: 'http://192.168.1.20:19002/payment'}} 
                            style={{height: deviceHeight}}
                        />
                    </SafeAreaView>
                );
            default: 
                return (
                    <SafeAreaView style={{marginTop: 20}}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <View style={{flexDirection: 'row', alignItems:'center'}}>
                                <Image 
                                    source={require('../../assets/Icons/back.png')}
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
                        <WebView source={{uri: 'http://192.168.1.20:19002/payment'}} 
                            style={{height: deviceHeight}}
                        />
                    </SafeAreaView>
                );
        }
       
    }

    return (
        handleRendering()
        
    );
}
export default WebPaypalLink;