import React, { useState } from "react";
import { View } from "react-native";
import { Picker } from '@react-native-picker/picker';
import styles from '../styles/componentStyle';

const TimePicker = () => {
    //TODO: fix time picker style
    const [selected, setSelected ] = useState("year");
    return (
        <View style={{ 
                alignItems: 'center',
                width: 30,
                padding: 10
                }}>
            <Picker 
                selectedValue={selected}
                itemStyle={styles.pickerItem}
                style={styles.dropdown}
                onValueChange={(itemValue, itemIndex) => setSelected(itemValue)}
                >
                <Picker.Item label="Year" value="Year" color='#264653'/>
                <Picker.Item label="Quarter" value="Quarter" color='#264653'/>
                <Picker.Item label="Month" value="Month" color='#264653'/>
                <Picker.Item label="Week" value="Week" color='#264653'/>
                <Picker.Item label="Day" value="Day" color='#264653'/>
            </Picker>
        </View>
    );
};

export default TimePicker;