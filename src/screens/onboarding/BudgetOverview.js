import React from 'react';
import { SafeAreaView, View, Text, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import styles from '../../styles/onboardingStyle';
import BudgetCircle from '../../components/BudgetCircle';
import SummaryListItem from '../../components/SummaryListItem';
import store from '../../app/store';

const BudgetOverview = ({ navigation }) => {

    // extract whole category list from store
    const list = store.getState().reducer;
    const longTermValue = store.getState().longTerm;

    // calculate initial sum based on "period" and "value" of item
    // return monthly value
    const calculateMonthlySumBasedOnPeriod = (p, v) => {
        switch (p) {
            case p === 'Year':
                return v / 12;
            case p === 'Quarter':
                return Math.floor(v / 4);
            case p === 'Month':
                return v;
            case p === 'Week':
                return v * 4;
            case p === 'Day':
                return v * 30;
            default:
                return v;
        }
    }

    // calculate short term value in store based on categories
    const calculateShortTermValue = (l) => {
        var shortTermValue = 0; 
        l.forEach((category) => {
            shortTermValue += calculateMonthlySumBasedOnPeriod(category.period, category.value);
        })
        console.log(shortTermValue);
        return shortTermValue;
    } 

    // const shortTermValue = longTermValue / 12;
    const shortTermValue = calculateShortTermValue(list);


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
                    <BudgetCircle term={'Short'} value={shortTermValue} />
                    <BudgetCircle term={'Long'} value={longTermValue} />
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

                <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}> 
                    {/* Back Button */}
                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={() => navigation.goBack()}
                        >
                        <Text style={styles.buttonText}>     Back     </Text>
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