import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import NumberTextInput from '../../components/NumberTextInput';
import TimePeriodDropdown from '../../components/TimePeriodDropdown';
import styles from '../../styles/onboardingStyle';
import store from '../../app/store';
import { useSelector } from 'react-redux';

// TODO: update title based on category data 

const CategoryDetail = ({ navigation }) => {

    // extract data from store: specific item boolean

    const categories = store.getState();
    console.log('bulllllllshit dick');
    console.log(categories);
    const checkedCategories = categories.filter((category) => { return category.checked === true});
    console.log(checkedCategories);


    // ISSUE: MAP just returns blank page
    const renderDetailPage = () => {
        return (         
            checkedCategories.map((category) => {
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
                    <Text style={styles.itemTitle}>{category.title}</Text>
        
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
             })
        );
    };

    return (
        renderDetailPage()
    );
};

export default CategoryDetail; 