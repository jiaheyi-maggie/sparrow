import React from 'react';
import { Text, SafeAreaView, View, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../../../styles/homeStyle';

const PaymentAccounts = ({ navigation }) => {
    const handleComponentDidMount = () => {
        return (
            <SafeAreaView style={styles.container2}>
                <ScrollView>

                    {/* header */}
                    <View style={{alignItems: 'center'}}>
                        {/* Display name */}
                        <Text style={styles.title}>Payment Accounts</Text>   
                    </View>

                    {/* main content */}

                    {/* Buttons */}
                    <View style={{margin: 10, flexDirection: 'row', justifyContent: 'space-between', alignContent:'center'}}>
                    <TouchableOpacity style={styles.settingsButton}
                        onPress={()=> navigation.goBack()}>
                        <Text style={{fontSize: 16, fontWeight: 'bold', color: '#264653'}}>Done</Text> 
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.settingsButton}
                        onPress={()=> navigation.goBack()}>
                        <Text style={{fontSize: 16, fontWeight: 'bold', color: '#264653'}}>Cancel</Text> 
                    </TouchableOpacity>
                </View>
                    
                </ScrollView>
            </SafeAreaView>
        );
    }

    return (
        handleComponentDidMount()
    );

};

export default PaymentAccounts;