import React from 'react';
import { View, Image, Text, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerContent } from '../../components/main/DrawerContent';
import Home from './Home';

import styles from '../../styles/homeStyle';
// import Settings from './Setting/Setting';
import BudgetDetail from './BudgetDetail';
import AddCategoriesDetail from './AddCategoriesDetail';
import Calculator from './Calculator';
import Setting from './Setting/Setting';
import EditProfile from './Setting/EditProfile';
import RemainingDetail from './RemainingDetail';
import SpendingDetail from './SpendingDetail';
import BankAccounts from './Setting/BankAccounts';
import NotificationSettings from './Setting/NotificationSettings';
import PaymentAccounts from './Setting/PaymentAccounts';
import Notifications from './Notifications';
import Accounts from './BankAccounts';
import DeleteCategories from './DeleteCategories';
import ProfileModal from './ProfileModal';
import Login from '../Login';
import ChangePassword from './Setting/ChangePassword';
import ForgotCred from '../ForgotCred';
import ChangeEmail from './Setting/ChangeEmail';
import SignedOut from './SignedOut';
import Crypto from './Crypto';

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
                    backgroundColor: '#fff',
                    height:Platform.OS === 'ios'?70: 60,
                    paddingTop: Platform.OS ==='ios'?20:0,
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
                                    tintColor: focused ? '#E76F51' : '#748c94'
                                }}
                            />
                            <Text style={{
                                    color: focused ? '#E76F51' : '#748c94',
                                    fontSize: 12
                                }}>
                                    Dashboard
                            </Text> 
                        </View>
                        ),
                }} 
            />

            <Tab.Screen name='Accounts' component={Accounts} 
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center'}}> 
                            <Image 
                                source={require('../../assets/Icons/bank.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#E76F51' : '#748c94'
                                }}
                            />
                            <Text style={{
                                    color: focused ? '#E76F51' : '#748c94',
                                    fontSize: 12
                                }}>
                                    Accounts
                            </Text> 
                        </View>
                    ),
                }} 
            />

            <Tab.Screen name='Crypto' component={Crypto} 
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center'}}> 
                            <Image 
                                source={require('../../assets/Icons/crypto.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#E76F51' : '#748c94'
                                }}
                            />
                            <Text style={{
                                    color: focused ?  '#E76F51' : '#748c94',
                                    fontSize: 12
                                }}>
                                    Crypto
                            </Text> 
                        </View>
                    ),
                }} 
            />

            <Tab.Screen name='Notification' component={Notifications} 
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center'}}> 
                            <Image 
                                source={require('../../assets/Icons/notification.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#E76F51' : '#748c94'
                                }}
                            />
                            <Text style={{
                                    color: focused ?  '#E76F51' : '#748c94',
                                    fontSize: 12
                                }}>
                                    Notification
                            </Text> 
                        </View>
                    ),
                }} 
            />

            
                

        </Tab.Navigator>
    );
}



// budget details
const AddCategoryModal = createStackNavigator();
const Details = () => {
    return (
        <AddCategoryModal.Navigator mode='modal' >
            <AddCategoryModal.Screen name="Average Budget" component={BudgetDetail} options={{ headerShown: false }}/>
            <AddCategoryModal.Screen name="Add Categories" component={AddCategoriesDetail} options={{ headerShown: false }}/>
            <AddCategoryModal.Screen name="Delete Categories" component={DeleteCategories} options={{ headerShown: false }}/>
        </AddCategoryModal.Navigator>
    );
}

const SettingsStack = createStackNavigator();
const Settings = () => {
    return (
        <SettingsStack.Navigator>
            <SettingsStack.Screen name="MainSettings" component={Setting} options={{ headerShown: false }}/>
            <SettingsStack.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false }}/>
            <SettingsStack.Screen name="BankAccounts" component={BankAccounts} options={{ headerShown: false }}/>
            <SettingsStack.Screen name="PaymentAccounts" component={PaymentAccounts} options={{ headerShown: false }}/>
            <SettingsStack.Screen name="NotificationSettings" component={NotificationSettings} options={{ headerShown: false }}/>
            <SettingsStack.Screen name="ChangePassword" component={ChangePassword} options={{ headerShown: false }}/>
            <SettingsStack.Screen name="ChangeEmail" component={ChangeEmail} options={{ headerShown: false }}/>
            <SettingsStack.Screen name="ForgotPassword" component={ForgotCred} options={{ headerShown: false }}/>
        </SettingsStack.Navigator>
    );
}



const HomeNavigation = () => {
    return (
        <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => <DrawerContent {...props} />}>
            <Drawer.Screen name="Home" component={HomeTab} />
            <Drawer.Screen name="Settings" component={Settings} />
            <Drawer.Screen name="Average Budget" component={Details} />
            <Drawer.Screen name="Calculator" component={Calculator} />
            <Drawer.Screen name="Remaining Detail" component={RemainingDetail} />
            <Drawer.Screen name="Spending Detail" component={SpendingDetail} />
            <Drawer.Screen name="Login" component={Login} />
            <Drawer.Screen name="SignedOut" component={SignedOut} />
            <Drawer.Screen name="Profile" component={ProfileModal} />
        </Drawer.Navigator>
    );
};

export default HomeNavigation;