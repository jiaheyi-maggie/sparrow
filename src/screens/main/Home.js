import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';

import store from '../../app/store';
import { fetchUser } from '../../app/actions/fetchUser';

// allow connect to redux
import { connect } from 'react-redux';
// bind actions to components
import { bindActionCreators } from 'redux';


import styles from '../../styles/homeStyle';

const Home = () => {

    // const [currentUser, setCurrentUser] = useState(store.userState.currentUser);

    // componentDidMount()
    useEffect(() => {
        fetchUser();
    });

    return (
        <View style={styles.homeContainer}>
            <Text style={styles.title}> This is home!</Text>
        </View>
    );
}

const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser
});

// bind component to redux
const mapDispatchProps = (dispatch) => bindActionCreators({fetchUser}, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(Home);