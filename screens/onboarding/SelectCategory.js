import React from 'react';
import { SafeAreaView, View, Text, Image, ScrollView, FlatList } from 'react-native';
import styles from "../../styles/onboardingStyle";
import ListItem from '../../components/ListItem';
import categories from '../../data/categories';

const SelectCategory = () => {

    // render items with checkbox
    const renderItem = ({ item }) => (
        <ListItem title={item.title} />
    );

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
                    style={styles.imageContainer}
                    />
                <FlatList
                    data={categories}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    />
            </ScrollView>
        </SafeAreaView>
    );
};

export default SelectCategory;