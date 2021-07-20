import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from '../../styles/homeStyle';
import { COLORS, FONTS } from '../../constants/theme';


const BillSplitting = ({ navigation }) => {
    const [paypalAccessToken, setPaypalAccessToken] = useState(null);
    const [expirationTime, setExpirationTime] = useState(null);
    const [orderId, setOrderId] = useState(null);
 
    const getPaypalAccessToken = async () => {
        const response = await fetch('http://192.168.1.20:19002/paypal/token')
            .then(response => response.json())
            .then(response => {
                setPaypalAccessToken(response.access_token);
                setExpirationTime(response.expires_in);
            })
            .catch(error => {
                console.log(error);
            })
    };

    useEffect(() => {
        getPaypalAccessToken();
        // console.log(paypalAccessToken);
    }, [])

    const handleComponentRendering = () => {
        return (
            <View style={[styles.container3, {backgroundColor:COLORS.desertGreen}]}>
                <Text style={[styles.title, {color: COLORS.white}]}>Bill Splitting</Text>

                {/* Buttons */}
                <View style={styles.genericRow}>
                    <View style={{backgroundColor: 'aliceblue', borderRadius: 20, paddingVertical: 5,paddingHorizontal:10, alignSelf: 'flex-start', marginVertical: 5}}>
                        <TouchableOpacity onPress={() => navigation.navigate("PaymentModal")}>
                            <Text style={{...FONTS.h4, color: COLORS.primary}}>Make Payment</Text>
                        </TouchableOpacity>   
                    </View>

                    <View style={{backgroundColor: 'aliceblue', borderRadius: 20, paddingVertical: 5,paddingHorizontal:10, alignSelf: 'flex-start', marginVertical: 5}}>
                        <TouchableOpacity onPress={() => navigation.navigate("PaymentModal")}>
                            <Text style={{...FONTS.h4, color: COLORS.primary}}>Request Payment</Text>
                        </TouchableOpacity>   
                    </View>
                </View>
                
                {/* TODO: Bill Split History */}
            </View>
        )
    }

    return (
        handleComponentRendering()
    );
}

export default BillSplitting; 