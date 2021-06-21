import React, { useState, useEffect } from 'react';
import { Component } from 'react';
import { Alert, Text, View, SafeAreaView } from 'react-native';

import store from '../../app/store';
import { fetchUser } from '../../app/actions/fetchUser';

// allow connect to redux
import { connect } from 'react-redux';
// bind actions to components
import { bindActionCreators } from 'redux';

import styles from '../../styles/homeStyle';

// const Home = () => {

//     const [currentUser, setCurrentUser] = useState(null);

//     // componentDidMount(): an async function
//     useEffect(() => {
//         fetchUser();
//     });
    

//     const handleComponentDidMount = () => {
//         if (currentUser) {
//             return (
//                 <SafeAreaView style={styles.homeContainer}>
//                     <Text style={styles.title}> Hello, {currentUser.firstName}</Text>
//                 </SafeAreaView>
//             );
//         } else {
//             return (
//                 Alert.alert("Current user is undefined!")
//             );
//         }
//     }

//     return (
//         handleComponentDidMount()
//     );
// }

export class Home extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    handleComponentDidMount(currentUser) {
        if (currentUser) {
            return (
                <SafeAreaView style={styles.homeContainer}>
                    <Text style={styles.title}> Hello, {currentUser}</Text>
                </SafeAreaView>
            );
        } else {
            return (
                <SafeAreaView style={styles.homeContainer}>
                    <Text style={styles.title}> User does not exist in database</Text>
                </SafeAreaView>
            );
        }
    }

    render() {
        const { currentUser } = this.props;

        return(
            this.handleComponentDidMount(currentUser)
        )
    }
}

// allow access to data in Home component
const mapStateToProps = (store) => ({
    currentUser: store.user
});

// bind component to redux
const mapDispatchProps = (dispatch) => bindActionCreators({ fetchUser }, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(Home);