// List of categories with data 
// PureComponent to prevent unnecessary updates
import React, { useState } from 'react';
import { FlatList } from 'react-native';
import CategoryItem from '../../components/CategoryItem';
import categories from '../../data/categories';

const CategoryList = () => {

    const [checkedCategories, setCheckedCategories] = useState(categories);

    // when user press on an item, add item to checkedCategories
    const pressHandler = (id) => {
        setCheckedCategories((prevCategories) => {
            return prevCategories.filter( category => category.id != id);
        })
    };

    // iterate through checkedCategories and render 
    return (
        <FlatList 
            data={checkedCategories}
            renderItem={({item}) => (<CategoryItem item={item} pressHandler={pressHandler} />)}
            keyExtractor={item => item.id}
            contentContainerStyle={{
                flexGrow: 1,
            }}
        />
    );
};

export default CategoryList;