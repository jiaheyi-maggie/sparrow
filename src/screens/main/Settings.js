import React from 'react';
import { Text, SafeAreaView, TouchableOpacity, Alert } from 'react-native';

import firebase from 'firebase';

import styles from '../../styles/homeStyle';


const Settings = ({ navigation }) => {

  // TODO: navigate to sign in
  const loggingOut = () => {
    firebase.auth().signOut().then(() => {
      Alert.alert('User logged out');
      navigation.navigate('signin');
    }
    ).catch ((err) => {
      Alert.alert('There is something wrong!', err.message);
    });
  }


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Settings</Text>
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