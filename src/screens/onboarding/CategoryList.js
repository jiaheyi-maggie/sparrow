// List of categories with data 
// moved to SelectCategory
import React, { useState } from 'react';
import { FlatList } from 'react-native';

import CategoryItem from '../../components/CategoryItem';
import categories from '../../data/categories';
import selected from '../../data/selected';

const CategoryList = () => {

    // get selected categories
    const [checkedCategories, setCheckedCategories] = useState(new Set());

    //get selected boolean (for check box)
    const [selectedList, setSelectedList]= useState(selected);

    // when user press on an item, add item to checkedCategories
    const pressHandler = (id) => {

        // udpate selected categories list
        const updatedCategories = new Set(checkedCategories);

        if (checkedCategories.has(categories[id])) {
            updatedCategories.delete(categories[id]);
        } else {
            updatedCategories.add(categories[id]);    
        }
        
        setCheckedCategories(updatedCategories);

        // update selected list
        selectedList[id].checked = !selectedList[id].checked;

        setSelectedList(selectedList);

        /* TODO: update checkbox */

        // console.log(categories[id]);
        console.log(checkedCategories);
        console.log(selectedList);
    };

    // iterate through checkedCategories and render 
    return (
        <FlatList 
            data={categories}
            renderItem={({item}) => (
                <CategoryItem item={item} pressHandler={pressHandler} />
            )}
            keyExtractor={item => item.id}
            contentContainerStyle={{
                flexGrow: 1,
            }}
        />
    );
};

export default CategoryList;