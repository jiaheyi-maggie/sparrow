import React, { useState } from 'react';
import { SafeAreaView, Text, View, TextInput, TouchableOpacity } from 'react-native';
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

    const handleOptionalInput = (value) => {
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
                    {/* <TouchableOpacity value={period}>
                        <Text style={styles.itemDescription}>{period.concat('s')}</Text>
                    </TouchableOpacity> */}
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
