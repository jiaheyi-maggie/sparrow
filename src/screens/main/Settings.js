import React from 'react';
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import firebase from 'firebase';
import styles from '../../styles/homeStyle';

const Settings = () => {

    async function loggingOut() {
        try {
          await firebase.auth().signOut();
        } catch (err) {
          Alert.alert('There is something wrong!', err.message);
        }
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