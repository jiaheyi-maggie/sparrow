import React from 'react';
import { SafeAreaView, View, Text, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import categories from '../../data/categories';
import styles from '../../styles/onboardingStyle';
import BudgetCircle from '../../components/BudgetCircle';
import SummaryListItem from '../../components/SummaryListItem';
import store from '../../app/store';

const BudgetOverview = ({ navigation }) => {

    // extract data from store: specific item boolean
    const list = store.getState();

    return (
        <SafeAreaView style={{backgroundColor: '#fff', paddingTop: 40}}>
            
            <ScrollView style={styles.scrollviewContainer}>

                <View>
                    <Text style={styles.title}>Budget Overview </Text>
                </View>

                <View>
                    <Text style={styles.subtitle}>Tap on any number to edit!</Text>
                </View>

                <View style={{flexDirection: 'row', padding: 10}}>
                    <BudgetCircle term={'Short'} />
                    <BudgetCircle term={'Long'} />
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

                {/* <FlatList
                        data={list}
                        renderItem={renderList}
                        keyExtractor={item => item.id}
                /> */}

                <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}> 
                    {/* Back Button */}
                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={() => navigation.goBack()}
                        >
                        <Text style={styles.buttonText}> Back </Text>
                    </TouchableOpacity>

                    {/* Next Button */}
                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={() => navigation.navigate('register')}
                        >
                        <Text style={styles.buttonText}> Looks Good! </Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>

        </SafeAreaView>
    );
};

export default BudgetOverview; 