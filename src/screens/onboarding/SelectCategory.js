/* Onboarding Select Categories Page */
import React from 'react';
import { SafeAreaView, View, Text, Image, ScrollView, FlatList, TouchableOpacity, Platform, KeyboardAvoidingView } from 'react-native';
import styles from "../../styles/onboardingStyle";

import CategoryItem from '../../components/CategoryItem';
import categories from '../../data/categories-bool';

const SelectCategory = ({ navigation }) => {
    

    return (
        <SafeAreaView style={styles.container}>
            {/* <ScrollView> */}
            {/* header */}
            <View style={{flexDirection: 'row', justifyContent:'space-between',alignItems: 'baseline'}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                        <Image 
                            source={require('../../assets/Icons/back.png')}
                            resizeMode='contain'
                            style={{
                                width: 18,
                                height: 18,
                                tintColor: '#fff',
                            }}
                        />
                    </TouchableOpacity>
                    <Text style={styles.forwardButtonText}> Back </Text>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={styles.forwardButtonText}> Next </Text>
                    <TouchableOpacity style={styles.forwardButton} onPress={() => navigation.navigate('categories')}>
                        <Image 
                            source={require('../../assets/Icons/right-arrow.png')}
                            resizeMode='contain'
                            style={{
                                width: 18,
                                height: 18,
                                tintColor: '#fff',
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <Text style={styles.longtitle}>Mark all categories you want to set a budget on.</Text>
            <Text style={styles.subtitle}>This does not have to be perfect, just an estimate! You can customize these later too!</Text>

            <View style={{backgroundColor: 'aliceblue', borderRadius: 20, marginVertical: 10, marginHorizontal: Platform.OS === "ios" ? 10 : 0}}>
                <Text style={styles.optionalText}>Select Categories:</Text>
            </View>
            
            {/* CATEGORY LIST HERE */}
            <FlatList 
                data={categories}
                renderItem={({ item }) => (
                    <CategoryItem item={item}  />
                )}
                keyExtractor={item => item.id}
                contentContainerStyle={{
                    flexGrow: 1,
                }}
            />           
            {/* </ScrollView> */}
        </SafeAreaView>
    );
};

export default SelectCategory;