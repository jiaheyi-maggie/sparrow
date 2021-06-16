import React from 'react';
import { SafeAreaView, View, Text, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import styles from "../../styles/onboardingStyle";

import CategoryItem from '../../components/CategoryItem';
import categories from '../../data/categories-bool';

// Categories screen (to CategoryDetail)

const SelectCategory = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.safeareaWithScroll}>
            
            <ScrollView style={styles.scrollviewContainer}>
                <View>
                    <Text style={styles.longtitle}>Mark all categories where you have a good sense of how much you spend.</Text>
                </View>

                <View>
                    <Text style={styles.subtitle}>This does not have to be perfect, just an estimate! Scroll down to select categories. You can customize categories later too!</Text>
                </View>

                <Image 
                    source={require('../../assets/onboarding/mark-categories.png')} 
                    resizeMode='contain'
                    style={{
                        width: 300,
                        height: 300,
                        alignContent: 'center'
                    }}
                />

                <View>
                    <Text style={{
                        color: '#264653',
                        textAlign: 'left',
                        fontSize: 20,
                        paddingVertical: 5,
                        marginHorizontal: 20
                        }}>(Optional)</Text>
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

                <View style={{
                    alignContent: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'stretch',
                    width: 400
                }}> 
                    {/* Back Button */}
                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={styles.buttonText}>     Back     </Text>
                    </TouchableOpacity>

                    {/* Continue Button */}
                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={() => {navigation.navigate('categories')}}
                    >
                        <Text style={styles.buttonText}> Continue </Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SelectCategory;