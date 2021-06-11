// replacement ListItem
import React  from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import Checkbox from '@react-native-community/checkbox';
import { useState } from 'react/cjs/react.development';
import selected from '../data/selected';

const CategoryItem = ({ item, pressHandler }) => {

    // extract data from selected array
    const [isSelected, setSelected] = useState(selected[item.id].checked);

    const handleCheckbox = () => {
        setSelected(selected[item.id].checked = !selected[item.id].checked);
        console.log(isSelected);
        console.log(selected);
    }

    return (
                <TouchableOpacity
                    style={style.container}
                    onPress={() => pressHandler(item.id)}
                >

                    <View style={style.textAlign}>
                        <Checkbox 
                            disabled={false}
                            value={!isSelected}
                            onValueChange={handleCheckbox}
                        />

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