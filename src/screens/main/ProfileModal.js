import React from 'react';
import { Text, SafeAreaView, View, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import styles from '../../styles/homeStyle';
import store from '../../app/store';

const ProfileModal = ({ navigation }) => {
    const currentUser = store.getState().user.currentUser;
    const shortTerm = store.getState().user.shortTerm;
    const longTerm = store.getState().user.longTerm;

    return (
        <SafeAreaView style={styles.container}>
            {/* header */}
            <View style={{flexDirection: 'row', justifyContent:'space-between',alignItems: 'baseline'}}>
                {/* go back */}
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
                    <Image 
                    source={require('../../assets/Icons/back.png')}
                    resizeMode='contain'
                    style={{
                        width: 20,
                        height: 20,
                        tintColor: '#fff',
                    }}
                    />
                </TouchableOpacity>
            </View>

            {/* Main Profile */}
            <View style={{alignItems: 'center'}}>
                {/* profile picture */}
                <TouchableOpacity onPress={()=> this.handleImagePress()}>
                    <Image
                        source={require('../../assets/Icons/profile.png')}
                        style={{
                            width: 80,
                            height: 80
                        }}
                    />
                </TouchableOpacity>
                
                {/* Display name */}
                <Text style={[styles.title2, {color: '#2A94AF'}]}>{currentUser.firstName} {currentUser.lastName}</Text>
                <Text style={styles.subtitle}>@{currentUser.username}</Text>
            </View>

            {/* Budget Info */}
            <View style={{alignItems: 'flex-start'}}>
                <Text style={styles.subtitle2}>Budget Overview</Text>
                <View style={[styles.cardContainer, {paddingLeft: 0}]}>
                    <View style={{flexDirection: 'row', alignItems: 'center', paddingRight: 5}}>
                        <Text style={styles.cardText}>Monthly:</Text>
                        <Text style={ {color: '#264653', fontSize: 19}}>${shortTerm[0]}</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center', paddingRight: 5}}>
                        <Text style={styles.cardText}>Yearly:</Text>
                        <Text style={ {color: '#264653', fontSize: 19}}>${longTerm[0]}</Text>
                    </View>
                    
                </View>
            </View>

            {/* TODO: populate with spending */}
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
};

export default ProfileModal;