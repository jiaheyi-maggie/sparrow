import React from 'react';
import { View, TouchableOpacity, Text, Platform, SafeAreaView } from 'react-native';
import styles from '../../styles/homeStyle';

const BankAccounts = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.container}>
        
            {/* Display name */}
            <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 10}}>
                <TouchableOpacity style={{backgroundColor: '#7E9181', borderRadius: Platform.OS === 'ios' ?10:10}}>
                    <Text style={[styles.cardText,{fontSize: 40}]}>+</Text>
                </TouchableOpacity>
                <Text style={styles.title}>Add Bank Accounts</Text>
            </View>
            

        </SafeAreaView>

    );

};

export default BankAccounts; 