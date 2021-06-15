import React, { useState } from "react";
import { View } from "react-native";
import { Picker } from '@react-native-picker/picker';
import styles from '../styles/componentStyle';

const TimePeriodDropdown = () => {
    const [selected, setSelected ] = useState("year");
    return (
        <View >
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
        </View>
    );
};

export default TimePeriodDropdown;