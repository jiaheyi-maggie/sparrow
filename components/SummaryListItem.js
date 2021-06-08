import React  from 'react';
import { TouchableOpacity, Text } from "react-native";
import styles from '../styles/onboardingStyle';
import NumberTextInput from './NumberTextInput';

const SummaryListItem = ({ title }) => {

    return (
        <TouchableOpacity style={styles.listSummaryItem}>
            <Text style={styles.listSummaryTitle}>{title}</Text>
        </TouchableOpacity>
    );
};

export default SummaryListItem;