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
            avatar: null
        }
 
        this.getUserName = this.getUserName.bind(this);
    }

    getUserName() {
        const userID = firebase.auth().currentUser.uid;
        firebase.firestore().collection("users").doc(userID).get()
        .then((doc) => {
            if (doc.exists) {
                var user = doc.data();
                this.setState({firstName: user.firstName, lastName: user.lastName})
            }
        })

    };


    render(){
        this.getUserName();

        return (
        <View style={{flex: 1}}> 
            <DrawerContentScrollView>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View>
                            <Avatar.Image
                                source={require('../../assets/Icons/profile.png')}
                                size={50}
                            />
                            <View>
                                <Title> {this.state.firstName} {this.state.lastName} </Title>
                            </View>
                        </View>
                    </View>
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
        marginTop: 3,
        fontWeight: 'bold'
    },
    caption: {
        fontSize: 14,
        fontWeight: 'bold'
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
