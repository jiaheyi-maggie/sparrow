import React from 'react';
import { View, Image, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerContent } from '../../components/main/DrawerContent';
import Home from './Home';

import Notification from './Notification';
import styles from '../../styles/homeStyle';
import Settings from './Settings';
import BudgetDetail from './BudgetDetail';
import AddCategoriesDetail from './AddCategoriesDetail';
import Calculator from './Calculator';

/* Add the onboarding navigation stack here */
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const HomeTab = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    position: 'absolute',
                    // bottom: 0,
                    // left: 0,
                    // right: 0,
                    // elevation: 0,
                    backgroundColor: '#fff',
                    // borderRadius:0,
                    height: 60,
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
                                source={require('../../assets/Icons/settings.png')}
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
}

const AddCategoryModal = createStackNavigator();

const Details = () => {
    return (
        <AddCategoryModal.Navigator mode='modal' >
            <AddCategoryModal.Screen name="Average Budget" component={BudgetDetail} options={{ headerShown: false }}/>
            <AddCategoryModal.Screen name="Add Categories" component={AddCategoriesDetail} options={{ headerShown: false }}/>
        </AddCategoryModal.Navigator>
    );
}

const HomeNavigation = () => {
    // TODO: update budget
    return (
        <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => <DrawerContent {...props} />}>
            <Drawer.Screen name="Home" component={HomeTab} />
            <Drawer.Screen name="Average Budget" component={Details} />
            <Drawer.Screen name="Calculator" component={Calculator} />
        </Drawer.Navigator>
    );
};

export default HomeNavigation;