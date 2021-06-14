import React, { useContext } from 'react';
import { CategoriesContext } from './CategoriesContext';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import NumberTextInput from '../../components/NumberTextInput';
import TimePeriodDropdown from '../../components/TimePeriodDropdown';
import styles from '../../styles/onboardingStyle';
import categories from '../../data/categories';


// TODO: checkbox connects to backend, GET PREVIOUS SCREEN DATA FROM NAVIGATION
// TODO: when user add values, store value (in firebase or just onboarding?)

const CategoryDetail = ({ navigation, route }) => {

    // //get params
    // const checkedCategories = useContext(CategoriesContext);

    // ISSUE: MAP just returns blank page
    const renderDetailPage = (categories) => {
        return (         
            categories.map((category) => {
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
        renderDetailPage(categories)
    );
};

export default CategoryDetail; 