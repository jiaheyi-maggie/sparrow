import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import firebase from 'firebase';
import { Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';


export class DrawerContent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            username: '',
            avatar: null,
            isDarkTheme: false
        }
 
        this.getUserName = this.getUserName.bind(this);
        this.toggleTheme = this.toggleTheme.bind(this);
    }

    getUserName() {
        const userID = firebase.auth().currentUser.uid;
        firebase.firestore().collection("users").doc(userID).get()
        .then((doc) => {
            if (doc.exists) {
                var user = doc.data();
                this.setState({firstName: user.firstName, lastName: user.lastName, email: user.email, username: user.username})
            }
        })

    };

    toggleTheme() {
        this.setState({isDarkTheme: !this.state.isDarkTheme})
    }


    render(){
        this.getUserName();

        return (
        <View style={{flex: 1}}> 
            <DrawerContentScrollView>
                <View style={styles.drawerContent}>
                    {/* Profile Picture and Name */}
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row', marginTop: 15, alignItems: 'center', justifyContent: 'flex-start'}}>
                            <Avatar.Image
                                source={require('../../assets/Icons/profile.png')}
                                size={50}
                            />
                            <View style={{marginLeft: 15, flexDirection: 'column'}}>
                                <Title style={styles.title}> {this.state.firstName} {this.state.lastName} </Title>
                                <Caption style={styles.caption}> @{this.state.username}</Caption>
                            </View>
                        </View>
                    </View>

                    {/* Navigation Section */}
                    <Drawer.Section style={styles.drawerSection} title="Navigation">
                        {/*  Home */}
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
                        {/* Average Budget */}
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

                        {/* Calculator */}
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

                        {/* Settings */}
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

                    {/* Preferences Section */}
                    {/* <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={() => {this.toggleTheme()}}>
                            <View style={styles.preference}>
                                <Text> Dark Theme</Text>
                                <View pointerEvents='none'>
                                    <Switch value={this.state.isDarkTheme}/>
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section> */}

                    {/* Support Section */}
                    <Drawer.Section title="Support">
                        {/*  Home */}
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
                            // TODO: onPress => pop modal to email support team
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
                              width: 23,
                              height: 23,
                              tintColor: '#7E9181',
                              marginRight: 15
                            }}
                            />
                        );
                    }}
                />
            </Drawer.Section>
        </View>
        );
    }
};

export default connect(null, null)(withNavigation(DrawerContent));

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
