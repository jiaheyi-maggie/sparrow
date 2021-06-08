import React, { useState } from 'react';
import { View, Dimensions, TouchableHighlight, Text, TextInput } from 'react-native';
import styles from '../styles/componentStyle';
import NumberTextInput from './NumberTextInput';

const BudgetCircle = () => {
    const [number, onChangeNumber] = useState(null);
    return (
        <TouchableHighlight
            style = {{
                borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
                width: Dimensions.get('window').width * 0.42,
                height: Dimensions.get('window').width * 0.42,
                backgroundColor:'#2A94AF',
                justifyContent: 'center',
                alignItems: 'center',
                margin: 10
            }}
                underlayColor = '#ccc'
                onPress = { () => alert('Yaay!') }
                >

                <Text style={styles.reviewText}>$</Text>

        </TouchableHighlight>
    );
}

export default BudgetCircle;