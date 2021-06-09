import React, { useState } from 'react';
import { Dimensions, Text, TextInput, SafeAreaView } from 'react-native';
import styles from '../styles/componentStyle';
import TimePicker from './TimePicker';

// TODO: add budget sum into circle
const BudgetCircle = ({ term }) => {

    const [number, onChangeNumber] = useState(null);

    return (
        <SafeAreaView style={{alignItems: 'center'}}>
            <TextInput
                style={{
                    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
                    width: Dimensions.get('window').width * 0.42,
                    height: Dimensions.get('window').width * 0.42,
                    backgroundColor:'#2A94AF',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: 10,
                    fontSize: 40,
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: '#FFF4CB'
                }}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="$2000"
                placeholderTextColor='#FFF4CB'
                keyboardType="phone-pad"
                selectionColor='aliceblue'
                textAlign= 'center'
            />
            <Text style={styles.reviewText} > {term} Term</Text>
            <SafeAreaView style={{flexDirection: 'row'}}>
                <Text style={styles.reviewText} >every</Text>
                <TimePicker />
            </SafeAreaView>

        </SafeAreaView>
    );
}

export default BudgetCircle;