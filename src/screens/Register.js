// a class component for Register (replace SignUp later)
import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, Text, SafeAreaView, Image, Alert, ScrollView } from 'react-native';

import store from '../app/store';

import firebase from 'firebase';

import componentStyle from '../styles/componentStyle';
import styles from '../styles/onboardingStyle';

export default class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: '',
            budgetInfo: []
        }

        // allow onSignUp() to access the state of the class
        this.onSignUp = this.onSignUp.bind(this);
        this.sendBudgetInfoToFirestore = this.sendBudgetInfoToFirestore.bind(this);
    }

    // Handles firebase authentication and Firestore 
    onSignUp() {
        const { firstName, lastName, username, email, password } = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredentials) => {
                const currUserID = firebase.auth().currentUser.uid;
                firebase.firestore().collection("users")
                    .doc(currUserID)
                    .set({
                        firstName: firstName,
                        lastName: lastName,
                        username: username,
                        email: email,
                    })
                // console.log(userCredentials);
                // this.sendBudgetInfoToFirestore();
            })
            .catch((error) => {
                Alert.alert(
                    'Registration Failed :((',
                    error.message,
                    [
                        { text: "Try Again" }
                    ],
                    { cancelable: true }
                )
            })
    }

    // sendBudgetInfoToFirestore() {
    //     this.budgetInfo = [store.reducer, store.longTerm, store.shortTerm];
    //     console.log(this.budgetInfo);
    // }

    render() {
        return (
            <ScrollView>
                <SafeAreaView style={{
                    backgroundColor: '#FFF4CB',
                    flexDirection: 'column',
                    flex: 1,
                    padding: 20
                }}>
                    <View style={{marginTop: 40, marginBottom: 15}}> 
                        <Text style={{
                            color: '#264653',
                            fontWeight: 'bold',
                            fontSize: 50,
                            textAlign: 'left',
                            marginTop: 20
                        }}>Sign Up </Text>
                    </View>

                    <View style={{
                        flexDirection: 'column', 
                        marginBottom: 20
                        }}>

                        {/* First Name */}
                        <View style={{
                            flexDirection: 'row', 
                            justifyContent: 'flex-start',
                            alignItems: 'center'
                        }}> 
                            <Image 
                                source={require('../assets/Icons/first-name.png')} 
                                resizeMode='contain'
                                style={{
                                    width: 20,
                                    height: 30,
                                    marginTop: 10,
                                    marginRight: 5,
                                    tintColor: "#7E9181"
                                }}
                            />
                            <Text style={componentStyle.infofieldtitle}>First Name</Text>
                        </View>
                        <TextInput
                            returnKeyType="next"
                            autoCompleteType='name'
                            enablesReturnKeyAutomatically={true}
                            autoFocus={true}
                            onSubmitEditing={() => {this.lastName.focus();}}
                            blurOnSubmit={false}
                            value={this.state.firstName}
                            placeholder='John'
                            onChangeText={(firstName) => this.setState({ firstName })}
                            style={componentStyle.infofield}
                        />

                        {/* Last Name */}
                        <View style={{
                            flexDirection: 'row', 
                            justifyContent: 'flex-start',
                            alignItems: 'center'
                        }}> 
                            <Image 
                                source={require('../assets/Icons/last-name.png')} 
                                resizeMode='contain'
                                style={{
                                    width: 20,
                                    height: 30,
                                    marginTop: 10,
                                    marginRight: 5,
                                    tintColor: "#7E9181"
                                }}
                            />
                            <Text style={componentStyle.infofieldtitle}>Last Name</Text>
                        </View>
                        <TextInput
                            ref={(input) => {this.lastName = input;}}
                            onSubmitEditing={() => {this.username.focus();}}
                            blurOnSubmit={false}
                            returnKeyType="next"
                            autoCompleteType='name'
                            enablesReturnKeyAutomatically={true}
                            autoFocus={true}
                            value={this.state.lastName}
                            placeholder='Doe'
                            onChangeText={(lastName) => this.setState({ lastName })}
                            style={componentStyle.infofield}
                        />


                        {/* Username */}
                        <View style={{
                            flexDirection: 'row', 
                            justifyContent: 'flex-start',
                            alignItems: 'center'
                        }}> 
                            <Image 
                                source={require('../assets/Icons/at.png')} 
                                resizeMode='contain'
                                style={{
                                    width: 20,
                                    height: 30,
                                    marginTop: 10,
                                    marginRight: 5,
                                    tintColor: "#7E9181"
                                }}
                            />
                            <Text style={componentStyle.infofieldtitle}>Username</Text>
                        </View>
                        <TextInput
                            ref={(input) => {this.username = input;}}
                            onSubmitEditing={() => {this.email.focus();}}
                            blurOnSubmit={false}
                            returnKeyType="next"
                            autoCompleteType='name'
                            enablesReturnKeyAutomatically={true}
                            autoFocus={true}
                            value={this.state.username}
                            placeholder='john.doe07'
                            onChangeText={(username) => this.setState({ username })}
                            style={componentStyle.infofield}
                        />

                        {/* Email */}
                        <View style={{
                            flexDirection: 'row', 
                            justifyContent: 'flex-start',
                            alignItems: 'center'
                        }}> 
                            <Image 
                                source={require('../assets/Icons/email.png')} 
                                resizeMode='contain'
                                style={{
                                    width: 20,
                                    height: 30,
                                    marginTop: 10,
                                    marginRight: 5,
                                    tintColor: "#7E9181"
                                }}
                            />
                            <Text style={componentStyle.infofieldtitle}>Email</Text>
                        </View>
                        <TextInput
                            ref={(input) => {this.email = input;}}
                            onSubmitEditing={() => {this.password.focus();}}
                            blurOnSubmit={false}
                            returnKeyType="next"
                            enablesReturnKeyAutomatically={true}
                            autoFocus={true}
                            value={this.state.email}
                            placeholder='johndoe@gmail.com'
                            onChangeText={(email) => this.setState({ email })}
                            style={componentStyle.infofield}
                            keyboardType="email-address"
                        />

                        {/* Password */}
                        <View style={{
                            flexDirection: 'row', 
                            justifyContent: 'flex-start',
                            alignItems: 'center'
                        }}> 
                            <Image 
                                source={require('../assets/Icons/password.png')} 
                                resizeMode='contain'
                                style={{
                                    width: 20,
                                    height: 30,
                                    marginTop: 10,
                                    marginRight: 5,
                                    tintColor: "#7E9181"
                                }}
                            />
                            <Text style={componentStyle.infofieldtitle}>Password</Text>
                        </View>
                        <TextInput
                            ref={(input) => {this.password = input;}}
                            // blurOnSubmit={false}
                            returnKeyType="done"
                            enablesReturnKeyAutomatically={true}
                            autoFocus={true}
                            value={this.state.password}
                            placeholder='1234567890'
                            onChangeText={(password) => this.setState({ password })}
                            style={componentStyle.infofield}
                        />
                    </View>

                    <View style={{width: 390, height: 80}}><Text></Text></View>

                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={() => this.onSignUp()}
                    >
                        <Text style={styles.buttonText}> Register </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('signin')}
                    >
                        <Text style={componentStyle.buttonText}> I already have an account </Text>
                    </TouchableOpacity>
                    
                </SafeAreaView>
            </ScrollView>
        )
    }
}
