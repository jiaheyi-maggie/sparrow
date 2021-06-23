import React from 'react';
import { SafeAreaView, View, Text, ScrollView, FlatList, TouchableOpacity } from 'react-native';

import BudgetCircle from '../../components/BudgetCircle';
import SummaryListItem from '../../components/SummaryListItem';

import store from '../../app/store';

import styles from '../../styles/onboardingStyle';

const BudgetOverview = ({ navigation }) => {

    // extract whole category list from store
    const list = store.getState().reducer;
    const longTermValue = store.getState().longTerm[0];
    const shortTermValue = store.getState().shortTerm[0];

    return (
        <SafeAreaView style={{backgroundColor: '#fff'}}>
            <ScrollView style={styles.scrollviewContainer}>
                <Text style={styles.title}>Budget Overview </Text>
                <Text style={styles.subtitle}>Tap on any number to edit!</Text>

                <View style={{flexDirection: 'row', padding: 10}}>
                    {/* LITTLE FUCKER WHY DON"T YOU WORK */}
                    <BudgetCircle term={''} value={shortTermValue} />
                    <BudgetCircle term={'Non-'} value={longTermValue} />
                </View>

                <FlatList 
                    data={list}
                    renderItem={({ item }) => (
                        <SummaryListItem item={item}  />
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

                    {/* Next Button */}
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('register')}>
                        <Text style={styles.buttonText}> Looks Good! </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default BudgetOverview; 