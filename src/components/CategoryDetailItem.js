import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View, Image, TextInput, ScrollView } from 'react-native';
import NumberTextInput from './NumberTextInput';
import TimePeriodDropdown from './TimePeriodDropdown';
import styles from '../styles/onboardingStyle';

const CategoryDetailItem = ({ item }) => {
    return (
        <SafeAreaView style={{
            alignContent: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            alignItems: 'center',
            flex: 1
        }}>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}> 
                <Text style={styles.itemDescription}>I spend</Text>
                <Text style={styles.itemDescription}> $</Text>
                <NumberTextInput item={item} /> 
            </View>

            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={styles.itemDescription}>on</Text>
                    <Text style={styles.itemTitle}> {item.title}</Text>
            </View>
    
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <Text style={styles.itemDescription}>per </Text>
                <TimePeriodDropdown item={item}/> 
            </View>

            {/* <TimePeriodDropdown item={category} /> */}

        </SafeAreaView>
    );
};

export default CategoryDetailItem;
