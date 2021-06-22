import React, { Component }  from 'react';
import { Text, SafeAreaView, View, ScrollView, FlatList, TouchableOpacity } from 'react-native';

import { fetchBudget } from '../../app/actions/fetchBudget';
import SummaryListItem from '../../components/SummaryListItem';

// allow connect to redux
import { connect } from 'react-redux';
// bind actions to components
import { bindActionCreators } from 'redux';

import { withNavigation } from 'react-navigation';

import styles from '../../styles/homeStyle';
import store from '../../app/store';


export class BudgetDetail extends Component {

    componentDidMount() {
        this.props.fetchBudget();
    }


    handleComponentDidMount(categories, shortTerm, longTerm) {
        return (
            <SafeAreaView style={styles.homeContainer}>
                <ScrollView>
                    <View style={styles.statusContainer}>
                        <Text style={styles.subtitle}> Long Term: ${longTerm[0]} / {longTerm[1]} </Text>
                        <Text style={styles.subtitle}> Short Term: ${shortTerm[0]} / {shortTerm[1]} </Text>
                    </View>
                    <FlatList 
                        data={categories}
                        renderItem={({ item }) => (
                            <SummaryListItem item={item}  />
                        )}
                        keyExtractor={item => item.id}
                        contentContainerStyle={{
                            flexGrow: 1,
                        }}
                    />  
                </ScrollView>
            </SafeAreaView>
        );
    }

    render() {
        const { categories, shortTerm, longTerm } = this.props;

        return(
            this.handleComponentDidMount(categories, shortTerm, longTerm)
        );
    }
}

// allow access to data in Home component
const mapStateToProps = (store) => ({
    categories: store.user.categories,
    longTerm: store.user.longTerm,
    shortTerm: store.user.shortTerm
});

// bind component to redux
const mapDispatchProps = (dispatch) => bindActionCreators({ fetchBudget }, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(withNavigation(BudgetDetail));