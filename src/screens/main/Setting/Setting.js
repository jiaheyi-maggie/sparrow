import React, { Component }  from 'react';
import { Text, SafeAreaView, View, ScrollView, FlatList, Pressable, TouchableOpacity, Image } from 'react-native';
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
            <SafeAreaView style={styles.container2}>
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
                            onPress={()=> {
                                firebase.auth().signOut()
                                .then(() => {
                                    this.props.navigation.navigate('onboarding');
                                }).catch((error) => {
                                    console.log(error);
                                })
                            }}
                            />
                        </TouchableOpacity>
                    </View>

                    {/* main setting content */}
                    {/* Account Section */}
                    <View style={{margin: 10}}>
                        <Text style={styles.listText}>Account</Text>
                        <View style={styles.settingList}>
                            <TouchableOpacity
                                onPress={()=> this.props.navigation.navigate("EditProfile")}>
                                <Text style={{fontSize: 16}}>Edit Profile</Text> 
                            </TouchableOpacity>
                        </View>

                        <View style={styles.settingList}>
                            <TouchableOpacity
                                onPress={()=> this.props.navigation.navigate("BankAccounts")}>
                                <Text style={{fontSize: 16}}>Bank Accounts</Text> 
                            </TouchableOpacity>
                        </View>

                        <View style={styles.settingList}>
                            <TouchableOpacity
                                onPress={()=> this.props.navigation.navigate("PaymentAccounts")}>
                                <Text style={{fontSize: 16}}>Payment Accounts</Text> 
                            </TouchableOpacity>
                        </View>

                        <View style={styles.settingList}>
                            <TouchableOpacity
                                onPress={()=> this.props.navigation.navigate("NotificationSettings")}>
                                <Text style={{fontSize: 16}}>Notification Settings</Text> 
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Security Section */}
                    <View style={{margin: 10}}>
                        <Text style={styles.listText}>Security</Text>
                        <View style={styles.settingList}>
                            <TouchableOpacity>
                                {/* onPress={()=> this.props.navigation.navigate("EditProfile")} */}
                                <Text style={{fontSize: 16}}>Biometrics</Text> 
                            </TouchableOpacity>
                        </View>

                        <View style={styles.settingList}>
                            <TouchableOpacity>
                                {/* onPress={()=> this.props.navigation.navigate("BankAccounts")}> */}
                                <Text style={{fontSize: 16}}>Change User Information</Text> 
                            </TouchableOpacity>
                        </View>
                    </View>
                    
                    {/* Policy Section */}
                    <View style={{margin: 10}}>
                        <Text style={styles.listText}>Policy</Text>
                        <View style={styles.settingList}>
                            <TouchableOpacity>
                                {/* onPress={()=> this.props.navigation.navigate("EditProfile")} */}
                                <Text style={{fontSize: 16}}>Data Protection Agreement</Text> 
                            </TouchableOpacity>
                        </View>
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