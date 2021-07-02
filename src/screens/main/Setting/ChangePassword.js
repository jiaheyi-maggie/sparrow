import React, { useState } from 'react';
import { Text, SafeAreaView, View, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import styles from '../../../styles/homeStyle';

const ChangePassword = ({ navigation }) => {

    const [error, setError] = useState('');
    const handleComponentDidMount = () => {
        return (
            <SafeAreaView style={styles.container2}>
                <ScrollView>

                    {/* header */}
                    <View style={{alignItems: 'center'}}>
                        {/* Display name */}
                        <Text style={styles.title}>Change Password</Text>   
                    </View>

                    {/* main content */}
                    
                    <View style={{margin: 5}}>
                        <Text style={styles.settingsText}>Current Password:</Text>
                        <TextInput
                            placeholder="Old password"
                            onChangeText={(firstname) => setFirstname(firstname)}
                            style={styles.settingsInput}
                        />
                        <View style={{borderBottomColor: '#D7CEB2',borderBottomWidth: 1}}/>
                    </View>

                    {/* main content */}
                    <View style={{margin: 5}}>
                        <Text style={styles.settingsText}>New Password:</Text>
                        <TextInput
                            placeholder="New password"
                            onChangeText={(firstname) => setFirstname(firstname)}
                            style={styles.settingsInput}
                        />
                        <View style={{borderBottomColor: '#D7CEB2',borderBottomWidth: 1}}/>
                    </View>

                    {/* main content */}
                    <View style={{margin: 5}}>
                        <Text style={styles.settingsText}>Confire New Password:</Text>
                        <TextInput
                            placeholder="Re-enter new password"
                            onChangeText={(firstname) => setFirstname(firstname)}
                            style={styles.settingsInput}
                        />
                        <View style={{borderBottomColor: '#D7CEB2',borderBottomWidth: 1}}/>
                    </View>

                    <View style={{margin: 5}}>
                        <Text style={styles.subtitle, {color: '#E76F51', marginBottom: 5}}>{error}</Text>
                    </View>

                    <View style={{margin: 5}}>
                    <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
                        <Text style={styles.listText}>Forgot Password?</Text>
                    </TouchableOpacity>
                    </View>


                    {/* Buttons */}
                    <View style={{margin: 10, flexDirection: 'row', justifyContent: 'space-between', alignContent:'center'}}>
                    <TouchableOpacity style={styles.settingsButton}
                        onPress={()=> navigation.goBack()}>
                        <Text style={{fontSize: 16, fontWeight: 'bold', color: '#264653'}}>Save</Text> 
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

export default ChangePassword;