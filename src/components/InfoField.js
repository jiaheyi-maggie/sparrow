import React, { useState } from 'react';
import { SafeAreaView, TextInput, Text } from 'react-native';
import styles from '../styles/componentStyle';

const InfoField = ({ fieldName }) => {

    const [text, setText] = useState('');
    
    // TODO: research this bug
    return (
        <SafeAreaView style={{alignItems: 'stretch', marginHorizontal: 20, marginBottom: 10}}>
            <Text style={styles.infofieldtitle}>{fieldName}</Text>
            <TextInput
                style={styles.infofield}
                onChangeText={(text) => setText(text)}
                value={text}
                placeholder={fieldName}
                placeholderTextColor='#FFF4CB'
                keyboardType='web-search'
            > </TextInput>
        </SafeAreaView>
    );
};

export default InfoField;