import React  from 'react';
import { View, Text, Image, TouchableOpacity, Alert, SafeAreaView, FlatList } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import styles from '../styles/onboardingStyle';


//dummy onPress 
const dummyPress = () => Alert.alert("Button pressed");

// function that generates unique id for each categories
function guidGenerator() {
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}

// Categories for the category selection page
const DATA = [
    {
        id: guidGenerator(),
        title: 'Groceries',
    },
    {
        id: guidGenerator(),
        title: 'Utilities',
    },
    {
        id: guidGenerator(),
        title: 'Eating Out',
    },
    {
        id: guidGenerator(),
        title: 'Rent',
    },
    {
        id: guidGenerator(),
        title: 'Entertainment',
    },
    {
        id: guidGenerator(),
        title: 'Gas/Transportation',
    },
    {
        id: guidGenerator(),
        title: 'Insurance',
    },
    {
        id: guidGenerator(),
        title: 'Debt',
    },
  ];


  // Category list item
  const ListItem = ({ title }) => (
    <View style={styles.listitem}>
      <Text style={styles.listtitle}>{title}</Text>
    </View>
  );

  // function to render list items
  const renderItem = ({ item }) => (
      <ListItem title={item.title} />
  );


/* TODO: Pass in title instead of having hard-coded button titles */

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
                // TODO: Need a Flatlist for category selection
                title: '',
                subtitle: '',
                backgroundColor: '#fff',
                image: (
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
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                    </SafeAreaView>
                ),
            },
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
