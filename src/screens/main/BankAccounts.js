import React, { Component }  from 'react';
import { Text, SafeAreaView, View, ScrollView, FlatList, Pressable, TouchableOpacity, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import { COLORS, FONTS } from '../../constants/theme';
import styles from '../../styles/homeStyle';

const Notifications = ({ navigation }) => {

    const handleComponentDidMount = () => {
        return (
          <SafeAreaView style={styles.container2}>
            <ScrollView>
            
                {/* Display name */}
                <Text style={{color: COLORS.primary, ...FONTS.h2}}>Bank Accounts</Text>
            </ScrollView>
          </SafeAreaView>
        );
    };

    return (
        handleComponentDidMount()
    )
};

export default Notifications; 
