import React  from 'react';
import { View, Text, Image, TouchableOpacity, Alert, SafeAreaView, FlatList, ScrollView } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import styles from '../styles/onboardingStyle';
import categories from '../data/categories';
import ListItem from '../components/ListItem';



//dummy onPress 
const dummyPress = () => Alert.alert("Button pressed");

//TODO: checkbox component


// function to render list items
// TODO: add checkbox
const renderItem = ({ item }) => (
    <ListItem title={item.title} />
);


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
            {
                title: '',
                subtitle: '',
                backgroundColor: '#fff',
                image: (
                <SafeAreaView>
                    <View>
                        <Text style={styles.title}>Welcome </Text>
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
            {
                title: '',
                subtitle: '',
                backgroundColor: '#fff',
                image: (
                <ScrollView style={styles.scrollviewContainer}>
                    <SafeAreaView>
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
                    </SafeAreaView>
                </ScrollView>
                ),
            },

            //TODO: Render a page for each category selected
            {
                title: '',
                subtitle: '',
                backgroundColor: '#fff',
                image: (
                <SafeAreaView>
                    <View>
                        <Text style={styles.title}>Do you have a long-term budget? </Text>
                        </View>
                    <View>
                        <Text style={styles.subtitle}>This way we can start by suggesting a budget that works for you. </Text>
                        </View>
                    <Image 
                        source={require('../assets/onboarding/long-term.png')} 
                        resizeMode='contain'
                        style={styles.imageContainer}
                        />
                    </SafeAreaView>
                ),
            },
        ]}
        />
    );
};


export default onboarding;
