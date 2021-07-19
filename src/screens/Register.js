// a class component for Register (replace SignUp later)
import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, Text, SafeAreaView, Image, Alert, ScrollView, Platform, KeyboardAvoidingView } from 'react-native';
import store from '../app/store';
import firebase from 'firebase';
import componentStyle from '../styles/componentStyle';
import styles from '../styles/onboardingStyle';

// export default class Register extends Component {
export default class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: ''
        }

        // allow onSignUp() to access the state of the class
        this.onSignUp = this.onSignUp.bind(this);
    }

    // Handles firebase authentication and Firestore 
    onSignUp() {
        const { firstName, lastName, username, email, password } = this.state;
        const filteredCategories = store.getState().reducer.filter((obj) => {return obj.checked == true});
        var finalCategories = filteredCategories;
        for (var i = 0; i < filteredCategories.length; i++) {
            finalCategories[i].id = `${i}`;
        };

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
                        photoURL: ''
                    })
                
                // add store data
                firebase.firestore().collection("budgets")
                    .doc(currUserID)
                    .set({
                        // categories: store.getState().reducer,
                        categories: finalCategories,
                        longTerm: store.getState().longTerm,
                        shortTerm: store.getState().shortTerm
                    })
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


    render() {
        switch (Platform.OS) {
            case "ios" :
                return (
                    <KeyboardAvoidingView style={styles.container} behavior='padding'>
                        <ScrollView style={{marginTop: 40}}>
                            {/* Title */}
                            <Text style={styles.title}>Sign Up </Text>
                            <Text style={styles.subtitle}>Create an account to manage your budgets in detail and interact with bank accounts.</Text>
                            <View style={{backgroundColor: "#2a94af", borderRadius: 20, padding: 10}}>
                                <View style={{flexDirection: 'column', marginBottom: 20}}>
                                    {/* First Name */}
                                    <View style={styles.signupTitle}> 
                                        <Image 
                                            source={require('../assets/Icons/profile.png')} 
                                            resizeMode='contain'
                                            style={componentStyle.infoIcon}
                                        />
                                        <Text style={componentStyle.infofieldtitle}>First Name</Text>
                                    </View>
                                    <TextInput
                                        returnKeyType="next"
                                        autoCompleteType='name'
                                        enablesReturnKeyAutomatically={true}
                                        onSubmitEditing={() => {this.lastName.focus();}}
                                        value={this.state.firstName}
                                        placeholder='John'
                                        onChangeText={(firstName) => this.setState({ firstName })}
                                        style={componentStyle.infofield}
                                    />
            
                                    {/* Last Name */}
                                    <View style={styles.signupTitle}> 
                                        <Image 
                                            source={require('../assets/Icons/profile.png')} 
                                            resizeMode='contain'
                                            style={componentStyle.infoIcon}
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
                                        value={this.state.lastName}
                                        placeholder='Doe'
                                        onChangeText={(lastName) => this.setState({ lastName })}
                                        style={componentStyle.infofield}
                                    />
            
            
                                    {/* Username */}
                                    <View style={styles.signupTitle}> 
                                        <Image 
                                            source={require('../assets/Icons/at.png')} 
                                            resizeMode='contain'
                                            style={componentStyle.infoIcon}
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
                                        value={this.state.username}
                                        placeholder='john.doe07'
                                        onChangeText={(username) => this.setState({ username })}
                                        style={componentStyle.infofield}
                                    />
            
                                    {/* Email */}
                                    <View style={styles.signupTitle}> 
                                        <Image 
                                            source={require('../assets/Icons/email.png')} 
                                            resizeMode='contain'
                                            style={componentStyle.infoIcon}
                                        />
                                        <Text style={componentStyle.infofieldtitle}>Email</Text>
                                    </View>
                                    <TextInput
                                        ref={(input) => {this.email = input;}}
                                        onSubmitEditing={() => {this.password.focus();}}
                                        blurOnSubmit={false}
                                        returnKeyType="next"
                                        enablesReturnKeyAutomatically={true}
                                        value={this.state.email}
                                        placeholder='johndoe@gmail.com'
                                        onChangeText={(email) => this.setState({ email })}
                                        style={componentStyle.infofield}
                                        keyboardType="email-address"
                                    />
            
                                    {/* Password */}
                                    <View style={styles.signupTitle}> 
                                        <Image 
                                            source={require('../assets/Icons/password.png')} 
                                            resizeMode='contain'
                                            style={componentStyle.infoIcon}
                                        />
                                        <Text style={componentStyle.infofieldtitle}>Password</Text>
                                    </View>
                                    <TextInput
                                        ref={(input) => {this.password = input;}}
                                        // blurOnSubmit={false}
                                        returnKeyType="done"
                                        enablesReturnKeyAutomatically={true}
                                        value={this.state.password}
                                        placeholder='A secure password'
                                        onChangeText={(password) => this.setState({ password })}
                                        style={componentStyle.infofield}
                                        secureTextEntry={true}
                                    />
                                </View>
        
        
                                <View style={{paddingVertical: 10}}>
                                    <TouchableOpacity style={styles.buttonContainer} onPress={() => this.onSignUp()}>
                                        <Text style={styles.buttonText}> Register </Text>
                                    </TouchableOpacity>
            
                                    <TouchableOpacity style={{margin: 10}} onPress={() => this.props.navigation.navigate('signin')}>
                                        <Text style={[componentStyle.buttonText, {color: "#fff"}]}> I already have an account </Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={{borderBottomColor: 'white',borderBottomWidth: 1}}/>
                            </View>
                        </ScrollView>
                    </KeyboardAvoidingView>
                );
            
            case "android":
                return (
                    <ScrollView style={{marginTop: 50, marginHorizontal: 10}}>
                        {/* Title */}
                        <Text style={styles.title}>Sign Up </Text>
                        <Text style={styles.subtitle}>Create an account to manage your budgets in detail and interact with bank accounts.</Text>
                        <View style={{backgroundColor: "#2a94af", borderRadius: 20, padding: 10}}>
                            <View style={{flexDirection: 'column', marginBottom: 20}}>
                                {/* First Name */}
                                <View style={styles.signupTitle}> 
                                    <Image 
                                        source={require('../assets/Icons/profile.png')} 
                                        resizeMode='contain'
                                        style={componentStyle.infoIcon}
                                    />
                                    <Text style={componentStyle.infofieldtitle}>First Name</Text>
                                </View>
                                <TextInput
                                    returnKeyType="next"
                                    autoCompleteType='name'
                                    enablesReturnKeyAutomatically={true}
                                    onSubmitEditing={() => {this.lastName.focus();}}
                                    value={this.state.firstName}
                                    placeholder='John'
                                    onChangeText={(firstName) => this.setState({ firstName })}
                                    style={componentStyle.infofield}
                                />
        
                                {/* Last Name */}
                                <View style={styles.signupTitle}> 
                                    <Image 
                                        source={require('../assets/Icons/profile.png')} 
                                        resizeMode='contain'
                                        style={componentStyle.infoIcon}
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
                                    value={this.state.lastName}
                                    placeholder='Doe'
                                    onChangeText={(lastName) => this.setState({ lastName })}
                                    style={componentStyle.infofield}
                                />
        
        
                                {/* Username */}
                                <View style={styles.signupTitle}> 
                                    <Image 
                                        source={require('../assets/Icons/at.png')} 
                                        resizeMode='contain'
                                        style={componentStyle.infoIcon}
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
                                    value={this.state.username}
                                    placeholder='john.doe07'
                                    onChangeText={(username) => this.setState({ username })}
                                    style={componentStyle.infofield}
                                />
        
                                {/* Email */}
                                <View style={styles.signupTitle}> 
                                    <Image 
                                        source={require('../assets/Icons/email.png')} 
                                        resizeMode='contain'
                                        style={componentStyle.infoIcon}
                                    />
                                    <Text style={componentStyle.infofieldtitle}>Email</Text>
                                </View>
                                <TextInput
                                    ref={(input) => {this.email = input;}}
                                    onSubmitEditing={() => {this.password.focus();}}
                                    blurOnSubmit={false}
                                    returnKeyType="next"
                                    enablesReturnKeyAutomatically={true}
                                    value={this.state.email}
                                    placeholder='johndoe@gmail.com'
                                    onChangeText={(email) => this.setState({ email })}
                                    style={componentStyle.infofield}
                                    keyboardType="email-address"
                                />
        
                                {/* Password */}
                                <View style={styles.signupTitle}> 
                                    <Image 
                                        source={require('../assets/Icons/password.png')} 
                                        resizeMode='contain'
                                        style={componentStyle.infoIcon}
                                    />
                                    <Text style={componentStyle.infofieldtitle}>Password</Text>
                                </View>
                                <TextInput
                                    ref={(input) => {this.password = input;}}
                                    returnKeyType="done"
                                    enablesReturnKeyAutomatically={true}
                                    value={this.state.password}
                                    placeholder='A secure password'
                                    onChangeText={(password) => this.setState({ password })}
                                    style={componentStyle.infofield}
                                    secureTextEntry={true}
                                />
                            </View>
    
    
                            <View style={{paddingVertical: 10}}>
                                <TouchableOpacity style={styles.buttonContainer} onPress={() => this.onSignUp()}>
                                    <Text style={styles.buttonText}> Register </Text>
                                </TouchableOpacity>
        
                                <TouchableOpacity style={{margin: 10}} onPress={() => this.props.navigation.navigate('signin')}>
                                    <Text style={[componentStyle.buttonText, {color: "#fff"}]}> I already have an account </Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{borderBottomColor: 'white',borderBottomWidth: 1}}/>
                        </View>
                    </ScrollView>
                );

        }
        
    }
};