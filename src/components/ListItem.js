import React  from 'react';
import { TouchableOpacity, Text } from "react-native";
import Checkbox from '@react-native-community/checkbox';
import styles from '../styles/onboardingStyle';
import { useState } from 'react/cjs/react.development';

const ListItem = ({ title }) => {

    const [isChecked, setCheckBool] = useState(false);

    return (
        <TouchableOpacity style={styles.listitem} onPress={()=>setCheckBool(!isChecked)}>
            <Checkbox 
                style={{flexDirection: 'column', marginTop: 8}}
                disabled={false}
                value={isChecked}
                onValueChange={() => setCheckBool(!isChecked)}
            />
            <Text style={styles.listtitle}>{title}</Text>
        </TouchableOpacity>
    );
};

export default ListItem;