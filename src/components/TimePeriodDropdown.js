import React, { useState } from "react";
import { View } from "react-native";
import { Picker } from '@react-native-picker/picker';
import { useSelector } from "react-redux";
import styles from '../styles/componentStyle';

const TimePeriodDropdown = ({ item }) => {

    // get state from store
    const checked = useSelector((state) => state[item.id].checked);

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

    // map period 

    const [selected, setSelected ] = useState("year");
    return (
        <Picker 
            selectedValue={selected}
            itemStyle={{
                backgroundColor: 'grey',
                color: 'blue',
                fontSize: 20
            }}
            style={styles.dropdown}
            onValueChange={(itemValue, itemIndex) => setSelected(itemValue)}
            >
            <Picker.Item label="Year" value="Year" color='#264653'/>
            <Picker.Item label="Quarter" value="Quarter" color='#264653'/>
            <Picker.Item label="Month" value="Month" color='#264653'/>
            <Picker.Item label="Week" value="Week" color='#264653'/>
            <Picker.Item label="Day" value="Day" color='#264653'/>
        </Picker>
    );
};

export default TimePeriodDropdown;