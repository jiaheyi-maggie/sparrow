import React, { useState } from 'react';
import { TouchableOpacity, Text, View } from "react-native";
import Checkbox from '@react-native-community/checkbox';
import store from '../../app/store';
import styles from '../../styles/homeStyle';

const ListItem = ({ item }) => {

    const checked = store.getState().user.categories[item.id].checked;

    const removeBudget = item => {
        return {
            type: 'REMOVE_BUDGET',
            payload: item
        }
    };

    const pressHandler = () => {
        store.dispatch(removeBudget(item));
    };

    return (
        <TouchableOpacity style={styles.listContainer} onPress={() => pressHandler()}>
            <Text style={styles.listText}>{item.title}</Text>
            <Checkbox 
                disabled={false}
                value={!checked}
                onValueChange={() => pressHandler()}
            />
        </TouchableOpacity>
    );
};


export default ListItem;