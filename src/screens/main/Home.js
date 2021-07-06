import React, { useState, useEffect, useCallback }  from 'react';
import { Text, SafeAreaView, View, ScrollView, TouchableOpacity, Pressable, Image, Platform } from 'react-native';
import { fetchUser } from '../../app/actions/fetchUser';
import { fetchBudget } from '../../app/actions/fetchBudget';
import CategoryBar from '../../components/main/CategoryBar';
// allow connect to redux
import { connect } from 'react-redux';
// bind actions to components
import { bindActionCreators } from 'redux';
import { withNavigation } from 'react-navigation';
import styles from '../../styles/homeStyle';


const Home = ({ navigation, fetchUser, fetchBudget, currentUser, categories, longTerm, shortTerm }) => {

    useEffect(() => {
        console.log('hi');
        fetchBudget();
        fetchUser();
    }, [])

    const handleComponentDidMount = () =>  {
        // console.log('render');

        if (currentUser) {
            const monthNames = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            ];

            const d = new Date();
            const m = monthNames[d.getMonth()];
            const y = d.getFullYear();

            const usefulCategories = categories.filter((obj) => {
                return obj.sum !== 0;
            })


            return (
                <SafeAreaView style={styles.homeContainer}>
                    <ScrollView>
                        <View style={{flexDirection: 'row', justifyContent:'space-between',alignItems: 'center',marginTop: Platform.OS ==='android'?3:0}}>

                            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                                <Image
                                    source={require('../../assets/Icons/profile.png')}
                                    style={{
                                        width: 27,
                                        height: 27,
                                        tintColor: '#e1e1e1',
                                        marginLeft: 8
                                    }}
                                />
                            </TouchableOpacity>

                            <Text style={styles.title3}>Hi, {currentUser.firstName}</Text>             
                                                            
                            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                                <Image 
                                    source={require('../../assets/Icons/menu.png')}
                                    resizeMode='contain'
                                    style={{
                                        width: 23,
                                        height: 23,
                                        tintColor: '#e1e1e1',
                                        marginRight: 8
                                    }}
                                />
                            </TouchableOpacity>

                        </View>

                        <View> 
                            <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                                <View style={styles.titleContainer}>
                                    <Text style={styles.smallTitle2}>Overview</Text>  
                                </View>
                                <Image 
                                    source={require('../../assets/Icons/transfer.png')}
                                    resizeMode='contain'
                                    style={{
                                        width: 23,
                                        height: 23,
                                        tintColor: '#e1e1e1',
                                        marginRight: 8,
                                    }}
                                />
                            </View>
                            

                            <ScrollView horizontal={true} >

                                <Pressable 
                                    style={({ pressed }) => [
                                        {
                                            backgroundColor: pressed ? 'aliceblue' : 'white',
                                            borderRadius: 20,
                                            padding: 5,
                                            elevation: 2,
                                            margin:5
                                        }
                                    ]} 
                                    onPress={()=>{this.props.navigation.navigate("Remaining Detail")}}
                                >
                                    <Text style={styles.subtitle2}>Remaining</Text>

                                    <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
                                        <View style={{backgroundColor: '#fff', borderRadius: 20}}>
                                            <Text style={styles.subtitle}>{m}:</Text>
                                        </View>
                                       

                                        <View style={{backgroundColor: '#99A672', borderRadius: 20, marginRight: 5}}>
                                            <Text style={styles.number2}>$ {shortTerm[0]}</Text>
                                        </View>
                                    </View>


                                    <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
                                        <View style={{backgroundColor: '#fff', borderRadius: 20, margin: 2}}>
                                            <Text style={styles.subtitle}>{y}:</Text>
                                        </View>
                                        <View style={{backgroundColor: '#99A672', borderRadius: 20, margin: 2, marginRight: 5}}>
                                            <Text style={styles.number2}>$ {longTerm[0]}</Text>
                                        </View>
                                    </View>


                                    <View style={styles.statusContainer}>
                                        <Text style={styles.viewDetailText}>View Details</Text> 
                                    </View>
                                </Pressable>

                                <View style={{marginTop: 75}}>
                                    <Text style={styles.operation}> = </Text>
                                </View>


                                <Pressable 
                                    style={({ pressed }) => [
                                        {
                                            backgroundColor: pressed ? 'aliceblue' : 'white',
                                            borderRadius: 20,
                                            padding: 5,
                                            elevation: 2,
                                            margin:5
                                        }
                                    ]} 
                                    onPress={()=>{navigation.navigate("Average Budget")}}
                                >
                                    <Text style={styles.subtitle2}>Budget</Text>

                                    <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
                                        <View style={{backgroundColor: '#fff', borderRadius: 20}}>
                                            <Text style={styles.subtitle}>{m}:</Text>
                                        </View>
                                       
                                        <View style={{backgroundColor: '#D7CEB2', borderRadius: 20, marginRight: 5}}>
                                            <Text style={styles.number2}>$ {shortTerm[0]}</Text>
                                        </View>
                                    </View>


                                    <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
                                        <View style={{backgroundColor: '#fff', borderRadius: 20, margin: 2}}>
                                            <Text style={styles.subtitle}>{y}:</Text>
                                        </View>
                                        <View style={{backgroundColor: '#D7CEB2', borderRadius: 20, margin: 2, marginRight: 5}}>
                                            <Text style={styles.number2}>$ {longTerm[0]}</Text>
                                        </View>
                                    </View>


                                    <View style={styles.statusContainer}>
                                        <Text style={styles.viewDetailText}>View Details</Text> 
                                    </View>
                                </Pressable>

                                <View style={{marginTop: 75}}>
                                    <Text style={styles.operation}> — </Text>
                                </View>


                                <Pressable 
                                    style={({ pressed }) => [
                                        {
                                            backgroundColor: pressed ? 'aliceblue' : 'white',
                                            borderRadius: 20,
                                            padding: 5,
                                            elevation: 2,
                                            margin:5
                                        }
                                    ]} 
                                    onPress={()=>{navigation.navigate("Spending Detail")}}
                                >
                                    <Text style={styles.subtitle2}>Spending</Text>

                                    <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
                                        <View style={{backgroundColor: '#fff', borderRadius: 20}}>
                                            <Text style={styles.subtitle}>{m}:</Text>
                                        </View>
                                       
                                        <View style={{backgroundColor: '#99A672', borderRadius: 20, marginRight: 5}}>
                                            <Text style={styles.number2}>$ 0</Text>
                                        </View>
                                    </View>


                                    <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
                                        <View style={{backgroundColor: '#fff', borderRadius: 20, margin: 2}}>
                                            <Text style={styles.subtitle}>{y}:</Text>
                                        </View>
                                        <View style={{backgroundColor: '#99A672', borderRadius: 20, margin: 2, marginRight: 5}}>
                                            <Text style={styles.number2}>$ 0</Text>
                                        </View>
                                    </View>


                                    <View style={styles.statusContainer}>
                                        <Text style={styles.viewDetailText}>View Details</Text> 
                                    </View>
                                </Pressable>

                            </ScrollView>

                        </View>


                        <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                                <View style={styles.titleContainer}>
                                    <Text style={styles.smallTitle2}>Budget Categories</Text>  
                                </View>
                                <Image 
                                    source={require('../../assets/Icons/zoom-in.png')}
                                    resizeMode='contain'
                                    style={{
                                        width: 25,
                                        height: 25,
                                        tintColor: '#e1e1e1',
                                        marginRight: 8,
                                    }}
                                />
                        </View>


                        <View style={{backgroundColor: '#fff', borderRadius: 20, margin: 5, paddingLeft: 5}}>
                            <CategoryBar data={usefulCategories}/>
                        </View>
                        
                    </ScrollView>
                </SafeAreaView>
            );
        } else {
            return (
                <SafeAreaView style={styles.homeContainer}></SafeAreaView>
            );
        }
    };

    return (
        handleComponentDidMount()
    );
};


// allow access to data in Home component
const mapStateToProps = (store) => ({
    currentUser: store.user.currentUser,
    categories: store.user.categories,
    longTerm: store.user.longTerm,
    shortTerm: store.user.shortTerm
});

// bind component to redux
const mapDispatchProps = (dispatch) => bindActionCreators({ fetchUser, fetchBudget }, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(withNavigation(Home));