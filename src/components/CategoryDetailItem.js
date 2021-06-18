import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View, Image, TextInput, ScrollView } from 'react-native';
import ModalPicker from './ModalPicker';
import store from '../app/store';
import styles from '../styles/onboardingStyle';

const CategoryDetailItem = ({ item }) => {

    const [value, setValue] = useState(null);

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
        <SafeAreaView style={styles.categoryCard}>
            <View style={styles.genericRowAlign}>
                <Text style={styles.itemTitle}>{item.title} :</Text>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <View style={styles.textInputContainer}>
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
                {/* <TimePeriodDropdown item={item}/>  */}
                <ModalPicker item={item}/>
            </View>
        </SafeAreaView>
    );
};

export default CategoryDetailItem;
