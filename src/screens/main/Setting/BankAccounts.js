import React, { Component }  from 'react';
import { Text, SafeAreaView, View, ScrollView, FlatList, Pressable, TouchableOpacity, Image } from 'react-native';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withNavigation } from 'react-navigation';
import styles from '../../../styles/homeStyle';


export class BankAccounts extends Component {

    handleComponentDidMount() {
        return (
            <SafeAreaView style={styles.container2}>
                <ScrollView>

                    {/* header */}
                    <View style={{alignItems: 'center'}}>
                        {/* Display name */}
                        <Text style={styles.title}>Bank Accounts</Text>   
                    </View>

                    {/* main content */}

                    {/* Buttons */}
                    <View style={{margin: 10}}>
                        <TouchableOpacity
                            onPress={()=> this.props.navigation.navigate("Home")}>
                            <Text style={{fontSize: 16}}>Done</Text> 
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={()=> this.props.navigation.goBack()}>
                            <Text style={{fontSize: 16}}>Cancel</Text> 
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

export default connect(mapStateToProps,null)(withNavigation(BankAccounts));