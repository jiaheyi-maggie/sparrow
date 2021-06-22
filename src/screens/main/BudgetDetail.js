import React, { Component }  from 'react';
import { Text, SafeAreaView, View, ScrollView, FlatList, Pressable, TouchableOpacity, Image } from 'react-native';

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

    signOutUser = async () => {
        try {
            await firebase.auth().signOut();
            Alert.alert('signed out');
            this.props.navigation.navigate('signin');
        } catch (error) {
            console.log(error);
        }
    }

    handleComponentDidMount(categories, shortTerm, longTerm) {

        return (
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <View style={{
                        flexDirection: 'row', 
                        justifyContent:'space-between',
                        alignItems: 'baseline'
                    }}>
                        {/* Profile */}
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Image 
                                source={require('../../assets/Icons/back.png')}
                                resizeMode='contain'
                                style={{
                                    width: 23,
                                    height: 23,
                                    tintColor: '#7E9181',
                                    marginLeft: 15,
                                    marginTop: 10
                                }}
                            />
                        </TouchableOpacity>

                        {/* Log out */}
                        <TouchableOpacity onPress={() => this.signOutUser()}>
                            <Image 
                                source={require('../../assets/Icons/logout.png')}
                                resizeMode='contain'
                                style={{
                                    width: 23,
                                    height: 23,
                                    tintColor: '#7E9181',
                                    marginRight: 15,
                                    marginTop: 10
                                }}
                            />
                        </TouchableOpacity>
                    </View>

                    {/* budget overview card */}
                    <View style={{ 
                        backgroundColor:'#FAA381',
                        borderRadius: 20,
                        padding: 10,
                        elevation: 2,
                        margin: 10
                    }}>
                        {/* Long Term */}
                        <View style={{flexDirection: 'row', justifyContent:'space-around'}}>
                            <Text style={{
                                color: '#fff',
                                fontWeight: 'bold',
                                textAlign: 'left',
                                fontSize: 20,
                                paddingVertical: 5,
                                marginHorizontal: 20
                            }}>
                                Long Term: 
                            </Text>
                            <Text style={styles.number}>${longTerm[0]} / {longTerm[1]}</Text>
                        </View>

                        {/* Short Term */}
                        <View style={{flexDirection: 'row', justifyContent:'space-around'}}>
                            <Text style={{
                                color: '#fff',
                                fontWeight: 'bold',
                                textAlign: 'left',
                                fontSize: 20,
                                paddingVertical: 5,
                                marginHorizontal: 20
                            }}>
                                Short Term: 
                            </Text>
                            <Text style={styles.number}>${shortTerm[0]} / {shortTerm[1]}</Text>
                        </View>

                    </View>

                    {/* TODO: add pie chart for budget */}


                    <FlatList 
                        data={categories}
                        renderItem={({ item }) => {
                            
                            // TODO: BudgetDetailItem
                            return (
                                <View>
                                    <Text>{item.title}</Text> 
                                    <Text>{item.sum}</Text>
                                </View>
                                
                            );
                        }}
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