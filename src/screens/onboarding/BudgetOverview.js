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

    /* Calculate Short Term */

    // convert to monthly value based on current period
    const calculateMonthlySumBasedOnPeriod = (p, v) => {
        if (v === 0) {
            return 0;
        }
        switch (p) {
            case 'Year':
                const val = Math.floor(v / 12);
                return val;
            case 'Quarter':
                return Math.floor(v / 4);
            case 'Month':
                return v;
            case 'Week':
                return v * 4;
            case 'Day':
                return v * 30;
            default:
                return v;
        }
    }

    // sum short term value in store based on categories: works
    const calculateShortTermValue = (l) => {
        var shortTermValue = 0; 
        l.forEach((category) => {
            const currVal = calculateMonthlySumBasedOnPeriod(category.period, category.value);
            shortTermValue += parseFloat(currVal);
        });
        console.log("fuck");
        console.log(shortTermValue);
        return shortTermValue;
    };

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