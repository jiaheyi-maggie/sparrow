import React from 'react';
import { Text, View } from 'react-native';
import styles from '../../styles/homeStyle';

const Home = () => {

    return (
        <View style={styles.homeContainer}>
            <Text style={styles.title}> This is home!</Text>
        </View>
    );
}
export default Home;