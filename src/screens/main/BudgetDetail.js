import React, { Component, useRef }  from 'react';
import { Animated, Text, SafeAreaView, View, ScrollView, FlatList, Pressable } from 'react-native';

import { fetchBudget } from '../../app/actions/fetchBudget';
import SummaryListItem from '../../components/SummaryListItem';

// allow connect to redux
import { connect } from 'react-redux';
// bind actions to components
import { bindActionCreators } from 'redux';

import { withNavigation } from 'react-navigation';

import styles from '../../styles/homeStyle';


export class BudgetDetail extends Component {


    componentDidMount() {
        this.props.fetchBudget();
    };



    handleComponentDidMount(categories, shortTerm, longTerm) {
        const month = new Date().getMonth()+1;
        console.log(month);
        const date = new Date();
        const dateAsString = date.toString();
        console.log(dateAsString);
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView>
                      {/* budget overview card */}
                      <Pressable 
                            style={({ pressed }) => [
                                {
                                    backgroundColor: pressed
                                    ? '#D7CEB2'
                                    : '#FAA381',
                                    borderRadius: 20,
                                    padding: 10,
                                    elevation: 2,
                                    margin: 10
                                }
                            ]} 
                            onPress={()=>{this.props.navigation.goBack()} 
                        }>
                            <View style={{flexDirection: 'row', justifyContent:'space-around'}}>
                                <Text style={{
                                    color: '#fff',
                                    fontWeight: 'bold',
                                    textAlign: 'left',
                                    fontSize: 22,
                                    paddingVertical: 5,
                                    marginHorizontal: 20
                                }}>
                                    Long Term: 
                                </Text>
                                <Text style={styles.number}>${longTerm[0]} / {longTerm[1]}</Text>
                            </View>

                            <View style={{flexDirection: 'row', justifyContent:'space-around'}}>
                                <Text style={{
                                    color: '#fff',
                                    fontWeight: 'bold',
                                    textAlign: 'left',
                                    fontSize: 22,
                                    paddingVertical: 5,
                                    marginHorizontal: 20
                                }}>
                                    Short Term: 
                                </Text>
                                <Text style={styles.number}>${shortTerm[0]} / {shortTerm[1]}</Text>
                            </View>

                            {/* View Details */}
                            <View style={styles.statusContainer}>
                                <Text style={{
                                    color: '#264653',
                                    fontSize: 18,
                                    marginHorizontal: 20
                                }}>
                                    Go Back
                                </Text> 
                            </View>

                        </Pressable>

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