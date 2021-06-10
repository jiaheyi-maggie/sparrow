import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import NumberTextInput from '../../components/NumberTextInput';
import TimePeriodDropdown from '../../components/TimePeriodDropdown';
import styles from '../../styles/onboardingStyle';

// TODO: checkbox connects to backend, pass in data

//Detail Screen 

const CategoryDetail = ({ navigation, route }) => {

    //get params of route
    // const { checkedCategories } = route.params;

    return (
        <SafeAreaView style={{
            alignItems: 'center', 
            flexDirection: 'column',
            flex: 1, 
            margin: 10, 
            justifyContent: 'center',
            backgroundColor: '#fff'
        }}>
            <Text style={styles.itemDescription}>I spend</Text>

            <NumberTextInput /> 

            <Text style={styles.itemDescription}>on</Text>

            <Text style={styles.itemTitle}>groceries</Text>

            <Text style={styles.itemDescription}>per</Text>

            <TimePeriodDropdown /> 
            
            <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}> 

                {/* Back Button */}
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => navigation.goBack()}
                    >
                    <Text style={styles.buttonText}> Back </Text>
                </TouchableOpacity>

                {/* Skip Button : TODO change this so it does to the next detail page */}
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => navigation.navigate('longTerm')}
                    >
                    <Text style={styles.buttonText}> Skip </Text>
                </TouchableOpacity>

                {/* Next Button */}
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => navigation.navigate('longTerm')}
                    >
                    <Text style={styles.buttonText}> Next </Text>
                </TouchableOpacity>

            </View>

        </SafeAreaView>
    );
};

export default CategoryDetail; 