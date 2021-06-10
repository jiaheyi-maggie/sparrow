import React  from 'react';
import { TouchableOpacity, Text } from "react-native";
import styles from '../styles/onboardingStyle';

const SummaryListItem = ({ title }) => {

    return (
        <TouchableOpacity style={styles.listSummaryItem}>
            <Text style={styles.listSummaryTitle}>{title}</Text>
        </TouchableOpacity>
    );
};

export default SummaryListItem;