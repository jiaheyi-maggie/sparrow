/* Onboarding Select Categories Page */
import React from 'react';
import { SafeAreaView, View, Text, Image, ScrollView, FlatList, TouchableOpacity, Platform } from 'react-native';
import styles from "../../styles/onboardingStyle";

import CategoryItem from '../../components/CategoryItem';
import categories from '../../data/categories-bool';

const SelectCategory = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.container}>
            {/* header */}
            <View style={{flexDirection: 'row', justifyContent:'space-between',alignItems: 'baseline'}}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
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
                <TouchableOpacity style={styles.forwardButton} onPress={() => navigation.navigate('categories')}>
                    <Image 
                    source={require('../../assets/Icons/right-arrow.png')}
                    resizeMode='contain'
                    style={{
                        width: 20,
                        height: 20,
                        tintColor: '#fff',
                    }}
                    />
                </TouchableOpacity>
            </View>

            <Text style={styles.longtitle}>Mark all categories you want to set a budget on.</Text>
            {/* <Image 
                source={require('../../assets/onboarding/mark-categories.png')} 
                resizeMode='contain'
                style={styles.smallImage}
            /> */}
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
            
            {/* Button View */}
            {/* <View style={styles.multipleButtonContainer}> 
                <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.goBack()}>
                    <Text style={styles.buttonText}>     Back     </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('categories')}>
                    <Text style={styles.buttonText}>   Continue   </Text>
                </TouchableOpacity>
            </View> */}

        </SafeAreaView>
    );
};

export default SelectCategory;