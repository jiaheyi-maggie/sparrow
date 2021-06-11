// replacement ListItem
import React  from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import Checkbox from '@react-native-community/checkbox';
import { useState } from 'react/cjs/react.development';
import selected from '../data/selected';
import styles from '../styles/componentStyle';

const CategoryItem = ({ item, pressHandler }) => {

    // extract data from selected array
    const [isSelected, setSelected] = useState(selected[item.id].checked);

    const handleCheckbox = () => {
        setSelected(selected[item.id].checked = !selected[item.id].checked);
        console.log(isSelected);
        console.log(selected);
    }

    return (
                <TouchableOpacity
                    style={styles.clickContainer}
                    onPress={() => pressHandler(item.id)}
                >

                    <View style={styles.listTextAlign}>
                        <Checkbox 
                            disabled={false}
                            value={!isSelected}
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