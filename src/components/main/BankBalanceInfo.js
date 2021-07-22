import React from 'react';
import { View, Text, Image } from 'react-native';
import { SIZES, COLORS, FONTS } from '../../constants/theme';

const BankBalanceInfo = ({ title, displayAmount, currency, changePct }) => {
    return (
        <View style={{backgroundColor:'aliceblue', margin: 5, padding: 8, width: 180, marginBottom: 10, alignItems:'center'}}>
            <Text style={{...FONTS.h4, color: COLORS.lightGray3, textDecorationLine: 'underline', alignSelf:'flex-start', fontWeight:'bold'}}>{title}</Text>

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{...FONTS.h4, color: COLORS.lightGray3}}>$</Text>
                <Text style={{...FONTS.h2, color: COLORS.bluebell, marginHorizontal: 5}}>{displayAmount}</Text>
                <Text style={{...FONTS.h4, color: COLORS.lightGray3}}>{currency}</Text>
            </View>

            <View style={{flexDirection: 'row', alignItems:'center'}}>
                {
                    changePct !== 0 && 
                    <Image
                        source={require('../../assets/Icons/up-arrow.png')}
                        style={{
                            width: 10,
                            height: 10,
                            alignSelf: 'center',
                            tintColor: (changePct > 0) ? COLORS.lightGreen : COLORS.red,
                            transform: (changePct > 0) ? [{rotate: '45deg'}] : [{rotate:'125deg'}]
                        }}
                    />
                }
                <Text style={{alignSelf:'center',color: (changePct > 0)? COLORS.lightGreen : COLORS.red,marginHorizontal: 2}}>
                    {changePct}%
                </Text>

                <Text style={{...FONTS.h4, color: COLORS.lightGray3, alignSelf:'flex-end'}}> over 7 days</Text>

            </View>

        </View>
    )
};

export default BankBalanceInfo; 