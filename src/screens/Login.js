// a class component for Login (replace SignUp later)
import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, Text, SafeAreaView, Image, ScrollView, Platform, KeyboardAvoidingView } from 'react-native';
import firebase from 'firebase';
import store from '../app/store';
import componentStyle from '../styles/componentStyle';
import styles from '../styles/onboardingStyle';
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
    }

    // implement firebase logic here
    onSignIn() {
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((result) => {
                console.log(result);
                // TODO: navigate to home (login successful)
                // store.dispatch({type: "userSignedOut"})
            })
            .catch((err) => {
                this.setState({error: "Email or password incorrect. Try again."});
            })
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
                                        marginTop: 40,
                                        marginBottom: 20
                                        }}
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
                                        keyboardType='email-address'
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

                            </View>
                        </ScrollView>
                    </SafeAreaView>
                );

        }

    }
};

