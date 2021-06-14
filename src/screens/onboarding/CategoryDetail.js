import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import NumberTextInput from '../../components/NumberTextInput';
import TimePeriodDropdown from '../../components/TimePeriodDropdown';
import styles from '../../styles/onboardingStyle';

// TODO: checkbox connects to backend, GET PREVIOUS SCREEN DATA FROM NAVIGATION

const CategoryDetail = ({ navigation, route }) => {

    //get params
    const { checkedCategories } = route.checkedCategories;
    const { selectedList } = route.selectedList;

    // iterate through selectedList; if checked, then render
    const renderCategories = () => {
        for (var i in selectedList) {
            if (selectedList[i].checked = true) {
                return (
                    
                    <Text style={styles.itemTitle}>{checkedCategories[i].title}</Text>
                );
            }
        }
    }

    return (
        <SafeAreaView style={{        
            alignItems: 'center', 
            flexDirection: 'column',
            flex: 1, 
            justifyContent: 'center',
            backgroundColor: '#fff'
        }}>
            <Text style={styles.itemDescription}>I spend</Text>

            <NumberTextInput /> 

            <Text style={styles.itemDescription}>on</Text>

            {/* pass categories into here */}
            <Text style={styles.itemTitle}>groceries</Text>

            <Text style={styles.itemDescription}>per</Text>

            <TimePeriodDropdown /> 
            
            <View style={{flexDirection: 'row'}}> 

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