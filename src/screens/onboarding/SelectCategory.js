import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import styles from "../../styles/onboardingStyle";

import CategoryItem from '../../components/CategoryItem';
import categories from '../../data/categories';
import selected from '../../data/selected';
import { useDispatch } from 'react-redux';

// Categories screen (to CategoryDetail)

const SelectCategory = ({ navigation }) => {

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


    return (
        <SafeAreaView style={styles.safeareaWithScroll}>
            
            <ScrollView style={styles.scrollviewContainer}>
                <View>
                    <Text style={styles.longtitle}>Mark all categories where you have a good sense of how much you spend.</Text>
                </View>

                <View>
                    <Text style={styles.subtitle}>This does not have to be perfect, just an estimate! Scroll down to select categories. You can customize categories later too!</Text>
                </View>

                <Image 
                    source={require('../../assets/onboarding/mark-categories.png')} 
                    resizeMode='contain'
                    style={{
                        width: 300,
                        height: 300,
                        alignContent: 'center'
                    }}
                />

                {/* CATEGORY LIST HERE */}
                {/* <CategoriesProvider value={checkedCategories}> */}
                    <FlatList 
                        data={categories}
                        renderItem={({item}) => (
                            <CategoryItem item={item} pressHandler={pressHandler} checked={item.checked} />
                            )}
                        keyExtractor={item => item.id}
                        contentContainerStyle={{
                            flexGrow: 1,
                        }}
                    />
                {/* </CategoriesProvider> */}

                <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}> 
                    {/* Back Button */}
                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={styles.buttonText}> Back </Text>
                    </TouchableOpacity>

                    {/* Continue Button */}
                    <TouchableOpacity
                        style={styles.buttonContainer}
                        // PASSED IN ROUTE PARAMS HERE
                        onPress={() => {navigation.navigate('categories'), { checkedCategories, selectedList }}}
                    >
                        <Text style={styles.buttonText}> Continue </Text>
                    </TouchableOpacity>

                </View>

            </ScrollView>
            
        </SafeAreaView>
    );
};

export default SelectCategory;