import React from "react";
import { Picker } from '@react-native-picker/picker';
import { useSelector } from "react-redux";
import styles from '../styles/componentStyle';
import store from '../app/store';

const TimePeriodDropdown = ({ item }) => {

    // get state from store
    const period = useSelector((state) => state.reducer[item.id].period);

    // action for reducer
    const changePeriod = item => {
        return {
            type: 'changePeriod',
            payload: item
        }
    };

    // dispatch action
    const handlePeriodChange = () => {
        store.dispatch(changePeriod(item));
    }

    // Map period for calculating sum for budget overview
    const mapPeriodToValue = (selection) => {
        switch (selection) {
            case 'Year':
                return 1;
            case 'Quarter':
                return 4;
            case 'Month':
                return 12;
            case 'Week':
                return 48;
            case 'Day':
                return 365;
        }
    }

    return (
        <Picker 
            selectedValue={period}
            itemStyle={{
                backgroundColor: 'grey',
                color: 'blue',
                fontSize: 20
            }}
            style={styles.dropdown}
            onValueChange={() => handlePeriodChange()}
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