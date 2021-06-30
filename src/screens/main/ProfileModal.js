import React, { Component }  from 'react';
import { Text, SafeAreaView, View, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withNavigation } from 'react-navigation';
import styles from '../../styles/homeStyle';
import store from '../../app/store';

export class ProfileModal extends Component {

    handleComponentDidMount() {
        return (

                <SafeAreaView style={styles.container}>

                    {/* header */}
                    <View style={{
                        flexDirection: 'row', 
                        justifyContent:'space-between',
                        alignItems: 'baseline'
                        }}>
                        
                        {/* go back */}
                        <TouchableOpacity style={styles.backButton} onPress={() => this.props.navigation.navigate('Home')}>
                            <Image 
                            source={require('../../assets/Icons/back.png')}
                            resizeMode='contain'
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: '#7E9181',
                            }}
                            />
                        </TouchableOpacity>

                
                    </View>

                    <View style={{alignItems: 'center'}}>
                        {/* profile picture */}
                        <Image
                            source={require('../../assets/Icons/profile.png')}
                            style={{
                                width: 80,
                                height: 80
                            }}
                        />
                        {/* Display name */}
                        <Text style={[styles.title2, {color: '#2A94AF'}]}>{this.props.currentUser.firstName} {this.props.currentUser.lastName}</Text>
                        <Text style={styles.subtitle}>@{this.props.currentUser.username}</Text>
                    </View>

                        <View style={{alignItems: 'flex-start'}}>
                            <Text style={styles.subtitle2}>Budget Overview</Text>
                            <View style={[styles.cardContainer, {paddingLeft: 0}]}>
                                <View style={{flexDirection: 'row', alignItems: 'center', paddingRight: 5}}>
                                    <Text style={styles.cardText}>Monthly:</Text>
                                    <Text style={ {color: '#264653', fontSize: 19}}>${this.props.shortTerm[0]}</Text>
                                </View>
                                <View style={{flexDirection: 'row', alignItems: 'center', paddingRight: 5}}>
                                    <Text style={styles.cardText}>Yearly:</Text>
                                    <Text style={ {color: '#264653', fontSize: 19}}>${this.props.longTerm[0]}</Text>
                                </View>
                                
                            </View>
                        </View>

                        <View style={{alignItems: 'flex-end'}}>
                            <Text style={styles.subtitle2}>Spending</Text>
                            <View style={[styles.cardContainer, {paddingLeft: 0}]}>
                                <View style={{flexDirection: 'row', alignItems: 'center', paddingRight: 5}}>
                                    <Text style={styles.cardText}>Monthly:</Text>
                                    <Text style={ {color: '#264653', fontSize: 19}}>$0</Text>
                                </View>
                                <View style={{flexDirection: 'row', alignItems: 'center', paddingRight: 5}}>
                                    <Text style={styles.cardText}>Yearly:</Text>
                                    <Text style={ {color: '#264653', fontSize: 19}}>$0</Text>
                                </View>
                                
                            </View>
                        </View>


                    

                    

                </SafeAreaView>
        );
    }

    render() {
        return(
            this.handleComponentDidMount()
        );
    }
};

const mapStateToProps = (store) => ({
    currentUser: store.user.currentUser,
    longTerm: store.user.longTerm,
    shortTerm: store.user.shortTerm
});


export default connect(mapStateToProps, null)(withNavigation(ProfileModal));