import React from 'react';
import { SafeAreaView, Text, Image, View, TouchableOpacity } from 'react-native';
import styles from '../../styles/homeStyle';

const SignedOut = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.homeContainer}>
            {/* Menu */}
            <TouchableOpacity style={{alignItems:'flex-end'}} onPress={() => navigation.navigate('onboarding')}>
                <Image 
                    source={require('../../assets/Icons/right-arrow.png')}
                    resizeMode='contain'
                    style={{
                        width: 23,
                        height: 23,
                        tintColor: '#e1e1e1',
                        marginRight: 8
                    }}
                />
            </TouchableOpacity>

            <View style={{alignItems: 'center'}}>
                <View style={{alignItems: 'center', flexDirection: 'column'}}>
                    <Image 
                        source={require('../../assets/icon.png')} 
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
                    <Text style={{fontSize: 20, fontWeight: 'bold', color:'#FFF4CB', marginBottom: 40}}>SPARROW</Text>
                </View>
                <Text style={styles.title3}> You are signed out! See you next time! </Text>
            </View>

        </SafeAreaView>
    );
};

export default SignedOut;