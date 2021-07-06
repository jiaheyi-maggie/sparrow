import React from 'react';
import { View, Text, Image } from 'react-native';
import { SIZES, COLORS, FONTS } from '../../constants/theme';

const BalanceInfo = ({ title, displayAmount, changePct }) => {
    return (
        <View>
            <Text style={{...FONTS.h4, color: COLORS.lightGray3}}>{title}</Text>

            <View>
                <Text style={{...FONTS.h4, color: COLORS.lightGray3}}>$</Text>
            </View>

        </View>
    )
};

export default BalanceInfo; 