import React, { useState } from 'react';
import { Text, SafeAreaView, View, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import styles from '../../../styles/homeStyle';
import firebase from 'firebase';

const ChangeEmail = ({ navigation }) => {

    const [error, setError] = useState('');
    const [password, setPassword] = useState('');
    const [newEmail, setNewEmail] = useState('');

    // reauthenticate the user first if they are signed in for too long
    const reauthenticate = (currentPassword) => {
        var user = firebase.auth().currentUser;
        var cred = firebase.auth.EmailAuthProvider.credential(
            user.email, currentPassword);
        return user.reauthenticateWithCredential(cred);
    }

    const changeEmail = (currentPassword, newEmail) => {
        reauthenticate(currentPassword).then(() => {
          var user = firebase.auth().currentUser;
          user.updateEmail(newEmail).then(() => {
                user.sendEmailVerification()
                .then(() => {
                setError("Email verification is sent to the new address.");
                }).catch((err) => {
                    setError(err.message);
                })
            }).catch((error) => {
                setError(error.message);
            });
        }).catch((error) => {
            setError(error.message);
        });
    }


    const handleSave = () => {
        changeEmail(password, newEmail);

        // navigation.goBack();
    }

    const handleComponentDidMount = () => {
        return (
            <SafeAreaView style={styles.container2}>
                <ScrollView>

                    {/* header */}
                    <View style={{alignItems: 'center'}}>
                        <Text style={styles.title}>Change E-Mail</Text>   
                    </View>

                    {/* main content */}
                    <View style={{margin: 5}}>
                        <Text style={styles.settingsText}>New E-mail Address:</Text>
                        <TextInput
                            placeholder="New e-mail address"
                            onChangeText={(value) => setNewEmail(value)}
                            style={styles.settingsInput}
                            value={newEmail}
                            keyboardType='email-address'
                        />
                        <View style={{borderBottomColor: '#D7CEB2',borderBottomWidth: 1}}/>
                    </View>

                    <View style={{margin: 5}}>
                        <Text style={styles.settingsText}>Current Password:</Text>
                        <TextInput
                            placeholder="Enter current password to change email"
                            onChangeText={(value) => setPassword(value)}
                            style={styles.settingsInput}
                            value={password}
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

export default ChangeEmail;