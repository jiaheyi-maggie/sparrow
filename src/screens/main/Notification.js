import React from 'react';
import { Text, View , ScrollView, SafeAreaView } from 'react-native';
import styles from '../../styles/homeStyle';

const Notification = () => {

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Notification</Text>
            <ScrollView style={styles.container}>
                
            </ScrollView>
        </SafeAreaView>
    );
}
export default Notification;