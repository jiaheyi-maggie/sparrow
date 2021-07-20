import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../../styles/homeStyle';
// import axios from 'axios';
import { COLORS, FONTS } from '../../constants/theme';


const BillSplitting = ({ navigation }) => {
    const [paypalAccessToken, setPaypalAccessToken] = useState(null);
    const [expirationTime, setExpirationTime] = useState(null);
 
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
    
    // todo: dummy amount
    const requestPayment = () => {
        var axios = require('axios');
        var data = JSON.stringify({
        "intent": "CAPTURE",
        "purchase_units": [
                {
                "amount": {
                    "currency_code": "USD",
                    "value": "100.00"
                }
            }
        ]
        });

        var config = {
            method: 'post',
            url: 'https://api-m.sandbox.paypal.com/v2/checkout/orders',
            headers: { 
                'Content-Type': 'application/json', 
                'Authorization': `Bearer ${paypalAccessToken}`
            },
            data : data
        };

        axios(config)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    useEffect(() => {
        getPaypalAccessToken();
    }, [])

    const handleComponentRendering = () => {
        return (
            <View style={styles.container3}>
                <Text style={styles.title}>Bill Splitting</Text>
                <TouchableOpacity onPress={() => requestPayment()}>
                    <Text>Request money from stranger!</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        handleComponentRendering()
    );
}

export default BillSplitting; 