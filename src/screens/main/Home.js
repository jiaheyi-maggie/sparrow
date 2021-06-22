import React  from 'react';
import { Component } from 'react';
import { Text, SafeAreaView } from 'react-native';

import { fetchUser } from '../../app/actions/fetchUser';

// allow connect to redux
import { connect } from 'react-redux';
// bind actions to components
import { bindActionCreators } from 'redux';

import styles from '../../styles/homeStyle';
import store from '../../app/store';


export class Home extends Component {

    constructor(props) {
        super(props);

        this.state ={
            categories: [],
            longTerm: 0,
            shortTerm: 0
        }

        // redux store listener
        store.subscribe(() => {
            this.setState({
                categories: store.getState().reducer,
                longTerm: store.getState().longTerm,
                shortTerm: store.getState().shortTerm
            })
        })
    }

    componentDidMount() {
        this.props.fetchUser();
    }

    handleComponentDidMount(currentUser) {
        if (currentUser) {
            console.log(currentUser);
            return (
                <SafeAreaView style={styles.homeContainer}>
                    <Text style={styles.title}>Hello, {currentUser.firstName}</Text>
                    {/* TODO: access longTerm from store */}
                    <Text style={styles.subtitle}>Current {this.state.shortTerm[1]}ly budget: ${this.state.shortTerm[0]} </Text>
                    <Text style={styles.subtitle}>Current {this.state.longTerm[1]}ly budget: ${this.state.longTerm[0]} </Text>
                </SafeAreaView>
            );
        } else {
            return (
                <SafeAreaView style={styles.homeContainer}>
                    <Text style={styles.subtitle}> User does not exist </Text>
                </SafeAreaView>
            );
        }
    }

    render() {
        const { currentUser } = this.props;

        return(
            this.handleComponentDidMount(currentUser)
        );
    }
}

// allow access to data in Home component
const mapStateToProps = (store) => ({
    currentUser: store.user.currentUser
});

// bind component to redux
const mapDispatchProps = (dispatch) => bindActionCreators({ fetchUser }, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(Home);