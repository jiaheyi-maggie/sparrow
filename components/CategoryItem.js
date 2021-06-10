// replacement ListItem
import React  from 'react';
import { TouchableOpacity, Text } from "react-native";
import styles from '../styles/onboardingStyle';

const CategoryItem = ({ item, pressHandler }) => {
    return (
        <TouchableOpacity
            style={{
                height: 40, 
                backgroundColor: '#FFF4CB', 
                borderRadius: 15, 
                marginHorizontal:16, 
                padding: 10, 
                flexDirection: 'column'
            }}
            onPress={() => pressHandler(item.id)}
        >
            {/* <Checkbox 
                style={{flexDirection: 'column', marginTop: 8}}
                disabled={false}
                value={isChecked}
                onValueChange={() => setCheckBool(!isChecked)}
            /> */}
            <Text style={styles.listtitle}>{item.title}</Text>
        </TouchableOpacity>
    );
};

export default CategoryItem;