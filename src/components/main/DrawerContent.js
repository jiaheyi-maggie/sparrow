import React, { Component, useState, useEffect } from 'react';
import { View, Image, StyleSheet, SafeAreaView, Text } from 'react-native';
import firebase from 'firebase';
import { Avatar, Title, Caption, Drawer } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { withNavigation } from 'react-navigation';
import { COLORS, FONTS } from '../../constants/theme';
import { connect } from 'react-redux';
import store from '../../app/store';



export class DrawerContent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            username: '',
            isSignedOut: false,
            // BEWARE: this might cause problems when first login
            photoURL: '',
        }
 
        this.getUserName = this.getUserName.bind(this);
        this.handleSignOut = this.handleSignOut.bind(this);
        this.handleImageRendering = this.handleImageRendering.bind(this);
        this.handleRendering = this.handleRendering.bind(this);
    }

    getUserName = async () => {
        const firebaseUID = firebase.auth().currentUser.uid;
        firebase.firestore().collection("users").doc(firebaseUID).get()
        .then((doc) => {
            if (doc.exists) {
                var user = doc.data();
                this.setState({firstName: user.firstName, lastName: user.lastName, email: user.email, username: user.username, photoURL: user.photoURL})
            }
        }).catch((error) => {
            this.props.navigation.navigate("Login");
            console.log(error);
        })
    };

    componentDidMount() {
        this.getUserName();
    }

    handleSignOut() {
        this.setState({isSignedOut: true});
        firebase.auth().signOut()
        .then(() => {
            this.props.navigation.navigate("Login");
        }).catch((error) => {
            console.log(error.message);
        })
    };

    handleImageRendering = (image) => {
        if (image === "") {
            return (
                <Avatar.Image
                    source={require('../../assets/Icons/profile.png')}
                    size={60}
                />
            );
        } else {
            return (
                <Avatar.Image
                    source={{uri: image}}
                    size={60}
                />
            );
        }
    };

    handleRendering = () => {
        if (this.state.isSignedOut) {
            return (
                <SafeAreaView style={{flex: 1}}>
                    <Text style={styles.title}> You are signed out</Text>
                </SafeAreaView>
            );
        } else {
            return (
            <View style={{flex: 1}}> 
                <DrawerContentScrollView>
                    <View style={styles.drawerContent}>

                        <View style={styles.userInfoSection}>
                            <View style={{flexDirection:'row', marginTop: 15, alignItems: 'center', justifyContent: 'flex-start'}}>
                                {this.handleImageRendering(this.state.photoURL)}
                                <View style={{marginLeft: 15, flexDirection: 'column'}}>
                                    <Title style={{color: COLORS.primary, ...FONTS.h3}}> {this.state.firstName} {this.state.lastName} </Title>
                                    <Caption style={{color: COLORS.lightGray4, ...FONTS.h4}}> @{this.state.username}</Caption>
                                </View>
                            </View>
                        </View>


                        <Drawer.Section style={styles.drawerSection} title="Navigation">
                            <DrawerItem
                                label="Dashboard"
                                icon={() => {
                                    return (
                                        <Image 
                                        source={require('../../assets/Icons/home.png')}
                                        resizeMode='contain'
                                        style={{
                                            width: 23,
                                            height: 23,
                                            tintColor: '#7E9181',
                                        }}
                                        />
                                    );
                                }}
                                onPress={() => this.props.navigation.navigate("Home")}
                            />  

                            <DrawerItem
                                label="Average Budget"
                                icon={() => {
                                    return (
                                        <Image 
                                        source={require('../../assets/Icons/average-budget.png')}
                                        resizeMode='contain'
                                        style={{
                                            width: 23,
                                            height: 23,
                                            tintColor: '#7E9181'
                                        }}
                                        />
                                    );
                                }}
                                onPress={() => this.props.navigation.navigate("Average Budget")}
                            /> 


                            <DrawerItem
                                label="Calculator"
                                icon={() => {
                                    return (
                                        <Image 
                                        source={require('../../assets/Icons/calculator.png')}
                                        resizeMode='contain'
                                        style={{
                                            width: 23,
                                            height: 23,
                                            tintColor: '#7E9181',
                                        }}
                                        />
                                    );
                                }}
                                onPress={() => this.props.navigation.navigate("Calculator")}
                            /> 


                            <DrawerItem
                                label="Settings"
                                icon={() => {
                                    return (
                                        <Image 
                                        source={require('../../assets/Icons/settings.png')}
                                        resizeMode='contain'
                                        style={{
                                            width: 23,
                                            height: 23,
                                            tintColor: '#7E9181',
                                        }}
                                        />
                                    );
                                }}
                                onPress={() => this.props.navigation.navigate("Settings")}
                            /> 
                        </Drawer.Section>


                        <Drawer.Section title="Support">
                            <DrawerItem
                                label="Contact Us"
                                icon={() => {
                                    return (
                                        <Image 
                                        source={require('../../assets/Icons/contact.png')}
                                        resizeMode='contain'
                                        style={{
                                            width: 23,
                                            height: 23,
                                            tintColor: '#7E9181',
                                        }}
                                        />
                                    );
                                }}
                            />  
                        </Drawer.Section>
                    </View>
                </DrawerContentScrollView>

                <Drawer.Section style={styles.bottomDrawerSection}>
                    <DrawerItem
                        label="Sign out"
                        icon={() => {
                            return (
                                <Image 
                                source={require('../../assets/Icons/logout.png')}
                                resizeMode='contain'
                                style={{
                                width: 20,
                                height: 20,
                                tintColor: '#7E9181',
                                marginRight: 15
                                }}
                                />
                            );
                        }}
                        onPress={() => this.handleSignOut()}
                    />
                </Drawer.Section>
            </View>
            );
        }

    }

    render() {
        return this.handleRendering();
    }
};

const mapStateToProps = (store) => ({
    currentUser: store.user.currentUser,
});

export default connect(mapStateToProps, null)(withNavigation(DrawerContent));


const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    caption: {
        fontSize: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    section: {
        flexDirection:'row',
        alignItems: 'center',
        marginRight: 15
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3
    },
    drawerSection: {
        marginTop: 15
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16
    },
})
