import React, { Component } from 'react';
import categories from '../data/categories';
import { SafeAreaView, View, Text, Image, FlatList } from 'react-native';
import styles from '../styles/onboardingStyle';
import ListItem from '../components/ListItem';


const data = categories;

export default class CategoryPage {
    constructor(props) {
        this.state = {
            data: data,
            checked: false
        };
    }

    handleCheckbox = () => this.setState({checked: !this.state.checked})

    // renderItems() {
    //     return this.state.data.map(() => {
    //         return (

    //         );
    //     })
    // }

    // TODO: add checkbox
    renderItem = ({ item }) => (
        <ListItem title={item.title} />
    );

    render() {
        <ScrollView style={styles.scrollviewContainer}>
        <SafeAreaView>
            <View>
                <Text style={styles.longtitle}>Mark all categories where you have a good sense of how much you spend.</Text>
                </View>
            <View>
                <Text style={styles.subtitle}>This does not have to be perfect, just an estimate! Scroll down to select categories.</Text>
                </View>
            <Image 
                source={require('../assets/onboarding/mark-categories.png')} 
                resizeMode='contain'
                style={styles.imageContainer}
                />
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                />
        </SafeAreaView>
        </ScrollView>
    }
}
