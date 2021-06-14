import React from 'react';
import { Text, View , ScrollView } from 'react-native';
import styles from '../../styles/homeStyle';

const Notification = () => {

    return (
        <ScrollView>
            <Text style={styles.title}> This is Notification!</Text>
        </ScrollView>
    );
}
export default Notification;