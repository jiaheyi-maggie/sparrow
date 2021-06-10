// replacement ListItem
import React  from 'react';
import { TouchableOpacity, Text } from "react-native";
import Checkbox from '@react-native-community/checkbox';
import { useState } from 'react/cjs/react.development';

const CategoryItem = ({ item, pressHandler }) => {

    const [isChecked, setCheck] = useState(false);

    return (
        <TouchableOpacity
            style={{
                height: 60, 
                backgroundColor: '#FFF4CB', 
                borderRadius: 20, 
                margin:10, 
                padding: 5, 
                flexDirection: 'column-reverse'
            }}
            onPress={() => pressHandler(item.id)}
        >
            <Checkbox 
                style={{flexDirection: 'column', marginTop: 8}}
                disabled={false}
                value={isChecked}
                onValueChange={() => setCheck(!isChecked)}
            />
            
            <Text style={{    
                color: '#264653',
                fontWeight: 'bold',
                textAlign: 'left',
                fontSize: 23,
                marginLeft: 80
                }}>
                    {item.title}
            </Text>
        </TouchableOpacity>
    );
};

export default CategoryItem;