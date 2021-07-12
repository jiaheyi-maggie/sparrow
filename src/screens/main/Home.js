import React, { useState, useEffect, useCallback }  from 'react';
import { Text, SafeAreaView, View, ScrollView, TouchableOpacity, Pressable, Image, Platform } from 'react-native';
import { fetchUser } from '../../app/actions/fetchUser';
import { fetchBudget } from '../../app/actions/fetchBudget';
import CategoryBar from '../../components/main/CategoryBar';
// allow connect to redux
import { connect } from 'react-redux';
// bind actions to components
import { bindActionCreators } from 'redux';
import styles from '../../styles/homeStyle';
import { COLORS, FONTS } from '../../constants/theme';


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
                        <View style={{flexDirection: 'row', justifyContent:'space-between',alignItems: 'center',marginTop: Platform.OS ==='android'?5:0}}>

                            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                                <Image
                                    source={require('../../assets/Icons/profile.png')}
                                    style={{
                                        width: 23,
                                        height: 23,
                                        tintColor: '#e1e1e1',
                                        marginLeft: 8
                                    }}
                                />
                            </TouchableOpacity>

                            <Text style={{color: '#fff', ...FONTS.h3}}>Hi, {currentUser.firstName}</Text>             
                                                            
                            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                                <Image 
                                    source={require('../../assets/Icons/menu.png')}
                                    resizeMode='contain'
                                    style={{
                                        width: 20,
                                        height: 20,
                                        tintColor: '#e1e1e1',
                                        marginRight: 8
                                    }}
                                />
                            </TouchableOpacity>

                        </View>

                        <View>
                            
                            <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                                <View style={[styles.genericRow, {margin:5}]}>
                                    <Text style={{...FONTS.h3, color: COLORS.yellow}}>Overview</Text>
                                    <Image 
                                        source={require('../../assets/Icons/transfer.png')}
                                        resizeMode='contain'
                                        style={{
                                            width: 20,
                                            height: 20,
                                            tintColor: '#e1e1e1',
                                            marginLeft: 8,
                                        }}
                                    />
                                </View>
                            </View>
                            

                            <ScrollView horizontal={true} >
                                {/* Remaining */}
                                <View>
                                    <Pressable 
                                        style={({ pressed }) => [
                                            {
                                                backgroundColor: pressed ? COLORS.tea : 'aliceblue',
                                                borderRadius: 10,
                                                padding: 8,
                                                elevation: 2,
                                                margin:5
                                            }
                                        ]} 
                                        onPress={()=>{navigation.navigate("Remaining Detail")}}
                                    >
                                        <Text style={{...FONTS.h4, color: COLORS.primary, textDecorationLine: 'underline', alignSelf:'flex-start'}}>Remaining</Text>

                                        <View style={{flexDirection: 'row', justifyContent:'space-around', alignItems: 'center'}}>
                                            <Text style={{...FONTS.h4, color: COLORS.lightGray3}}>{m}:</Text>
                                            <View style={styles.genericRow}>
                                                <Text style={{...FONTS.h4, color: COLORS.lightGray3}}>$</Text>
                                                <Text style={{...FONTS.h2, color: COLORS.bluebell, marginHorizontal: 5}}>{shortTerm[0]}</Text>
                                            </View>
                                        </View>


                                        <View style={{flexDirection: 'row', justifyContent:'space-around', alignItems: 'center'}}>
                                            <Text style={{...FONTS.h4, color: COLORS.lightGray3}}>{y}:</Text>
                                            <View style={styles.genericRow}>
                                                <Text style={{...FONTS.h4, color: COLORS.lightGray3}}>$</Text>
                                                <Text style={{...FONTS.h2, color: COLORS.bluebell, marginHorizontal: 5}}>{longTerm[0]}</Text>
                                            </View>
                                        </View>


                                        <View style={styles.statusContainer}>
                                            <Text style={{...FONTS.h4, color: COLORS.orange, marginHorizontal: 20}}>View Details</Text>
                                        </View>
                                    </Pressable>
                                </View> 

                                <View style={{marginTop: 60}}>
                                    <Text style={styles.operation}> = </Text>
                                </View>

                                {/* Budget */}
                                <View>
                                    <Pressable 
                                        style={({ pressed }) => [
                                            {
                                                backgroundColor: pressed ? COLORS.tea : 'aliceblue',
                                                borderRadius: 10,
                                                padding: 8,
                                                elevation: 2,
                                                margin:5
                                            }
                                        ]} 
                                        onPress={()=>{navigation.navigate("Average Budget")}}
                                    >
                                        <Text style={{...FONTS.h4, color: COLORS.primary, textDecorationLine: 'underline', alignSelf:'flex-start'}}>Budget</Text>

                                        <View style={{flexDirection: 'row', justifyContent:'space-around', alignItems: 'center'}}>
                                            <Text style={{...FONTS.h4, color: COLORS.lightGray3}}>{m}:</Text>
                                            <View style={styles.genericRow}>
                                                <Text style={{...FONTS.h4, color: COLORS.lightGray3}}>$</Text>
                                                <Text style={{...FONTS.h2, color: COLORS.bluebell, marginHorizontal: 5}}>{shortTerm[0]}</Text>
                                            </View>
                                        </View>


                                        <View style={{flexDirection: 'row', justifyContent:'space-around', alignItems: 'center'}}>
                                            <Text style={{...FONTS.h4, color: COLORS.lightGray3}}>{y}:</Text>
                                            <View style={styles.genericRow}>
                                                <Text style={{...FONTS.h4, color: COLORS.lightGray3}}>$</Text>
                                                <Text style={{...FONTS.h2, color: COLORS.bluebell, marginHorizontal: 5}}>{longTerm[0]}</Text>
                                            </View>
                                        </View>


                                        <View style={styles.statusContainer}>
                                            <Text style={{...FONTS.h4, color: COLORS.orange, marginHorizontal: 20}}>View Details</Text>
                                        </View>
                                    </Pressable>
                                </View>

                                <View style={{marginTop: 60}}>
                                    <Text style={styles.operation}> - </Text>
                                </View>


                                {/* Spending */}
                                <View> 
                                    <Pressable 
                                        style={({ pressed }) => [
                                            {
                                                backgroundColor: pressed ? COLORS.tea : 'aliceblue',
                                                borderRadius: 10,
                                                padding: 8,
                                                elevation: 2,
                                                margin:5
                                            }
                                        ]} 
                                        onPress={()=>{navigation.navigate("Spending Detail")}}
                                    >
                                        <Text style={{...FONTS.h4, color: COLORS.primary, textDecorationLine: 'underline', alignSelf:'flex-start'}}>Spending</Text>

                                        <View style={{flexDirection: 'row', justifyContent:'space-around', alignItems: 'center'}}>
                                            <Text style={{...FONTS.h4, color: COLORS.lightGray3}}>{m}:</Text>
                                            <View style={styles.genericRow}>
                                                <Text style={{...FONTS.h4, color: COLORS.lightGray3}}>$</Text>
                                                <Text style={{...FONTS.h2, color: COLORS.bluebell, marginHorizontal: 5}}>0</Text>
                                            </View>
                                        </View>


                                        <View style={{flexDirection: 'row', justifyContent:'space-around', alignItems: 'center'}}>
                                            <Text style={{...FONTS.h4, color: COLORS.lightGray3}}>{y}:</Text>
                                            <View style={styles.genericRow}>
                                                <Text style={{...FONTS.h4, color: COLORS.lightGray3}}>$</Text>
                                                <Text style={{...FONTS.h2, color: COLORS.bluebell, marginHorizontal: 5}}>0</Text>
                                            </View>
                                        </View>


                                        <View style={styles.statusContainer}>
                                            <Text style={{...FONTS.h4, color: COLORS.orange, marginHorizontal: 20}}>View Details</Text>
                                        </View>
                                    </Pressable>
                                </View>

                            </ScrollView>

                        </View>


                        <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                            <View style={[styles.genericRow, {margin:5}]}>
                                <Text style={{...FONTS.h3, color: COLORS.yellow}}>Budget Categories</Text>
                                <Image 
                                    source={require('../../assets/Icons/zoom-in.png')}
                                    resizeMode='contain'
                                    style={{
                                        width: 25,
                                        height: 25,
                                        tintColor: '#e1e1e1',
                                        marginLeft: 8,
                                    }}
                                />
                                </View>
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

const mapStateToProps = (store) => ({
    currentUser: store.user.currentUser,
    categories: store.user.categories,
    longTerm: store.user.longTerm,
    shortTerm: store.user.shortTerm
});

const mapDispatchProps = (dispatch) => bindActionCreators({ fetchUser, fetchBudget }, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(Home);