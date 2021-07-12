import React, { Component }  from 'react';
import { Text, SafeAreaView, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import styles from '../../../styles/homeStyle';
import { COLORS, FONTS } from '../../../constants/theme';


export class Setting extends Component {

    handleSignout = () => {
        firebase.auth().signOut()
        .then(() => {
            this.props.navigation.navigate('Login');
        })
    };

    handleComponentDidMount() {
        return (
            <SafeAreaView style={styles.container3}>
                <ScrollView>

                    {/* header */}
                    <View style={{flexDirection: 'row', alignItems:'center'}}>
                        {/* go back */}
                        <TouchableOpacity  onPress={() => this.props.navigation.navigate('Home')}>
                            <Image 
                            source={require('../../../assets/Icons/back.png')}
                            resizeMode='contain'
                            style={{
                                width: 17,
                                height: 17,
                                tintColor: COLORS.primary,
                            }}
                            />
                        </TouchableOpacity>

                        {/* Display name */}
                        <Text style={{color: COLORS.primary, ...FONTS.h2, marginLeft: 10}}>Settings</Text>
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
                            <TouchableOpacity onPress={()=> this.props.navigation.navigate("ChangePassword")}>
                                <Text style={{fontSize: 16}}>Change Password</Text> 
                            </TouchableOpacity>
                        </View>

                        <View style={styles.settingList}>
                            <TouchableOpacity onPress={()=> this.props.navigation.navigate("ChangeEmail")}>
                                <Text style={{fontSize: 16}}>Change E-mail</Text> 
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