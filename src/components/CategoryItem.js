// replacement ListItem
import React , { useState } from 'react';
import { TouchableOpacity, Text, View } from "react-native";
import Checkbox from '@react-native-community/checkbox';
import { useDispatch } from 'react-redux';
import { toggleCheck } from '../screens/onboarding/selectCategorySlice';
import { toggleCheckMaybe } from '../screens/onboarding/selectCategorySlice';
import onboardingStore from '../app/onboardingStore';

import styles from '../styles/componentStyle';
import selected from '../data/selected';

const CategoryItem = ({ item, checked }) => {

    // action for reducer
    const pressButton = item => {
        return {
            type: 'pressButton',
            payload: item
        }
    };

    const pressHandler = () => {
        onboardingStore.dispatch(pressButton(item));
    }

    return (
            <TouchableOpacity
                style={styles.clickContainer}
                // onPress={pressHandler()}
                onPress={() => pressHandler()}
            >
                <View style={styles.listTextAlign}>
                    <Checkbox 
                        disabled={false}
                        value={checked}
                        onValueChange={() => pressHandler()}
                    />

                    <Text style={styles.clickTitle}>
                        {item.title}
                    </Text>
                </View>
            </TouchableOpacity>
    );
};


export default CategoryItem;