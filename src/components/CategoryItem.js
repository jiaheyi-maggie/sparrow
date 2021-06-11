// replacement ListItem
import React  from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import Checkbox from '@react-native-community/checkbox';
import { useState } from 'react/cjs/react.development';

const CategoryItem = ({ item, pressHandler }) => {

    const [isChecked, setCheck] = useState(false);

    return (
                <TouchableOpacity
                    style={style.container}
                    onPress={() => pressHandler(item.id)}
                >
                    <View style={style.textAlign}>
                        <Checkbox 
                            disabled={false}
                            value={isChecked}
                            onValueChange={() => setCheck(!isChecked)}
                        />

                        {/* replacement checkbox */}
                        
                        <Text style={style.title}>
                                {item.title}
                        </Text>
                    </View>
                </TouchableOpacity>
    );
};

const style = StyleSheet.create( {
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 10
    },
    container: {
        height: 60, 
        backgroundColor: '#FFF4CB', 
        borderRadius: 20, 
        margin: 10,
        paddingBottom: 15,
        paddingHorizontal: 10,
        flexDirection: 'column-reverse'
    },
    textAlign: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        flexWrap: 'wrap'
    },
    title: {
        color: '#264653',
        fontWeight: 'bold',
        textAlign: 'left',
        fontSize: 23,
        marginLeft: 50
    }
});

export default CategoryItem;