import React  from 'react';
import { TouchableOpacity, Text, View } from "react-native";
import { TextInput } from 'react-native-gesture-handler';
import styles from '../styles/onboardingStyle';

const SummaryListItem = ({ item }) => {

    // TODO: Move this into budget overview and update field according to state
    return (
        <View style={styles.listSummaryItem}>
            <TouchableOpacity >
                <Text style={styles.listSummaryTitle}>{item.title} ({item.period})</Text>
            </TouchableOpacity>
            <TextInput
                style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: '#FFF4CB',
                    width: 50
                }}
                placeholderTextColor='#E76F51'
                placeholder='$200'
                keyboardType="numeric"
            >
            </TextInput>

        </View>
    );
};

export default SummaryListItem;