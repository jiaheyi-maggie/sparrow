import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, Modal, SafeAreaView, TextInput } from 'react-native';
import styles from '../../styles/homeStyle';
import { COLORS, FONTS } from '../../constants/theme';


const PaymentModal = ({ navigation }) => {
    const [paypalAccessToken, setPaypalAccessToken] = useState(null);
    const [expirationTime, setExpirationTime] = useState(null);
    const [orderId, setOrderId] = useState(null);
    const [payeeEmail, setpayeeEmail] = useState(null);
    const [amount, setAmount] = useState(null);
    const [notes, setNotes] = useState(null);
    const [modalVisible, setModalVisible] = useState(true);
  
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
    
    const makePayment = (amount) => {
        var axios = require('axios');
        var data = JSON.stringify({
            "intent": "CAPTURE",
            "purchase_units": [
                    {
                    "amount": {
                        "currency_code": "USD",
                        "value": `${amount}`
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
                setOrderId(response.data.id);
            })
            .catch(function (error) {
                console.log(error);
            });

        // get payment details
        var details = {
            method: 'get',
            url: `https://api-m.sandbox.paypal.com/v2/checkout/orders/${orderId}`,
            headers: {
                'Content-Type': "application/json",
                "Authorization": `Bearer ${paypalAccessToken}`
            }
        }

        axios(details)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
    };

    useEffect(() => {
        getPaypalAccessToken();
    }, [])

    const handleComponentRendering = () => {
        return (
                <SafeAreaView style={[styles.container3, {backgroundColor: COLORS.desertGreen}]}>
                    <View style={styles.genericRow}>
                        <Text style={[styles.title, {color:COLORS.white}]}>New Payment</Text>
                        <TouchableOpacity  onPress={() => {
                            navigation.goBack();
                            }}>
                            <View style={{flexDirection: 'row', alignItems:'center'}}>
                                <Image 
                                    source={require('../../assets/Icons/close.png')}
                                    resizeMode='contain'
                                    style={{width: 15,height: 15,tintColor: COLORS.white}}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>

                    {/* Note */}
                        <Text style={[styles.listText,{marginTop:10}]}>Notes</Text>
                        <View style={styles.textInputContainerValue2}>
                            <TextInput
                                value={notes}
                                maxLength={32}
                                // onFocus={() => this.setState({pageOffset: this.state.keyboardOffset})}
                                onChangeText={(text) => setNotes(text)}
                                style={{
                                    ...FONTS.body2,
                                    backgroundColor: '#fff',
                                    borderRadius: 15,
                                    paddingVertical: 10,
                                    fontSize: 18,
                                    color: '#E76F51',
                                    elevation: 2,
                                    textAlign: 'left',
                                    height: 180,
                                    paddingLeft: 10,
                                    flex: 1
                                }}
                                placeholder='Not essential for me this month...'
                                // onEndEditing={() => {
                                //     this.setState({pageOffset: 0});
                                // }}
                                // onSubmitEditing={() => {
                                //     this.setState({pageOffset: 0});
                                // }}
                                returnKeyLabel='done'
                            />
                        </View>

                        {/* Pay Button */}
                        <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 170}}>
                            <TouchableOpacity 
                                onPress={() => makePayment(100)} 
                                style={{borderRadius: 15, backgroundColor:'white', paddingVertical: 10, width: 300}}>
                                <Text style={{...FONTS.h2, color: COLORS.red, alignSelf:'center'}}>Pay</Text>
                            </TouchableOpacity>
                        </View>

                </SafeAreaView>
            // </Modal>
        )
    }

    return (
        handleComponentRendering()
    );
}

export default PaymentModal; 