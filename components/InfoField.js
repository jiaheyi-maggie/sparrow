import React from 'react';
import { SafeAreaView, TextInput } from 'react-native';
import styles from '../styles/componentStyle';

const InfoField = ({ fieldName }) => {
    return (
        <SafeAreaView>
            <Text style={styles.infofieldtitle}>{fieldName}</Text>
            <TextInput
                style={styles.infofield}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="$2000"
                placeholderTextColor='#FFF4CB'
                keyboardType='default'
            > </TextInput>
        </SafeAreaView>
    );
};

export default InfoField;