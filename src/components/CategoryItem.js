// replacement ListItem
import React from 'react';
import { TouchableOpacity, Text, View } from "react-native";
import Checkbox from '@react-native-community/checkbox';
import onboardingStore from '../app/onboardingStore';

import styles from '../styles/componentStyle';

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