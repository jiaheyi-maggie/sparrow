import React from 'react';
import { SafeAreaView, View, Text, ScrollView, FlatList } from 'react-native';
import categories from '../../data/categories';
import styles from '../../styles/onboardingStyle';
import BudgetCircle from '../../components/BudgetCircle';
import SummaryListItem from '../../components/SummaryListItem';

const BudgetOverview = () => {

    // render items without checkbox
    const renderSummaryItem = ({ item }) => (
        <SummaryListItem title={item.title} />
    );

    return (
        <SafeAreaView style={styles.safeareaWithScroll}>
            <ScrollView style={styles.scrollviewContainer}>
                <View>
                    <Text style={styles.title}>Budget Overview </Text>
                    </View>
                <View>
                    <Text style={styles.subtitle}>Tap on any number to edit!</Text>
                    </View>
                <View style={{flexDirection: 'row', padding: 10}}>
                    <BudgetCircle term={'Short'} />
                    <BudgetCircle term={'Long'} />
                </View>
                <FlatList
                        data={categories}
                        renderItem={renderSummaryItem}
                        keyExtractor={item => item.id}
                        />
            </ScrollView>
        </SafeAreaView>
    );
};

export default BudgetOverview; 