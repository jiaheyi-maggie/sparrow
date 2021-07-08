import React, { useState, useEffect }  from 'react';
import { Text, SafeAreaView, View, ScrollView, FlatList, Pressable, TouchableOpacity, Image } from 'react-native';
import { COLORS, FONTS } from '../../constants/theme';
import styles from '../../styles/homeStyle';

const Notifications = ({ navigation }) => {

    const handleComponentDidMount = () => {
        return (
          <SafeAreaView style={[styles.container2, {backgroundColor: COLORS.desertGreen}]}>
            <ScrollView>
                {/* Display name */}
                <Text style={{color: COLORS.white, ...FONTS.h2}}>Notifications</Text>
            </ScrollView>
          </SafeAreaView>
        );
    };

    return (
        handleComponentDidMount()
    )
};

export default Notifications; 

