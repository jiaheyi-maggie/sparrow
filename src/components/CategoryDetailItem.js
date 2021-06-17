import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View, Image, TextInput, ScrollView } from 'react-native';
import NumberTextInput from './NumberTextInput';
import TimePeriodDropdown from './TimePeriodDropdown';
import store from '../app/store';
import styles from '../styles/onboardingStyle';

const CategoryDetailItem = ({ item }) => {

    // TODO: update redux when value changes
    // Dummy text input
    const [value, setValue] = useState(0);

    // update redux into categories' value field
    const updateValue = value => {
        return {
            type: 'updateValue',
            payload: {item, value}
        }
    }

    const handleTextInput = (value) => {
        setValue(value);
        store.dispatch(updateValue(value));
    }

    return (
        <SafeAreaView style={{
            alignContent: 'center',
            backgroundColor: 'aliceblue',
            alignItems: 'flex-start',
            borderRadius: 15,
            padding: 20,
            margin: 10,
            flex: 1
        }}>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <Text style={styles.itemTitle}> {item.title} :</Text>
            </View>

            <View style={{
                flexDirection: 'row', 
                alignItems: 'center', 
                justifyContent: 'center'
            }}>
                <View style={{
                    borderBottomWidth: 3,
                    borderBottomColor: '#264653',
                    flexDirection: 'row'
                }}>
                    <Text style={styles.itemDescription}>$</Text>
                    <TextInput
                        style={{
                            fontSize: 30,
                            fontWeight: 'bold'
                        }}
                        value={value}
                        onChangeText={(value) => handleTextInput(value)}
                        placeholder=" 2000 "
                        placeholderTextColor='#D7CEB2'
                        keyboardType="numeric"
                    />
                    
                </View>
                <Text style={styles.itemDescription}> per </Text>
                <TimePeriodDropdown item={item}/> 
            </View>

            {/* <TimePeriodDropdown item={category} /> */}

        </SafeAreaView>
    );
};

export default CategoryDetailItem;
