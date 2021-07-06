import React, { Component }  from 'react';
import { Text, SafeAreaView, View, ScrollView, FlatList, Pressable, TouchableOpacity, Image } from 'react-native';
import styles from '../../styles/homeStyle';

const Crypto = ({ navigation }) => {

    const handleComponentDidMount = () => {
        return (
          <SafeAreaView style={styles.container2}>
            <ScrollView>
            
                {/* Display name */}
                <Text style={styles.title}>My Crypto Wallet</Text>
            </ScrollView>
          </SafeAreaView>
        );
    };

    return (
        handleComponentDidMount()
    )
};

export default Crypto; 
