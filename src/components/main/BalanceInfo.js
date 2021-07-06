import React from 'react';
import { View, Text, Image } from 'react-native';
import { SIZES, COLORS, FONTS } from '../../constants/theme';

const BalanceInfo = ({ title, displayAmount, currency, changePct }) => {
    return (
        <View>
            <Text style={{...FONTS.h4, color: COLORS.lightGray3}}>{title}</Text>

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{...FONTS.h4, color: COLORS.lightGray3}}>$</Text>
                <Text style={{...FONTS.h2, color: COLORS.white, marginHorizontal: 5}}>{displayAmount}</Text>
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
                    {changePct.toFixed(2)}%
                </Text>

                <Text style={{...FONTS.h4, color: COLORS.lightGray3, alignSelf:'flex-end'}}> over a 7-day period</Text>

            </View>

        </View>
    )
};

export default BalanceInfo; 