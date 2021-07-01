import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, Text, SafeAreaView, Image, ScrollView, Platform, KeyboardAvoidingView } from 'react-native';
import firebase from 'firebase';
import store from '../app/store';
import componentStyle from '../styles/componentStyle';
import styles from '../styles/onboardingStyle';

export default class ForgotCred extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            error: ''
        }

        this.handleForgotPassword = this.handleForgotPassword.bind(this);
    }


    handleForgotPassword = () =>  {
        firebase.auth().sendPasswordResetEmail(this.state.email)
        .then(() => {
            this.props.navigation.goBack()
        }).catch((err) => {
            this.setState({error: "Check your email address and try again."})
            console.log(err);
        })
    }

    render() {
        switch (Platform.OS) {
            case 'ios':
                return (
                    <KeyboardAvoidingView style={[styles.container, {justifyContent: 'flex-start'}]} behavior='height'> 
                        <ScrollView>
                            {/* Header */}
                            <View style={{flexDirection: 'row', justifyContent:'space-between',alignItems: 'baseline', marginTop: 40}}>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <TouchableOpacity style={styles.backButton} onPress={() => this.props.navigation.goBack()}>
                                        <Image 
                                            source={require('../assets/Icons/back.png')}
                                            resizeMode='contain'
                                            style={{
                                                width: 18,
                                                height: 18,
                                                tintColor: '#fff',
                                            }}
                                        />
                                    </TouchableOpacity>
                                    <Text style={styles.forwardButtonText}> Back </Text>
                                </View>
                            </View>

                            {/* Logo */}
                            <View style={{alignItems: 'center', flexDirection: 'column'}}>
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
                                <Text style={styles.title}>Forgot Password?</Text>
                                <Text style={styles.subtitle}>Don't worry. Enter your email address to reset password.</Text>
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
                                        keyboardType="email-address"
                                    />
                                </View>

                                <TouchableOpacity style={styles.buttonContainer} onPress={() => this.handleForgotPassword()}>
                                    <Text style={styles.buttonText}> Send E-mail Link </Text>
                                </TouchableOpacity>

                            </View>
                        </ScrollView>
                    </KeyboardAvoidingView>
                );
            case "android":
                return (
                    <SafeAreaView style={styles.container}>
                        <ScrollView>
                            {/* Header */}
                            <View style={{flexDirection: 'row', justifyContent:'space-between',alignItems: 'baseline'}}>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                                        <Image 
                                            source={require('../assets/Icons/back.png')}
                                            resizeMode='contain'
                                            style={{
                                                width: 18,
                                                height: 18,
                                                tintColor: '#fff',
                                            }}
                                        />
                                    </TouchableOpacity>
                                    <Text style={styles.forwardButtonText}> Back </Text>
                                </View>
                            </View>

                            {/* Logo */}
                            <View style={{alignItems: 'center', flexDirection: 'column'}}>
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
                                <Text style={styles.title}>Forgot Password?</Text>
                                <Text style={styles.subtitle}>Don't worry. Enter your email address to reset password.</Text>
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
                                </View>

                                <TouchableOpacity style={styles.buttonContainer} onPress={() => this.handleForgotPassword()}>
                                    <Text style={styles.buttonText}> Send E-mail Link </Text>
                                </TouchableOpacity>

                            </View>
                        </ScrollView>
                    </SafeAreaView>
                );

        }

    }
};