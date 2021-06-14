import React from 'react';
import { View, Image, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons/Ionicons';
import Home from './Home';
import Profile from './Profile';
import Notification from './Notification';
import styles from '../../styles/homeStyle';

/* Add the onboarding navigation stack here */
const Tab = createBottomTabNavigator();

const HomeNavigation = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    position: 'absolute',
                    bottom: 10,
                    left: 10,
                    right: 10,
                    elevation: 0,
                    backgroundColor: '#fff',
                    borderRadius: 15,
                    height: 80,
                    ...styles.shadow
                }
              }}
        >
            <Tab.Screen name='Home' component={Home} 
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center'}}> 
                            <Image 
                                source={require('../../assets/Icons/home.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#e32f45' : '#748c94'
                                }}
                            />
                            <Text style={{
                                    color: focused ? '#e32f45' : '#748c94',
                                    fontSize: 15
                                }}>
                                    HOME
                            </Text> 
                        </View>
                        ),
                }} 
            />

            <Tab.Screen name='Notification' component={Notification} 
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center'}}> 
                            <Image 
                                source={require('../../assets/Icons/notification.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#e32f45' : '#748c94'
                                }}
                            />
                            <Text style={{
                                    color: focused ?  '#e32f45' : '#748c94',
                                    fontSize: 15
                                }}>
                                    NOTIFICATION
                            </Text> 
                        </View>
                    ),
                }} 
            />
                
            <Tab.Screen name='Profile' component={Profile} 
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center'}}> 
                            <Image 
                                source={require('../../assets/Icons/profile.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#e32f45' : '#748c94'
                                }}
                            />
                            <Text style={{
                                    color: focused ? '#e32f45' : '#748c94',
                                    fontSize: 15
                                }}>
                                    PROFILE
                            </Text> 
                        </View>
                    ),
                }} 
            />


        </Tab.Navigator>
    );
};

export default HomeNavigation;