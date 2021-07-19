import React, { useState } from 'react';
import { TouchableOpacity, Text, View, Platform } from "react-native";
import Checkbox from '@react-native-community/checkbox';
import store from '../app/store';
import styles from '../styles/componentStyle';
import { useSelector } from 'react-redux';
import { COLORS, FONTS } from '../constants/theme';

const CategoryItem = ({ item }) => {

    /* Redux data flow */
    // get most updated state for re-rendering
    const checked = useSelector((state) => state.reducer[item.id].checked);
    const colors = [COLORS.yellow, COLORS.orange];
    const [buttonColor, setButtonColor] = useState(colors[0]);

    // action for reducer
    const pressButton = item => {
        return {
            type: 'pressButton',
            payload: item
        }
    };

    // dispatch action
    const pressHandler = () => {
        store.dispatch(pressButton(item));
    }

    const toggleButtonColors = () => {
        if (buttonColor === colors[0]) {
            setButtonColor(colors[1]);
        } else {
            setButtonColor(colors[0]);
        }
    }

    const pressHandleriOS = () => {
        toggleButtonColors();
        store.dispatch(pressButton(item));
    }

    const handlePlatformRendering = () => {
        if (Platform.OS === 'ios') {
            return (
                <TouchableOpacity style={[styles.clickContainer, {backgroundColor: buttonColor}]} onPress={() => pressHandleriOS()}>
                    {/* <View style={[styles.listTextAlign, {justifyContent:'center'}]}> */}
                        <Text style={styles.clickTitle}>{item.title}</Text>
                    {/* </View> */}
                </TouchableOpacity>
            );
        } else {
            return (
                <TouchableOpacity style={styles.clickContainer} onPress={() => pressHandler()}>
                    <View style={styles.listTextAlign}>
                        <Checkbox 
                            disabled={false}
                            value={checked}
                            onValueChange={() => pressHandler()}
                        />

                        <Text style={styles.clickTitle}>{item.title}</Text>
                    </View>
                </TouchableOpacity>
            );
        }
    };

    return (
        handlePlatformRendering()
    );
};


export default CategoryItem;