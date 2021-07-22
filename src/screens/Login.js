// a class component for Login (replace SignUp later)
import React, { Component, useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, SafeAreaView, Image, ScrollView, Platform, KeyboardAvoidingView } from 'react-native';
import firebase from 'firebase';
import { GoogleAuthProvider, getAuth, signInWithRedirect } from 'firebase/auth';
import store from '../app/store';
import componentStyle from '../styles/componentStyle';
import styles from '../styles/onboardingStyle';
import * as Google from 'expo-google-app-auth';
import { COLORS, FONTS } from '../constants/theme';
// import { withNavigation } from 'react-navigation';

export default class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            categories: [],
            longTerm: 0,
            shortTerm:0,
            error: ''
        }

        // redux store listener
        store.subscribe(() => {
            this.setState({
                categories: store.getState().reducer,
                longTerm: store.getState().longTerm,
                shortTerm: store.getState().shortTerm
            })
        })

        // allow onSignUp() to access the state of the class
        this.onSignIn = this.onSignIn.bind(this);
        this.onGoogleSignIn = this.onGoogleSignIn.bind(this);
    }

    // implement firebase logic here
    onSignIn() {
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((result) => {
                console.log(result);
                // TODO: navigate to home (login successful)
                // store.dispatch({type: "userSignedOut"})
                this.props.navigation.navigate('Home');
            })
            .catch((err) => {
                this.setState({error: "Email or password incorrect. Try again."});
            })
    }

    onGoogleSignIn = async () => {
        try {
            const { type, user } = await Google.logInAsync({
                iosClientId: '212971842173-vdn2cj4buc684stiff15q0vr8ffj1nk1.apps.googleusercontent.com',
                androidClientId: '212971842173-raoqg5tjqrljdak9e8seklm6h09fu125.apps.googleusercontent.com'
            });

            if (type === 'success') {
                // use google rest api
                this.props.navigation.navigate('Home');
            } else {
                this.setState({error: error})
            }
        } catch (error) {
            this.setState({error: error});
        }
    }

    render() {
        switch (Platform.OS) {
            case 'ios':
                return (
                    <KeyboardAvoidingView style={[styles.container, {justifyContent: 'flex-start'}]} behavior='height'> 
                        <ScrollView>
                            <View style={{alignItems: 'center', flexDirection: 'column'}}>
                                {/* logo */}
                                <Image 
                                    source={require('../assets/icon-transparent.png')} 
                                    resizeMode='contain'
                                    style={
                                        {
                                            alignSelf: 'center',
                                            width: 150,
                                            height: 150,
                                            marginTop: 60,
                                            marginBottom: 20
                                        }
                                    }
                                />
                                <Text style={{fontSize: 20, fontWeight: 'bold', color:'#2A94AF', marginBottom: 40}}>SPARROW</Text>
                                <Text style={[styles.subtitle, {fontSize: 13}]}>{this.state.error}</Text>
                            </View>

                            {/* Title */}
                            <View style={{ marginBottom: 15}}> 
                                <Text style={styles.title}>Sign In </Text>
                                <Text style={styles.subtitle}>Welcome back! </Text>
                            </View>

                            <View style={{backgroundColor: "#2a94af", borderRadius: 20, padding: 10}}>
                                
                                <View style={{flexDirection: 'column', marginBottom: 20}}>

                                    {/* Email */}
                                    <View style={{flexDirection: 'row', justifyContent: 'flex-start',alignItems: 'center'}}> 
                                        <Image 
                                            source={require('../assets/Icons/email.png')} 
                                            resizeMode='contain'
                                            style={componentStyle.infoIcon}
                                        />
                                        <Text style={componentStyle.infofieldtitle}>Email</Text>
                                    </View>

                                    <TextInput
                                        placeholder='Email'
                                        onChangeText={(email) => this.setState({ email })}
                                        style={componentStyle.infofield}
                                    />
            
                                    {/* Password */}
                                    <View style={{flexDirection: 'row', justifyContent: 'flex-start',alignItems: 'center'}}> 
                                        <Image 
                                            source={require('../assets/Icons/password.png')} 
                                            resizeMode='contain'
                                            style={componentStyle.infoIcon}
                                        />
                                        <Text style={componentStyle.infofieldtitle}>Password</Text>
                                    </View>  
                                    <TextInput
                                        placeholder='Password'
                                        onChangeText={(password) => this.setState({ password })}
                                        style={componentStyle.infofield}
                                        secureTextEntry={true}
                                    />
            
                                </View>

                                <TouchableOpacity style={{alignItems: 'flex-end'}} onPress={() => this.props.navigation.navigate('forgot')}>
                                    <Text style={{color: '#FFF4CB'}}>Forgot Password</Text>
                                </TouchableOpacity>
            
                                <TouchableOpacity style={styles.buttonContainer} onPress={() => this.onSignIn()}>
                                    <Text style={styles.buttonText}> Log In </Text>
                                </TouchableOpacity>
            
                                <TouchableOpacity style={{margin: 10}} onPress={() => this.props.navigation.navigate('register')}>
                                    <Text style={[componentStyle.buttonText,{color: '#fff'}]}> Create an account </Text>
                                </TouchableOpacity>

                                <View style={{borderBottomColor: 'white',borderBottomWidth: 1}}/>

                                <TouchableOpacity onPress={() => this.onGoogleSignIn()}>
                                    <View style={{flexDirection: 'row', alignItems: 'center', padding: 5}}> 
                                        <Image 
                                            source={require('../assets/onboarding/btn_google_light_ios.png')}
                                            style={{width: 50, height: 50, marginRight: 5}}
                                        />
                                        <Text style={[componentStyle.buttonText,{color: COLORS.lightGray4}]}>Sign In with Google </Text>
                                    </View>
                                </TouchableOpacity>

                            </View>
                        </ScrollView>
                    </KeyboardAvoidingView>
                );
            case "android":
                return (
                    <SafeAreaView style={styles.container}>
                        <ScrollView>
                            <View style={{alignItems: 'center', flexDirection: 'column'}}>
                                {/* logo */}
                                <Image 
                                    source={require('../assets/icon-transparent.png')} 
                                    resizeMode='contain'
                                    style={{
                                        alignSelf: 'center',
                                        width: 150,
                                        height: 150,
                                        marginBottom: 10
                                        }}
                                />
                                <Text style={{fontSize: 20, fontWeight: 'bold', color:'#2A94AF', marginBottom: 20}}>SPARROW</Text>
                                <Text style={[styles.subtitle, {fontSize: 13}]}>{this.state.error}</Text>
                            </View>

                            {/* Title */}
                            <View style={{ marginBottom: 5}}> 
                                <Text style={styles.title}>Sign In </Text>
                                <Text style={styles.subtitle}>Welcome back! </Text>
                            </View>

                            <View style={{backgroundColor: "#2a94af", borderRadius: 20, padding: 10}}>
                                
                                <View style={{flexDirection: 'column', marginBottom: 20}}>

                                    {/* Email */}
                                    <View style={{flexDirection: 'row', justifyContent: 'flex-start',alignItems: 'center'}}> 
                                        <Image 
                                            source={require('../assets/Icons/email.png')} 
                                            resizeMode='contain'
                                            style={componentStyle.infoIcon}
                                        />
                                        <Text style={componentStyle.infofieldtitle}>Email</Text>
                                    </View>

                                    <TextInput
                                        placeholder='Email'
                                        onChangeText={(email) => this.setState({ email })}
                                        style={componentStyle.infofield}
                                        keyboardType='email-address'
                                    />
            
                                    {/* Password */}
                                    <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}> 
                                        <Image 
                                            source={require('../assets/Icons/password.png')} 
                                            resizeMode='contain'
                                            style={componentStyle.infoIcon}
                                        />
                                        <Text style={componentStyle.infofieldtitle}>Password</Text>
                                    </View>  
                                    <TextInput
                                        placeholder='Password'
                                        onChangeText={(password) => this.setState({ password })}
                                        style={componentStyle.infofield}
                                        secureTextEntry={true}
                                    />
            
                                </View>
            
                                <TouchableOpacity style={{alignItems: 'flex-end'}} onPress={() => this.props.navigation.navigate('forgot')}>
                                    <Text style={{color: '#FFF4CB'}}>Forgot Password</Text>
                                </TouchableOpacity>
            
                                <TouchableOpacity style={styles.buttonContainer} onPress={() => this.onSignIn()}>
                                    <Text style={styles.buttonText}> Log In </Text>
                                </TouchableOpacity>
            
                                <TouchableOpacity style={{margin: 10}} onPress={() => this.props.navigation.navigate('register')}>
                                    <Text style={[componentStyle.buttonText,{color: '#fff'}]}> Create an account </Text>
                                </TouchableOpacity>

                                <View style={{borderBottomColor: 'white',borderBottomWidth: 1, marginBottom: 10}}/>

                                <TouchableOpacity style={{backgroundColor: '#fff', borderRadius: 5, elevation:2, width: 240, height: 50, alignSelf: 'center'}} onPress={() => this.onGoogleSignIn()}>
                                    <View style={{flexDirection: 'row', alignItems: 'center', padding: 5}}> 
                                        <Image 
                                            source={require('../assets/onboarding/btn_google_light_andriod.png')}
                                            style={{width: 40, height: 40, marginRight: 24, marginLeft: 8}}
                                        />
                                        <Text style={{fontSize: 14, fontWeight: 'bold',color: "#757575",alignSelf: "center",textTransform: "uppercase"}}>Sign In with Google </Text>
                                    </View>
                                </TouchableOpacity>

                            </View>
                        </ScrollView>
                    </SafeAreaView>
                );

        }

    }
};

