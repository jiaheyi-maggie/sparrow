import React from 'react';
import { Dimensions, Text, TextInput, SafeAreaView, View } from 'react-native';
import store from '../app/store';
import styles from '../styles/componentStyle';
import TimePeriodDropdown from './TimePeriodDropdown';
import TimePicker from './TimePicker';

// TODO: debug short term sum
const BudgetCircle = ({ term, value }) => {

    // action to change short term value
    const changeShortTerm = input => {
        return {
            type: 'changeShortTerm',
            payload: input
        }
    }

    // const [number, onChangeNumber] = useState(null);
    const onChangeNumber = (value) => {
        if (term === 'Long') {
            store.dispatch(changeLongTerm(value));
        } else if (term === 'Short') {
            store.dispatch(changeShortTerm(value));
        }
    };

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
                        onChangeText={(value) => onChangeNumber(value)}
                        value={value}
                        placeholder="?"
                        placeholderTextColor='#F8FAFB'
                        keyboardType="phone-pad"
                        selectionColor='aliceblue'
                        textAlign= 'center'
                        style={{fontSize: 40, fontWeight: 'bold', color: '#FFF4CB'}}
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
                {/* <TimePeriodDropdown /> */}
                {/* TODO: Time period dropdown */}
            </SafeAreaView>

        </SafeAreaView>
    );
}

export default BudgetCircle;