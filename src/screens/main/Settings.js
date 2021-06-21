import React from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import firebase from 'firebase';
import styles from '../../styles/homeStyle';

const Settings = () => {

  // TODO: when logged out, return to SignIn page
  const loggingOut = () => {
    firebase.auth().signOut().then(() => {
      Alert.alert('User logged out');
    }
    ).catch ((err) => {
      Alert.alert('There is something wrong!', err.message);
    });
  }


  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => loggingOut()}
      > 
        <Text style={styles.buttonText}> Log Out</Text>
      </TouchableOpacity>
    </SafeAreaView>

  );
}
export default Settings;