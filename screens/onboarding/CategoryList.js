// List of categories with data 
// PureComponent to prevent unnecessary updates
import React, { useState } from 'react';
import { FlatList } from 'react-native';
import CategoryItem from '../../components/CategoryItem';
import categories from '../../data/categories';

const CategoryList = () => {

    const [checkedCategories, setCheckedCategories] = useState(categories);
    const checkedArray = [];


    // find item through id, change 'checked field' to true (default false)
    const changeCheckField = (id) => {
        for (var i in categories) {
            if (categories[i].id = id) {
                categories[i].checked = true;
                break;
            }
        }
    }

    // update checkedCategory list 
    const updateSelectedList = (list) => {
        for (var i in list) {
            if (list[i].checked = true) {
                checkedArray.push(list[i]);
            }
        }
    }

    // allow other classes to have access to checkedArray
    const getCheckedArray = () => {
        return checkedArray;
    }

    // when user press on an item, add item to checkedCategories
    const pressHandler = (id) => {
        changeCheckField(id);
        updateSelectedList(checkedCategories);
        console.log(checkedArray);
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