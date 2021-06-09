import React, { useState } from 'react';
import { View } from 'react-native';
import NumberTextInput from '../components/NumberTextInput';
import TimePeriodDropdown from '../components/TimePeriodDropdown';
import categories from '../data/categories';
import styles from '../styles/onboardingStyle';



const CategoryDetail = (props) => {

    //check the props for each category in the array
    function categoryChecked(props) {
        const isChecked = props.checked;
        const item = props.title;

        if (isChecked) {
            return(
                <View>
                    <Text style={styles.emphasizeText}>I spend</Text>
                    <NumberTextInput />
                    <Text style={styles.emphasizeText}>on {item.title} time(s) per</Text>
                    <TimePeriodDropdown />
                </View>
            );
        }
    }

    return (
        categories.forEach(element => {
            if (element.checked) {
                categoryChecked(element);
            }
        })
    );

};

export default CategoryDetail;