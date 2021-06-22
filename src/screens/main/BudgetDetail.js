import React, { Component }  from 'react';
import { Text, SafeAreaView, View, ScrollView, FlatList, TouchableOpacity, Image } from 'react-native';

import BudgetDetailItem from '../../components/main/BudgetDetailItem';

import { fetchBudget } from '../../app/actions/fetchBudget';

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
        const usefulCategories = categories.filter((obj) => {
            return obj.sum !== 0;
        });

        console.log(usefulCategories);

        return (
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <View style={{
                        flexDirection: 'row', 
                        justifyContent:'space-between',
                        alignItems: 'baseline'
                    }}>

                        {/* go back */}
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Image 
                                source={require('../../assets/Icons/back.png')}
                                resizeMode='contain'
                                style={{
                                    width: 23,
                                    height: 23,
                                    tintColor: '#7E9181',
                                    marginLeft: 10,
                                }}
                            />
                        </TouchableOpacity>

                        {/* Display name */}
                        <Text style={styles.title}>Budget Detail</Text>

                        {/* Menu */}
                        <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                            <Image 
                                source={require('../../assets/Icons/menu.png')}
                                resizeMode='contain'
                                style={{
                                    width: 23,
                                    height: 23,
                                    tintColor: '#7E9181',
                                    marginRight: 15
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
                            <Text style={styles.number}>$ {longTerm[0]} / {longTerm[1]}</Text>
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
                            <Text style={styles.number}>$ {shortTerm[0]} / {shortTerm[1]}</Text>
                        </View>

                    </View>

                    {/* TODO: add pie chart for budget */}

                    {/* Add Categories Button */}
                    <View style={{alignItems: 'center'}}>
                        {/* TODO: update firebase collection("budgets") */}
                        <TouchableOpacity style={{backgroundColor:'#7E9181', elevation: 2, borderRadius: 20, padding: 8, width: 135, textAlign: 'center'}}>
                            <Text style={{fontSize: 16, color: '#fff', fontWeight: 'bold'}}> Add Categories</Text>
                        </TouchableOpacity>
                    </View>

                    {/* List */}
                    <FlatList 
                        data={usefulCategories}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.listContainer}>
                                    <Text style={styles.listText}>{item.title}</Text> 
                                    <Text style={styles.listText2}>$ {item.value} / {item.period} </Text>
                                </View>
                                // <BudgetDetailItem item={item} />
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