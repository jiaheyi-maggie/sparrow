import React, { useState } from "react";
import { View } from "react-native";
import { Picker } from '@react-native-picker/picker';
import styles from '../styles/componentStyle';

const TimePeriodDropdown = () => {
    const [selected, setSelected ] = useState("year");
    return (
        <View style={{ 
                borderWidth: 3, 
                borderColor: '#264653', 
                borderRadius: 4,
                marginHorizontal: 100,
                alignItems:'center'
                }}>
            <Picker 
                selectedValue={selected}
                itemStyle={styles.pickerItem}
                style={styles.dropdown}
                onValueChange={(itemValue, itemIndex) => setSelected(itemValue)}
                >
                <Picker.Item label="Year" value="Year" />
                <Picker.Item label="Quarter" value="Quarter" />
                <Picker.Item label="Month" value="Month" />
                <Picker.Item label="Week" value="Week" />
            </Picker>
        </View>
    );
};

export default TimePeriodDropdown;