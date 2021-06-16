import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View, Image, TextInput } from 'react-native';
import NumberTextInput from '../../components/NumberTextInput';
import TimePeriodDropdown from '../../components/TimePeriodDropdown';
import styles from '../../styles/onboardingStyle';
import store from '../../app/store';
 

const CategoryDetail = ({ navigation }) => {

    // extract data from store: specific item boolean
    const categories = store.getState();
    const checkedCategories = categories.filter((category) => { return category.checked === true});
    // value of each category
    // const categoryValues = checkedCategories.map((category) => category.value);


    const renderDetailPage = (category) => {
        return (         
            <SafeAreaView style={{
                alignContent: 'center',
                justifyContent: 'center',
                backgroundColor: 'white',
                flex: 1,
                alignItems: 'center'
            }}>
                <View style={{width: 25, height: 200}}>
                    <Text> </Text>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}> 
                    <Text style={styles.itemDescription}>I spend</Text>
                    <Text style={styles.itemDescription}> $</Text>
                    <NumberTextInput item={category} /> 

                    {/* <TextInput
                        style={styles.input}
                        onChangeText={()=>inputHandler()}
                        value={category.value}
                        placeholder="2000"
                        placeholderTextColor='#FFF4CB'
                        keyboardType="numeric"
                    /> */}
                </View>
                
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={styles.itemDescription}>on</Text>
                    <Text style={styles.itemTitle}> {category.title}</Text>
                </View>
    
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={styles.itemDescription}>per </Text>
                    <TimePeriodDropdown /> 
                </View>

                <View style={{width: 25, height: 300}}>
                    <Text> </Text>
                </View>
                
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'stretch',
                    width: 350
                }}> 
                    {/* Back Button */}
                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={() => navigation.goBack()}
                        >
                        <Text style={styles.buttonText}>     Back     </Text>
                    </TouchableOpacity>
    
                    {/* Skip Button : TODO change this so it does to the next detail page */}
                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={() => navigation.navigate('longTerm')}
                        >
                        <Text style={styles.buttonText}>     Skip     </Text>
                    </TouchableOpacity>
    
                    {/* Next Button */}
                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={() => navigation.push('categories')}
                        >
                        <Text style={styles.buttonText}>     Next     </Text>
                    </TouchableOpacity>
    
                </View>
    
            </SafeAreaView>   
        );
    };

    const handleRendering = () => {
        if (checkedCategories.length === 0) {
            return (
                <SafeAreaView style={{
                    flex: 1, 
                    flexDirection: 'column', 
                    justifyContent: 'flex-start',
                    backgroundColor: '#fff',
                    paddingTop: 100,
                    paddingBottom: 20,
                    alignContent: 'center'
                }}>
                    <Text style={styles.title}>No worries!</Text>
                    <Text style={styles.subtitle}>Let's see if you have a long term plan.</Text>
                    <View style={{width: 400, height: 80}}><Text></Text></View>
                    <Image 
                        source={require('../../assets/onboarding/long-term.png')} 
                        resizeMode='contain'
                        style={{
                            width: 400,
                            height: 300,
                        }}
                    />
                    <View style={{width: 400, height: 120}}><Text></Text></View>
                    <TouchableOpacity 
                        style={styles.buttonContainer}
                        onPress={() => navigation.navigate('longTerm')}
                    >
                        <Text style={styles.buttonText}>Next</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            );
        } else {
            return (
                checkedCategories.map((category) => {
                    return renderDetailPage(category);
                })
            );
        }
    }

    return (
        handleRendering()
    );
};

export default CategoryDetail; 