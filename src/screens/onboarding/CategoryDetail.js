/* Render Selected Categories List */
import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View, Image, FlatList, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import CategoryDetailItem from '../../components/CategoryDetailItem';
import styles from '../../styles/onboardingStyle';
import store from '../../app/store';
import { COLORS, FONTS } from '../../constants/theme';

 
const CategoryDetail = ({ navigation }) => {

    // extract data from store: specific item boolean
    const categories = store.getState().reducer; 
    const checkedCategories = categories.filter((category) => { return category.checked === true});

    // render selected items
    const renderList = () => {
        if (Platform.OS === 'android') {
            return (
                <SafeAreaView style={styles.container}>
                    {/* header */}
                    <View style={{flexDirection: 'row', justifyContent:'space-between',alignItems: 'baseline'}}>
                        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}} onPress={() => navigation.goBack()}>
                            <Image 
                                source={require('../../assets/Icons/back.png')}
                                resizeMode='contain'
                                style={styles.backButton}
                            />
                            <Text style={styles.forwardButtonText}> Back </Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}} onPress={() => navigation.navigate('longTerm')}>
                            <Text style={styles.forwardButtonText}> Next </Text>
                            <Image 
                                source={require('../../assets/Icons/right-arrow.png')}
                                resizeMode='contain'
                                style={styles.backButton}
                            />
                        </TouchableOpacity>
                    </View>
                    
                    <ScrollView>
                        <Text style={styles.longtitle}>How much do you plan to spend on each of those categories?</Text>
                        <Text style={styles.subtitle}>This is the first step to making a budget estimation.</Text>

                        <FlatList 
                            data={checkedCategories}
                            renderItem={({ item }) => (
                                <CategoryDetailItem item={item} />
                            )}
                            keyExtractor={item => item.id}
                            contentContainerStyle={{
                                flexGrow: 1,
                            }}
                        />
                    </ScrollView>
                   
                </SafeAreaView>
            );
        } else {
            return (
                <KeyboardAvoidingView style={styles.containeriOS} behavior='height'>
                <SafeAreaView style={styles.containeriOS}>
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
                            <TouchableOpacity style={styles.forwardButton} onPress={() => navigation.navigate('longTerm')}>
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

                        <Text style={styles.longtitle}>How much do you plan to spend on each of those categories?</Text>
                        <Text style={styles.subtitle}>This is the first step to making a budget estimation.</Text>

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
                </SafeAreaView>
                </KeyboardAvoidingView>
            );
        }
    }


    // render screen base on selection
    const handleRendering = () => {
        if (checkedCategories.length === 0) {
            return (
                <SafeAreaView style={[styles.container, {justifyContent: 'flex-start'}]}>
                    {/* header */}
                    <View style={{flexDirection: 'row', justifyContent:'space-between',alignItems: 'baseline'}}>
                        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}} onPress={() => navigation.goBack()}>
                            <Image 
                                source={require('../../assets/Icons/back.png')}
                                resizeMode='contain'
                                style={styles.backButton}
                            />
                            <Text style={styles.forwardButtonText}> Back </Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}} onPress={() => navigation.navigate('longTerm')}>
                            <Text style={styles.forwardButtonText}> Next </Text>
                            <Image 
                                source={require('../../assets/Icons/right-arrow.png')}
                                resizeMode='contain'
                                style={styles.backButton}
                            />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.title}>No worries!</Text>
                    <Text style={styles.subtitle}>Let's see if you have a plan for non-recurring spendings.</Text>
                    <View style={{width: 400, height: 70}}><Text></Text></View>
                    <Image 
                        source={require('../../assets/onboarding/relax.png')} 
                        resizeMode='contain'
                        style={styles.imageContainer}
                    />
                </SafeAreaView>
            );
        } else {
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