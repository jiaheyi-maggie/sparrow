// List of categories with data 
// PureComponent to prevent unnecessary updates
import React, { useState } from 'react';
import { FlatList } from 'react-native';
import CategoryItem from '../../components/CategoryItem';
import categories from '../../data/categories';
import selected from '../../data/selected';

const CategoryList = () => {

    // get selected categories
    const [checkedCategories, setCheckedCategories] = useState([]);

    // get booleans for checkboxes
    const [checked, setChecked] = useState(selected);



    // when user press on an item, add item to checkedCategories
    const pressHandler = (id) => {
        // setCheckedCategories((prev) => {
        //     // return prev.filter( category => category.id != id);
        // })
        setCheckedCategories([...checkedCategories, categories[id]]);
        console.log(checkedCategories);
    };

    // iterate through checkedCategories and render 
    return (
        <FlatList 
            data={categories}
            renderItem={({item}) => (<CategoryItem item={item} pressHandler={pressHandler} />)}
            keyExtractor={item => item.title}
            contentContainerStyle={{
                flexGrow: 1,
            }}
        />
    );
};

export default CategoryList;