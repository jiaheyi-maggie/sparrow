// replacement ListItem
import React , { useState } from 'react';
import { TouchableOpacity, Text, View } from "react-native";
import Checkbox from '@react-native-community/checkbox';
import { useDispatch } from 'react-redux';
import { toggleCheck } from '../screens/onboarding/selectCategorySlice';
import onboardingStore from '../app/onboardingStore';

import styles from '../styles/componentStyle';
import selected from '../data/selected';

const CategoryItem = ({ item, pressHandler, checked }) => {

    // extract data from selected array: specific item boolean
    // const [isSelected, setSelected] = useState(selected[item.id].checked);
    const dispatch = useDispatch();

	const handleCheckboxClick = (id) => {
		dispatch(toggleCheck({ id, checked: !checked }));
        console.log(onboardingStore.categories);
	};
    
    return (
            <TouchableOpacity
                style={styles.clickContainer}
                // onPress={() => pressHandler(item.id)}
                onPress={pressHandler(item.id)}
            >
                <View style={styles.listTextAlign}>
                    <Checkbox 
                        disabled={false}
                        value={checked}
                        onValueChange={pressHandler(item.id)}
                    />

                    <Text style={styles.clickTitle}>
                            {item.title}
                    </Text>
                </View>
            </TouchableOpacity>
    );
};


export default CategoryItem;