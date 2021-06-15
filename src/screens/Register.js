// a class component for Register (replace SignUp later)
import React, { Component } from 'react';
import { View, Button, TextInput, TouchableOpacity, Text, SafeAreaView } from 'react-native';
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
        }

        // allow onSignUp() to access the state of the class
        this.onSignUp = this.onSignUp.bind(this);
    }

    // implement firebase logic here
    onSignUp() {
        const { firstName, lastName, username, email, password } = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((result) => {

            })
            .catch((error) => {
                console.log(error);
            })

    }

    render() {
        return (
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
                    <Text style={componentStyle.infofieldtitle}>First Name</Text>
                    <TextInput
                        placeholder='John'
                        onChangeText={(firstName) => this.setState({ firstName })}
                        style={componentStyle.infofield}
                    />

                    <Text style={componentStyle.infofieldtitle}>Last Name</Text>
                    <TextInput
                        placeholder='Doe'
                        onChangeText={(lastName) => this.setState({ lastName })}
                        style={componentStyle.infofield}
                    />

                    <Text style={componentStyle.infofieldtitle}>Username</Text>
                    <TextInput
                        placeholder='john.doe07'
                        onChangeText={(username) => this.setState({ username })}
                        style={componentStyle.infofield}
                    />

                    <Text style={componentStyle.infofieldtitle}>Email</Text>
                    <TextInput
                        placeholder='johndoe@gmail.com'
                        onChangeText={(email) => this.setState({ email })}
                        style={componentStyle.infofield}
                    />

                    <Text style={componentStyle.infofieldtitle}>Password</Text>
                    <TextInput
                        placeholder='1234567890'
                        onChangeText={(password) => this.setState({ password })}
                        style={componentStyle.infofield}
                    />
                </View>

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
        )
    }
}
