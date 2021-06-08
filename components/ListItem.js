import React  from 'react';
import { TouchableOpacity, Text } from "react-native";
import styles from '../styles/onboardingStyle';

const ListItem = ({ title }) => (
<TouchableOpacity style={styles.listitem}>
    <Text style={styles.listtitle}>{title}</Text>
</TouchableOpacity>
);

export default ListItem;