import React, { useState } from 'react';
import { Text, SafeAreaView, View, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import styles from '../../../styles/homeStyle';
import firebase from 'firebase';

const ChangePassword = ({ navigation }) => {

    const [error, setError] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [reNewPassword, setReNewPassword] = useState('');

    // reauthenticate the user first if they are signed in for too long
    const reauthenticate = (currentPassword) => {
        var user = firebase.auth().currentUser;
        var cred = firebase.auth.EmailAuthProvider.credential(
            user.email, currentPassword);
        return user.reauthenticateWithCredential(cred);
    }

    const changePassword = (currentPassword, newPassword) => {
        reauthenticate(currentPassword).then(() => {
            var user = firebase.auth().currentUser;
            user.updatePassword(newPassword).then(() => {
                setError("Password successfully updated!")
            }).catch((error) => {
                setError(error.message); 
            });
        }).catch((error) => {
            setError(error.message); 
        });
    }


    const handleSave = () => {
        if (newPassword === reNewPassword) {
            changePassword(oldPassword, newPassword);
        } else {
            setError("New passwords do not match.")
        }
        // navigation.goBack();
    }

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
                            onChangeText={(value) => setOldPassword(value)}
                            style={styles.settingsInput}
                            value={oldPassword}
                            secureTextEntry={true}
                        />
                        <View style={{borderBottomColor: '#D7CEB2',borderBottomWidth: 1}}/>
                    </View>

                    {/* main content */}
                    <View style={{margin: 5}}>
                        <Text style={styles.settingsText}>New Password:</Text>
                        <TextInput
                            placeholder="New password"
                            onChangeText={(value) => setNewPassword(value)}
                            style={styles.settingsInput}
                            value={newPassword}
                            secureTextEntry={true}
                        />
                        <View style={{borderBottomColor: '#D7CEB2',borderBottomWidth: 1}}/>
                    </View>

                    {/* main content */}
                    <View style={{margin: 5}}>
                        <Text style={styles.settingsText}>Confirm New Password:</Text>
                        <TextInput
                            placeholder="Re-enter new password"
                            onChangeText={(value) => setReNewPassword(value)}
                            style={styles.settingsInput}
                            value={reNewPassword}
                            secureTextEntry={true}
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
                        onPress={() => handleSave()}>
                        <Text style={{fontSize: 16, fontWeight: 'bold', color: '#264653'}}>Save</Text> 
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.settingsButton}
                        onPress={()=> navigation.goBack()}>
                        <Text style={{fontSize: 16, fontWeight: 'bold', color: '#264653'}}>Back</Text> 
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