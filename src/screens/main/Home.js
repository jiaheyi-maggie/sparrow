import React, { Component }  from 'react';
import { Text, SafeAreaView, View, ScrollView, FlatList, TouchableOpacity } from 'react-native';

import { fetchUser } from '../../app/actions/fetchUser';
import { fetchBudget } from '../../app/actions/fetchBudget';
import SummaryListItem from '../../components/SummaryListItem';

// allow connect to redux
import { connect } from 'react-redux';
// bind actions to components
import { bindActionCreators } from 'redux';

import styles from '../../styles/homeStyle';
import store from '../../app/store';


export class Home extends Component {

    // constructor(props) {
    //     super(props);

    //     this.state ={
    //         categories: [],
    //         longTerm: 0,
    //         shortTerm: 0
    //     }

        // redux store listener
        // store.subscribe(() => {
        //     this.setState({
        //         categories: store.getState().reducer,
        //         longTerm: store.getState().longTerm,
        //         shortTerm: store.getState().shortTerm
        //     })
        // })
    // }

    componentDidMount() {
        this.props.fetchUser();
        this.props.fetchBudget();
    }


    handleComponentDidMount(currentUser, categories, shortTerm, longTerm) {
        if (currentUser) {
            // console.log(categories);
            // const categories = store.getState().reducer;

            return (
                <SafeAreaView style={styles.homeContainer}>
                    <ScrollView>
                        <Text style={styles.title}>Hello, {currentUser.firstName}</Text>

                        {/* budget overview card */}
                        <TouchableOpacity style={styles.statusContainer}>
                            <View style={{flexDirection: 'row', justifyContent:'space-around'}}>
                                <Text style={styles.subtitle}>Current {shortTerm[1]}ly budget:</Text>
                                <Text style={styles.number}>${shortTerm[0]}</Text>
                            </View>

                            <View style={{flexDirection: 'row', justifyContent:'space-around'}}>
                                <Text style={styles.subtitle}>Current {longTerm[1]}ly budget:</Text>
                                <Text style={styles.number}>${longTerm[0]}</Text>
                            </View>
                        </TouchableOpacity>

                        {/* dummy category list */}
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
        } else {
            return (
                <SafeAreaView style={styles.homeContainer}>
                    <Text style={styles.subtitle}> User does not exist </Text>
                </SafeAreaView>
            );
        }
    }

    render() {
        const { currentUser, categories, shortTerm, longTerm } = this.props;

        return(
            this.handleComponentDidMount(currentUser, categories, shortTerm, longTerm)
        );
    }
}

// allow access to data in Home component
const mapStateToProps = (store) => ({
    currentUser: store.user.currentUser,
    categories: store.user.categories,
    longTerm: store.user.longTerm,
    shortTerm: store.user.shortTerm
});

// bind component to redux
const mapDispatchProps = (dispatch) => bindActionCreators({ fetchUser, fetchBudget }, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(Home);