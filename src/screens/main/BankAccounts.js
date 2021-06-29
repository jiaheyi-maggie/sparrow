import React from 'react';
import { View, TouchableOpacity, Text, Image, SafeAreaView } from 'react-native';
import styles from '../../styles/homeStyle';

const BankAccounts = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.container2}>
        
            {/* Display name */}
            <Text style={styles.title}>Add Bank Accounts</Text>

        </SafeAreaView>

    );

};

export default BankAccounts; 