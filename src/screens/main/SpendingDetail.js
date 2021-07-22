import React, { useEffect, useState } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import styles from '../../styles/homeStyle';
import AveragePeriodPicker from '../../components/picker/AveragePeriodPicker';
import { COLORS, FONTS } from '../../constants/theme';
import store from '../../app/store';
import { connect } from 'react-redux';
import periods from '../../data/periods';

const SpendingDetail = ({ navigation }) => {

    const [period, setPeriod] = useState("month");
    const transactions = store.getState().plaidReducer.transactions;

    const calculateSum = (period) => {
        switch (period) {
            // case 'year':
            // case 'quarter':
            case 'month':
                let currentMonth = new Date().getMonth();
            // case 'week':
            // case 'day':
        }
    }

    const [spendingSum, setSpendingSum] = useState(0);
    const calculateTotal = () => {
        let total = 0;
        for (var i = 0; i < transactions.length; i++) {
            total += transactions[i].amount;
        }
        setSpendingSum(total);
    }


    useEffect(() => {
        // console.log(transactions);
        calculateTotal();
        // console.log(transactions);
    }, [])

    const handleComponentDidMount = () => {
        return (
            <SafeAreaView style={styles.container3}>
                {/* Header */}
                <View style={styles.genericRow}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image 
                            source={require('../../assets/Icons/back.png')}
                            style={{
                                width: 18,
                                height: 18,
                                tintColor: COLORS.primary,
                            }}
                        />
                    </TouchableOpacity>
                    <Text style={{color: COLORS.primary, ...FONTS.h2}}>Spendings</Text>
                    {/* Menu */}
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

                {/* Main Content */}

                <View style={styles.genericRow}> 
                    <Text style={{...FONTS.h3, color: COLORS.secondary}}>Summary</Text>
                    <View style={{alignSelf:'flex-end'}}>
                        <AveragePeriodPicker />
                    </View>
                </View>

                {/* TODO: Number calculations */}
                {/* Budget overview card */}
                <View style={{backgroundColor:'aliceblue', margin: 5, padding: 8, width: 180, marginBottom: 10, alignItems:'center'}}>
                    <Text style={{...FONTS.h4, color: COLORS.lightGray3, textDecorationLine: 'underline', alignSelf:'flex-start', fontWeight:'bold'}}>Total</Text>

                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={{...FONTS.h4, color: COLORS.lightGray3}}>$</Text>
                        <Text style={{...FONTS.h2, color: COLORS.bluebell, marginHorizontal: 5}}>{spendingSum}</Text>
                        <Text style={{...FONTS.h4, color: COLORS.lightGray3}}>USD</Text>
                    </View>

                </View>
                <View style={[styles.genericRow, {marginTop: 10}]}>
                    <View style={{backgroundColor:'aliceblue', margin: 5, padding: 8, width: 180, marginBottom: 10, alignItems:'center'}}>
                        <Text style={{...FONTS.h4, color: COLORS.lightGray3, textDecorationLine: 'underline', alignSelf:'flex-start', fontWeight:'bold'}}>Recurring</Text>

                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={{...FONTS.h4, color: COLORS.lightGray3}}>$</Text>
                            <Text style={{...FONTS.h2, color: COLORS.bluebell, marginHorizontal: 5}}>0</Text>
                            <Text style={{...FONTS.h4, color: COLORS.lightGray3}}>USD</Text>
                        </View>

                    </View>

                    <View style={{backgroundColor:'aliceblue', margin: 5, padding: 8, width: 180, marginBottom: 10, alignItems:'center'}}>
                        <Text style={{...FONTS.h4, color: COLORS.lightGray3, textDecorationLine: 'underline', alignSelf:'flex-start', fontWeight:'bold'}}>Non-Recurring</Text>

                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={{...FONTS.h4, color: COLORS.lightGray3}}>$</Text>
                            <Text style={{...FONTS.h2, color: COLORS.bluebell, marginHorizontal: 5}}>0</Text>
                            <Text style={{...FONTS.h4, color: COLORS.lightGray3}}>USD</Text>
                        </View>

                    </View>
                </View>
            </SafeAreaView>
        );
    }

    return (
        handleComponentDidMount()
    )
}

export default connect(null, null)(SpendingDetail);