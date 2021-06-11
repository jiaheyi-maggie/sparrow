// replacement ListItem
import React  from 'react';
import { TouchableOpacity, Text, View } from "react-native";
import Checkbox from '@react-native-community/checkbox';
import { useState } from 'react/cjs/react.development';

import styles from '../styles/componentStyle';
import categories from '../data/categories';

const CategoryItem = ({ item, pressHandler }) => {

    // extract data from selected array: specific item boolean
    // const [isSelected, setSelected] = useState(selected[item.id].checked);
    const [isSelected, setSelected] = useState(categories[item.id].checked);

    const handleCheckbox = () => {
        setSelected(categories[item.id].checked = !categories[item.id].checked);
        console.log(isSelected);
    }

    return (
                <TouchableOpacity
                    style={styles.clickContainer}
                    onPress={() => pressHandler(item.id)}
                >

                    <View style={styles.listTextAlign}>
                        <Checkbox 
                            disabled={false}
                            value={isSelected}
                            onValueChange={handleCheckbox}
                        />

                        <Text style={styles.clickTitle}>
                                {item.title}
                        </Text>
                    </View>
                </TouchableOpacity>
    );
};


export default CategoryItem;