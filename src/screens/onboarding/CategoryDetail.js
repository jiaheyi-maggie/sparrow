/* Render Selected Categories List */
import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View, Image, TextInput, ScrollView, FlatList } from 'react-native';

import CategoryDetailItem from '../../components/CategoryDetailItem';

import styles from '../../styles/onboardingStyle';

import store from '../../app/store';

 
const CategoryDetail = ({ navigation }) => {

    // extract data from store: specific item boolean
    const categories = store.getState().reducer; 
    const checkedCategories = categories.filter((category) => { return category.checked === true});

    // render selected items
    const renderList = () => {
        return (
            <SafeAreaView style={styles.safeareaWithScroll}>
                <ScrollView style={styles.scrollviewContainer}>
                    <Text style={styles.longtitle}>How much do you plan to spend on each of those categories?</Text>
                    <Text style={styles.subtitle}>This is the first step to making a budget estimation :)</Text>

                    <FlatList 
                        data={checkedCategories}
                        renderItem={({ item }) => (
                            <CategoryDetailItem item={item}  />
                        )}
                        keyExtractor={item => item.id}
                        contentContainerStyle={{
                            flexGrow: 1,
                        }}
                    />
                </ScrollView>

                {/* Button View  */}
                <View style={styles.multipleButtonContainer}> 
                    {/* Back Button */}
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.goBack()}>
                        <Text style={styles.buttonText}>     Back     </Text>
                    </TouchableOpacity>
    
                    {/* Next Button */}
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.push('longTerm')}>
                        <Text style={styles.buttonText}>     Next     </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }


    // render screen base on selection
    const handleRendering = () => {
        if (checkedCategories.length === 0) {
            return (
                <SafeAreaView style={styles.container}>
                    <Text style={styles.title}>No worries!</Text>
                    <Text style={styles.subtitle}>Let's see if you have a long term plan.</Text>
                    <View style={{width: 400, height: 70}}><Text></Text></View>
                    <Image 
                        source={require('../../assets/onboarding/long-term.png')} 
                        resizeMode='contain'
                        style={{
                            width: 400,
                            height: 300,
                        }}
                    />
                    <View style={{width: 400, height: 150}}><Text></Text></View>
                    {/* Button View */}
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('longTerm')}>
                        <Text style={styles.buttonText}>Next</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            );
        } else {
            // console.log(checkedCategories);
            return (
                renderList()
            );
        }
    }

    return (
        handleRendering()
    );
};

export default CategoryDetail; 