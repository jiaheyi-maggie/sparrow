import React, { Component }  from 'react';
import { Text, SafeAreaView, View, ScrollView, TouchableOpacity, Pressable, Image, Alert } from 'react-native';

import { fetchUser } from '../../app/actions/fetchUser';
import { fetchBudget } from '../../app/actions/fetchBudget';
import firebase from 'firebase';

// allow connect to redux
import { connect } from 'react-redux';
// bind actions to components
import { bindActionCreators } from 'redux';

import { withNavigation } from 'react-navigation';

import styles from '../../styles/homeStyle';



export class Home extends Component {

    // constructor(props) {
    //     super(props);

    //     this.state ={
    //         categories: [],
    //         longTerm: 0,
    //         shortTerm: 0
    //     }

        // redux store listener
        // store.subscribe(() => {
        //     this.setState({
        //         categories: store.getState().reducer,
        //         longTerm: store.getState().longTerm,
        //         shortTerm: store.getState().shortTerm
        //     })
        // })
    // }

    componentDidMount() {
        this.props.fetchUser();
        this.props.fetchBudget();
    }

    signOutUser = async () => {
        try {
            await firebase.auth().signOut();
            Alert.alert('signed out');
            this.props.navigation.navigate('signin');
        } catch (error) {
            console.log(error);
        }
    }

    handleComponentDidMount(currentUser, categories, shortTerm, longTerm) {
        if (currentUser) {
            const monthNames = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            ];

            const d = new Date();
            const m = monthNames[d.getMonth()];
            const y = d.getFullYear();

            return (
                <SafeAreaView style={styles.homeContainer}>
                    <ScrollView>
                        <View style={{
                            flexDirection: 'row', 
                            justifyContent:'space-between',
                            alignItems: 'baseline'
                        }}>
                            
                            
                            {/* Profile */}
                            <TouchableOpacity onPress={() => this.props.navigation.navigate("Settings")}>
                                <Image 
                                    source={require('../../assets/Icons/profile-user.png')}
                                    resizeMode='contain'
                                    style={{
                                        width: 27,
                                        height: 27,
                                        tintColor: '#7E9181',
                                        marginLeft: 15
                                    }}
                                />
                            </TouchableOpacity>

                            {/* Display name */}
                            <Text style={styles.title}>Hi, {currentUser.firstName}</Text>
                                                            
                                                            
                            {/* Menu */}
                            <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                                <Image 
                                    source={require('../../assets/Icons/menu.png')}
                                    resizeMode='contain'
                                    style={{
                                        width: 23,
                                        height: 23,
                                        tintColor: '#7E9181',
                                        marginRight: 15
                                    }}
                                />
                            </TouchableOpacity>

                        </View>

                        {/* budget overview card */}
                        <Pressable 
                            style={({ pressed }) => [
                                {
                                    backgroundColor: pressed ? 'aliceblue' : 'white',
                                    borderRadius: 20,
                                    padding: 10,
                                    elevation: 2,
                                    margin: 10
                                }
                            ]} 
                            onPress={()=>{this.props.navigation.navigate("Average Budget")} 
                        }>
                            {/* Short Term */}
                            <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
                                <Text style={styles.subtitle}>{m} budget:</Text>
                                <Text style={styles.number}>$ {shortTerm[0]}</Text>
                            </View>

                            {/* Long Term */}
                            <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
                                <Text style={styles.subtitle}>{y} budget:</Text>
                                <Text style={styles.number}>$ {longTerm[0]}</Text>
                            </View>

                            {/* View Details */}
                            <View style={styles.statusContainer}>
                                <Text style={{color: '#706993',fontSize: 17,marginHorizontal: 20, fontWeight: 'bold'}}>View Details</Text> 
                            </View>
                        </Pressable>

                        {/* TODO: Add Bar graph for actual spending */}


                    </ScrollView>
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
        const { currentUser, categories, shortTerm, longTerm } = this.props;

        return(
            this.handleComponentDidMount(currentUser, categories, shortTerm, longTerm)
        );
    }
}

// allow access to data in Home component
const mapStateToProps = (store) => ({
    currentUser: store.user.currentUser,
    categories: store.user.categories,
    longTerm: store.user.longTerm,
    shortTerm: store.user.shortTerm
});

// bind component to redux
const mapDispatchProps = (dispatch) => bindActionCreators({ fetchUser, fetchBudget }, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(withNavigation(Home));