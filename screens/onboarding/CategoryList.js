// List of categories with data 
// PureComponent to prevent unnecessary updates
import React, { PureComponent, useState } from 'react';
import { View, Image, FlatList, TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import CategoryItem from '../../components/CategoryItem';
import categories from '../../data/categories';
import styles from '../../styles/componentStyle';

const CategoryList = () => {

    const [checkedCategories, setCheckedCategories] = useState(categories);

    // find item through id, change 'checked field' to true (default false)
    const changeCheckField = (id) => {
        for (var i in categories) {
            if (categories[i].id = id) {
                categories[i].checked = true;
                break;
            }
        }
    }

    // when user press on an item, add item to checkedCategories
    const pressHandler = (id) => {
        //first change the checked field of the category 
        changeCheckField(id);

        //update checkedCategoriesList
        setCheckedCategories(
            (prevCategories) => {
                return prevCategories.push(categories.find(item => item.checked === true));
                // return prevCategories.push(categories.find(item => item.id = id));
            }
        )
    };

    // iterate through checkedCategories and render 
    return (
        <FlatList 
            data={categories}
            renderItem={({item}) => (<CategoryItem item={item} pressHandler={pressHandler} />)}
            keyExtractor={item => item.id}
            contentContainerStyle={{
                flexGrow: 1,
            }}
        />
    );
};

export default CategoryList;