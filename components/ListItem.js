import React  from 'react';
import { TouchableOpacity, Text, Image } from "react-native";
import styles from '../styles/onboardingStyle';

const ListItem = ({ title }) => (
<TouchableOpacity style={styles.listitem}>
    <Image
    source={require('../assets/unchecked-checkbox.png')}
    style={styles.checkboxContainer}
    /> 
    <Text style={styles.listtitle}>{title}</Text>
</TouchableOpacity>
);

export default ListItem;