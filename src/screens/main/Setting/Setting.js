import React, { Component }  from 'react';
import { Text, SafeAreaView, View, ScrollView, FlatList, Pressable, TouchableOpacity, Image, SectionList } from 'react-native';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withNavigation } from 'react-navigation';
import styles from '../../../styles/homeStyle';

const sections = [
    {
      title: "Account",
      data: ["Edit Profile", "Bank Accounts", "Payment Accounts", "Notification Settings"]
    },
    {
      title: "Security",
      data: ["Biometrics", "Change Password"]
    },
];

export class Setting extends Component {

    // componentDidMount() {

    // };

    handleComponentDidMount() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView>

                    {/* header */}
                    <View style={{
                        flexDirection: 'row', 
                        justifyContent:'space-between',
                        alignItems: 'baseline'
                        }}>
                        
                        {/* go back */}
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                            <Image 
                            source={require('../../../assets/Icons/back.png')}
                            resizeMode='contain'
                            style={{
                                width: 23,
                                height: 23,
                                tintColor: '#7E9181',
                                marginLeft: 15
                            }}
                            />
                        </TouchableOpacity>

                        {/* Display name */}
                        <Text style={styles.title}>Settings</Text>   

                        {/* TODO: log out */}
                        <TouchableOpacity>
                            <Image 
                            source={require('../../../assets/Icons/logout.png')}
                            resizeMode='contain'
                            style={{
                                width: 23,
                                height: 23,
                                tintColor: '#7E9181',
                                marginRight: 15
                            }}
                            />
                        </TouchableOpacity>
                    </View>

                    {/* main setting content */}
                    <View>
                        <Text style={styles.listText}> Account</Text>
                        <TouchableOpacity
                            onPress={()=> this.props.navigation.navigate("EditProfile")}>
                            <Text>Edit Profile</Text> 
                        </TouchableOpacity>
                    </View>
                    


                </ScrollView>
            </SafeAreaView>
        );
    }

    render() {
        return(
            this.handleComponentDidMount()
        );
    }
}

const mapStateToProps = (store) => ({
    currentUser: store.user.currentUser,
});

export default connect(mapStateToProps,null)(withNavigation(Setting));