// replacement ListItem
import React , { useState } from 'react';
import { TouchableOpacity, Text, View } from "react-native";
import Checkbox from '@react-native-community/checkbox';

import styles from '../styles/componentStyle';
import selected from '../data/selected';

const CategoryItem = ({ item, pressHandler }) => {

    // extract data from selected array: specific item boolean
    const [isSelected, setSelected] = useState(selected[item.id].checked);
    
    return (
            <TouchableOpacity
                style={styles.clickContainer}
                onPress={() => pressHandler(item.id)}
            >
                <View style={styles.listTextAlign}>
                    <Checkbox 
                        disabled={false}
                        value={isSelected}
                        onValueChange={() => setSelected(!isSelected)}
                    />

                    <Text style={styles.clickTitle}>
                            {item.title}
                    </Text>
                </View>
            </TouchableOpacity>
    );
};


export default CategoryItem;