import React, { useState, useEffect } from 'react';
import { Text, SafeAreaView, View, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import styles from '../../../styles/homeStyle';
import { connect } from 'react-redux';
import store from '../../../app/store';

const BankAccounts = ({ navigation, bank_accounts }) => {

    const [accounts, setAccounts] = useState(null);

    useEffect(() => {
        setAccounts(store.getState().plaidReducer.bank_accounts);
        // console.log("accounts");
        // console.log(accounts);
    }, [])

    const handleComponentDidMount = () => {
        return (
            <SafeAreaView style={styles.container2}>
                {/* header */}
                <View style={{alignItems: 'center'}}>
                    {/* Display name */}
                    <Text style={styles.title}>Bank Accounts</Text>   
                </View>

                {/* main content */}
                <FlatList
                    data={accounts}
                    renderItem={({item})=> {
                        return (
                            <View style={[styles.genericRow ,{backgroundColor:'aliceblue', margin: 10, padding: 8, alignItems:'center'}]}>
                                <Text style={{color: 'black'}}>{item.name}</Text>
                                <TouchableOpacity style={[styles.buttonOpen, {padding: 5, borderRadius: 10}]}>
                                    <Text>More</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                    keyExtractor={item => item._id}
                />

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
                    
            </SafeAreaView>
        );
    }

    return (
        handleComponentDidMount()
    );

};

const mapStateToProps = (store) => ({
    bank_accounts: store.plaidReducer.bank_accounts,
})

export default connect(mapStateToProps, null)(BankAccounts);