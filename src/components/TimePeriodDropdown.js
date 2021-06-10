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
                alignItems:'center',
                width: 200,
                marginVertical: 10
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

export default TimePeriodDropdown;