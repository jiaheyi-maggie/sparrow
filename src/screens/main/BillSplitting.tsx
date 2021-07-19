import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import styles from '../../styles/homeStyle';
import { COLORS, FONTS } from '../../constants/theme';


const BillSplitting = ({ navigation }) => {

    const handleComponentRendering = () => {
        return (
            <View style={styles.container3}>
                <Text style={styles.title}>Bill Splitting</Text>
            </View>
        )
    }
    return (
        handleComponentRendering()
    );
}

export default BillSplitting; 