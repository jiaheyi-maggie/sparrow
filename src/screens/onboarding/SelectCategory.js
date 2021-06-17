/* Onboarding Select Categories Page */
import React from 'react';
import { SafeAreaView, View, Text, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import styles from "../../styles/onboardingStyle";

import CategoryItem from '../../components/CategoryItem';
import categories from '../../data/categories-bool';

const SelectCategory = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.safeareaWithScroll}>
            <ScrollView style={styles.scrollviewContainer}>
                <Text style={styles.longtitle}>Mark all categories where you have a good sense of how much you spend.</Text>
                <Text style={styles.subtitle}>This does not have to be perfect, just an estimate! Scroll down to select categories. You can customize these later too!</Text>

                <Image 
                    source={require('../../assets/onboarding/mark-categories.png')} 
                    resizeMode='contain'
                    style={styles.smallImage}
                />

                <Text style={styles.optionalText}>(Optional)</Text>

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
                <View style={styles.multipleButtonContainer}> 
                    {/* Back Button */}
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.goBack()}>
                        <Text style={styles.buttonText}>     Back     </Text>
                    </TouchableOpacity>

                    {/* Continue Button */}
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => {navigation.navigate('categories')}}>
                        <Text style={styles.buttonText}>   Continue   </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SelectCategory;