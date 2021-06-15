import React, { useState } from 'react';
import { Dimensions, Text, TextInput, SafeAreaView, View } from 'react-native';
import styles from '../styles/componentStyle';
import TimePeriodDropdown from './TimePeriodDropdown';
import TimePicker from './TimePicker';

// TODO: add budget sum into circle
const BudgetCircle = ({ term }) => {

    const [number, onChangeNumber] = useState(null);

    return (
        <SafeAreaView style={{alignItems: 'center'}}>
            <View
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
                }}>
                <View style={{flexDirection:'row'}}>
                    <Text style={{color: '#FFF4CB', fontSize: 40, fontWeight: 'bold'}}>$ </Text>
                    <TextInput
                        onChangeText={onChangeNumber}
                        value={number}
                        placeholder="2000"
                        placeholderTextColor='#FFF4CB'
                        keyboardType="phone-pad"
                        selectionColor='aliceblue'
                        textAlign= 'center'
                        style={{fontSize: 40, fontWeight: 'bold'}}
                    />
                </View>
            </View>
            
            <Text style={styles.reviewText} > {term} Term</Text>

            <SafeAreaView style={{
                flexDirection: 'row', 
                width: 150, 
                height: 30,
                alignItems: 'center'
                }}>
                <Text style={styles.reviewText} >every</Text>
                <TimePeriodDropdown />
            </SafeAreaView>

        </SafeAreaView>
    );
}

export default BudgetCircle;