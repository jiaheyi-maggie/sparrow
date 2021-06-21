import React, { useState } from 'react';
import { SafeAreaView, Text, View, TextInput, Alert } from 'react-native';
import ModalPicker from './picker/ModalPicker';
import store from '../app/store';
import styles from '../styles/onboardingStyle';

const CategoryDetailItem = ({ item }) => {

    // TODO: Immediately force renders the text
    const period = store.getState().reducer[item.id].period;

    const [value, setValue] = useState(null);
    const [optional, setOptional] = useState(null);

    // action to update redux
    const updateValue = value => {
        return {
            type: 'updateValue',
            payload: {item, value}
        };
    }

    const updateOptional = value => {
        return {
            type: 'updateOptional',
            payload: {item, value}
        };
    }

    // functions to handle input 
    const handleTextInput = (value) => {
        setValue(value);
        store.dispatch(updateValue(value));
    };


    // handle optional input with error catch
    const handleOptionalInput = (value) => {
        switch (period) {
            case 'quarter': 
                if (value > 4) {
                    Alert.alert(
                        'Input not valid',
                        'Cannot have more than 4 quarters in a year :(',
                        [
                            { text: "OK" }
                        ],
                        { cancelable: true }
                    )
                }
            case 'month':
                if (value > 12) {
                    Alert.alert(
                        'Input not valid',
                        'Cannot have more than 12 months in a year :(',
                        [
                            { text: "OK" }
                        ],
                        { cancelable: true }
                    )
                }
            case 'week':
                if (value > 48) {
                    Alert.alert(
                        'Input not valid',
                        'Cannot have more than 48 weeks in a year :(',
                        [
                            { text: "OK" }
                        ],
                        { cancelable: true }
                    )
                }
            case 'day':
                if (value > 365) {
                    Alert.alert(
                        'Input not valid',
                        'Cannot have more than 365 days in a year :(',
                        [
                            { text: "OK" }
                        ],
                        { cancelable: true }
                    )
                }
        }
        setOptional(value);
        store.dispatch(updateOptional(value));
    };

    const handleConditionalPeriodSelection = () => {
        if (period === 'year') {
            return (
                <SafeAreaView style={styles.categoryCard}>
                <View style={styles.genericRowAlign}>
                    <Text style={styles.itemTitle}>{item.title} :</Text>
                </View>
    
                <View style={styles.genericRowAlign}>
                    <View style={styles.textInputContainer}>
                        <Text style={styles.itemDescription}>$ </Text>
                        <TextInput
                            style={{
                                fontSize: 30,
                                fontWeight: 'bold',
                                textAlign: 'center'
                            }}
                            value={value}
                            onChangeText={(value) => handleTextInput(value)}
                            placeholder=" 200 "
                            placeholderTextColor='#D7CEB2'
                            keyboardType="phone-pad"
                        />
                    </View>
                    <Text style={styles.itemDescription}> per </Text>
                    <ModalPicker item={item}/>
                </View>
            </SafeAreaView>
            );
        } else {
            return (
                <SafeAreaView style={styles.categoryCard}>
                <View style={styles.genericRowAlign}>
                    <Text style={styles.itemTitle}>{item.title} :</Text>
                </View>
    
                <View style={styles.genericRowAlign}>
                    <View style={styles.textInputContainer}>
                        <Text style={styles.itemDescription}>$</Text>
                        <TextInput
                            style={{
                                fontSize: 30,
                                fontWeight: 'bold'
                            }}
                            value={value}
                            onChangeText={(value) => handleTextInput(value)}
                            placeholder=" 200 "
                            placeholderTextColor='#D7CEB2'
                            keyboardType="phone-pad"
                        />
                    </View>
                    <Text style={styles.itemDescription}> per </Text>
                    <ModalPicker item={item}/>
                </View>
    
                {/* TODO: update field of categories for later calculation */}
                <View style={styles.genericRowAlign}>
                    <Text style={styles.itemDescription}>for</Text>
                    <View style={styles.textInputContainer}>
                        <TextInput
                            style={{
                                fontSize: 30,
                                fontWeight: 'bold'
                            }}
                            value={optional}
                            // TODO: add field in categories and handle input
                            onChangeText={(value) => handleOptionalInput(value)}
                            placeholder=" 12 "
                            placeholderTextColor='#D7CEB2'
                            keyboardType="phone-pad"
                        />
                    </View>
                    <Text style={styles.itemDescription}>{period.concat('s')}</Text>
                    <Text style={styles.itemDescription}> per year</Text>
                </View>
            </SafeAreaView>
            );
        }
    }

    return (
        handleConditionalPeriodSelection()
    );
};

export default CategoryDetailItem;
