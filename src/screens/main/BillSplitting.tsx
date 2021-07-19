import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../../styles/homeStyle';
// import axios from 'axios';
import { COLORS, FONTS } from '../../constants/theme';


const BillSplitting = ({ navigation }) => {
    

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
            'Authorization': 'Bearer A21AAJoU8NqmrxRrq-1X1yP6GuXHXEJeMB7cs_FwuzUy6TnmCOwqTu4v0sbFEkmvztIILKwMNRkIr-mSo9Yidz98Dp6Va-XrA'
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

    }

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