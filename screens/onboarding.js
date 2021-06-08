import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Alert, SafeAreaView, FlatList, ScrollView, TextInput } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import styles from '../styles/onboardingStyle';
import categories from '../data/categories';
import ListItem from '../components/ListItem';
import NumberTextInput from '../components/NumberTextInput';
import TimePeriodDropdown from '../components/TimePeriodDropdown';
import CategoryDetail from './category-detail';
import BudgetCircle from '../components/BudgetCircle';


//dummy onPress 
const dummyPress = () => Alert.alert("Button pressed");


// render items with checkbox
const renderItem = ({ item }) => (
    <ListItem title={item.title} />
);

// // render items without checkbox
// const

// Done Button
const DoneButton = ({ ... props}) => (
    <TouchableOpacity
    style={styles.buttonContainer}
    { ... props}
    >
        <Text style={styles.buttonText}> Done </Text>
    </TouchableOpacity>
);

// Continue Button
const ContinueButton = ({ ... props}) => (
<TouchableOpacity
    style={styles.buttonContainer}
    {...props}
>
    <Text style={styles.buttonText}> Continue </Text>
</TouchableOpacity>
);

// Skip Button
const SkipButton = ({ ... props}) => (
    <TouchableOpacity
      style={styles.buttonContainer}
      { ... props}
    >
        <Text style={styles.buttonText}> Skip </Text>
    </TouchableOpacity>
);




// Onboarding swipper
const onboarding = ({navigation}) => {  
    return (
        <Onboarding
        NextButtonComponent={ContinueButton}
        SkipButtonComponent={SkipButton}
        DoneButtonComponent={DoneButton}

        onSkip={() => navigation.navigate('login')}
        onDone={() => navigation.navigate('login')}

        pages={[
            /* Welcome Page */
            {
                title: '',
                subtitle: '',
                backgroundColor: '#fff',
                image: (
                    <SafeAreaView style={styles.withTitleContainer}>
                        <View>
                            <Text style={styles.title}> Welcome </Text>
                            </View>
                        <View>
                            <Text style={styles.subtitle}>Congrats on taking the fist step to managing your money efficiently! Let us get to know your spending habits with some basic questions :))</Text>
                            </View>
                        <Image 
                            source={require('../assets/onboarding/welcome.png')} 
                            resizeMode='contain'
                            style={styles.imageContainer}
                            />
                    </SafeAreaView>
                ),
            },

            //TODO: checkbox connects to backend
            /* Select Category Page */
            {
                title: '',
                subtitle: '',
                backgroundColor: '#fff',
                image: (
                    <SafeAreaView style={styles.safeareaWithScroll}>
                        <ScrollView style={styles.scrollviewContainer}>
                            <View>
                                <Text style={styles.longtitle}>Mark all categories where you have a good sense of how much you spend.</Text>
                                </View>
                            <View>
                                <Text style={styles.subtitle}>This does not have to be perfect, just an estimate! Scroll down to select categories.</Text>
                                </View>
                            <Image 
                                source={require('../assets/onboarding/mark-categories.png')} 
                                resizeMode='contain'
                                style={styles.imageContainer}
                                />
                            <FlatList
                                data={categories}
                                renderItem={renderItem}
                                keyExtractor={item => item.id}
                                />
                        </ScrollView>
                    </SafeAreaView>

                ),
            },
            // {
            //     title: '',
            //     subtitle: '',
            //     backgroundColor: '#fff',
            //     image: (
            //         <CategoryDetail /> 
            //     ),
            // },

            /* Long Term Budget Page */
            {
                title: '',
                subtitle: '',
                backgroundColor: '#fff',
                image: ( 
                    <SafeAreaView style={styles.withTitleContainer}>
                        <View>
                            <Text style={styles.title}>Do you have a long-term budget? </Text>
                        </View>
                        <View>
                            <Text style={styles.subtitle}>This way we can start by suggesting a budget that works for you. </Text>
                        </View>
                        <View style={{alignItems: 'center'}}>
                            <Text style={styles.emphasizeText}>I plan to spend</Text>
                            <NumberTextInput />
                            <Text style={styles.emphasizeText}>per</Text>
                            <TimePeriodDropdown />
                        </View>

                        <Image 
                            source={require('../assets/onboarding/long-term.png')} 
                            resizeMode='contain'
                            style={styles.imageContainer}
                            />
                    </SafeAreaView>
                ),
            },
            // TODO: change dummy numbers
            /* Budget Overview Page */
            {
                title: '',
                subtitle: '',
                backgroundColor: '#fff',
                image: ( 
                    <SafeAreaView style={styles.safeareaWithScroll}>
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
                                    data={categories}
                                    renderItem={renderItem}
                                    keyExtractor={item => item.id}
                                    />
                        </ScrollView>
                    </SafeAreaView>

                ),
            },
        ]}
        />
    );
};


export default onboarding;
