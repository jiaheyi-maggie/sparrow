import React from 'react';
import { View, Image, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';

import Notification from './Notification';
import styles from '../../styles/homeStyle';
import Settings from './Settings';

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
            initialRouteName='Home'
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
                                    Home
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
                                    Notification
                            </Text> 
                        </View>
                    ),
                }} 
            />
                
            <Tab.Screen name='Settings' component={Settings} 
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
                                    Settings
                            </Text> 
                        </View>
                    ),
                }} 
            />


        </Tab.Navigator>
    );
};

export default HomeNavigation;