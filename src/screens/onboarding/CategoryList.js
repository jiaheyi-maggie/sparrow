// List of categories with data 
// PureComponent to prevent unnecessary updates
import React, { useState } from 'react';
import { FlatList } from 'react-native';
import CategoryItem from '../../components/CategoryItem';
import categories from '../../data/categories';
import selected from '../../data/selected';

const CategoryList = () => {

    // get selected categories
    const [checkedCategories, setCheckedCategories] = useState(new Set());

    // get booleans for checkboxes (an array initially)
    const [checked, setChecked] = useState(selected);


    // when user press on an item, add item to checkedCategories
    const pressHandler = (id) => {
        setChecked(selected[id].checked = !selected[id].checked);
        // console.log(selected);

        const updatedCategories = new Set(checkedCategories);

        if (checkedCategories.has(categories[id])) {
            setCheckedCategories(categories[id].checked = !categories[id].checked);
            updatedCategories.delete(categories[id]);
        } else {
            setCheckedCategories(categories[id].checked = !categories[id].checked);
            updatedCategories.add(categories[id]);
        }

        // setCheckedCategories(categories[id].checked = !categories[id].checked);
        // is this memory expensive? same as spread array tho
        // setCheckedCategories(prev => new Set([...checkedCategories, categories[id]]));

        setCheckedCategories(updatedCategories);
        console.log(checkedCategories);
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