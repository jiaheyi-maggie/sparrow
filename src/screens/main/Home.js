import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import store from '../../app/store';

import styles from '../../styles/homeStyle';

const Home = () => {

    const [currentUser, setCurrentUser] = useState(store.userState);

    // component did mount
    useEffect(() => {

    });

    return (
        <View style={styles.homeContainer}>
            <Text style={styles.title}> This is home!</Text>
        </View>
    );
}
export default Home;