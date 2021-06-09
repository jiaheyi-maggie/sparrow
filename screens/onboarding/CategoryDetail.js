import React from 'react';
import { SafeAreaView, View, Text, Image } from 'react-native';
import categories from '../../data/categories';
import NumberTextInput from '../../components/NumberTextInput';
import TimePeriodDropdown from '../../components/TimePeriodDropdown';

// TODO: checkbox connects to backend

const CategoryDetail = ( { item } ) => {
    return (
        <SafeAreaView style={{alignItems: 'center', flexDirection: 'column', margin: 5, justifyContent: 'center'}}>
            <Text>I spend</Text>
            <NumberTextInput /> 
            <Text>on</Text>
            <Text>{item.title}</Text>
            <Text>per</Text>
            <TimePeriodDropdown /> 
        </SafeAreaView>
    );
};

export default CategoryDetail; 