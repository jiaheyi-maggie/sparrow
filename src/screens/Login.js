// a class component for Login (replace SignUp later)
import React, { Component } from 'react';
import { View, Button, TextInput, TouchableOpacity, Text, SafeAreaView, Image } from 'react-native';
import firebase from 'firebase';
import componentStyle from '../styles/componentStyle';
import styles from '../styles/onboardingStyle';

export default class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }

        // allow onSignUp() to access the state of the class
        this.onSignUp = this.onSignIn.bind(this);
    }

    // implement firebase logic here
    onSignIn() {
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((result) => {
                console.log(result);
                // TODO: navigate to home (login successful)
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
                    }}>Sign In </Text>
                    <Text style={{      
                        color: '#E76F51',
                        fontWeight: 'bold',
                        textAlign: 'left',
                        fontSize: 22,
                        paddingVertical: 5
                        }}>Welcome back! </Text>
                </View>
                
                {/* logo */}
                <Image 
                    source={require('../assets/icon-transparent.png')} 
                    resizeMode='contain'
                    style={
                        {
                            alignSelf: 'center',
                            width: 250,
                            height: 250
                        }
                    }
                />

                <View style={{
                    flexDirection: 'column', 
                    marginBottom: 20
                    }}>
                    
                    {/* TODO: when tap, fit the textfield where users can see it */}
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
                        placeholder='Email'
                        onChangeText={(email) => this.setState({ email })}
                        style={componentStyle.infofield}
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
                        placeholder='Password'
                        onChangeText={(password) => this.setState({ password })}
                        style={componentStyle.infofield}
                    />

                </View>

                <View style={{width: 400, height: 65}}><Text></Text></View>

                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => this.onSignIn()}
                >
                    <Text style={styles.buttonText}> Log In </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('register')}
                >
                    <Text style={componentStyle.buttonText}> Create an account </Text>
                </TouchableOpacity>
                
            </SafeAreaView>
        )
    }
}
