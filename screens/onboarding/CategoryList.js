// List of categories with data 
// PureComponent to prevent unnecessary updates
import React, { PureComponent, useState } from 'react';
import { View, Image, FlatList, TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import categories from '../../data/categories';
import styles from '../../styles/componentStyle';

export default class CategoryList extends PureComponent {

    //define state
    state = {
        categories: []
    }

    //lifecycle hook to retrieve data
    async componentDidMount() {
        this.setState({categories : categories})
    }

    //rendering each item from the list
    renderItem(data) {
        return (
            <TouchableOpacity 
                style={styles.listitem} 
                onPress={()=>setCheckBool(!isChecked)}>
                <Checkbox 
                    style={{flexDirection: 'column', marginTop: 8}}
                    disabled={false}
                    value={isChecked}
                    onValueChange={() => setCheckBool(!isChecked)}
                />
            <Text style={styles.listtitle}>{}</Text>
        </TouchableOpacity>
        );
    }

    render() {
        //destruct categoryList and apply for each component
    }
}