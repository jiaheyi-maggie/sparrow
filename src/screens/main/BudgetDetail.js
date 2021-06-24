import React, { Component }  from 'react';
import { Text, SafeAreaView, View, ScrollView, FlatList, TouchableOpacity, Image, Slice } from 'react-native';
import AveragePeriodPicker from '../../components/picker/AveragePeriodPicker';
// import { PieChart } from 'react-native-charts-wrapper';
import { VictoryPie, VictoryLabel, VictoryScatter } from 'victory-native';
import { fetchBudget } from '../../app/actions/fetchBudget';
import { addBudget } from '../../app/actions/addBudget';
// allow connect to redux
import { connect } from 'react-redux';
// bind actions to components
import { bindActionCreators } from 'redux';
import { withNavigation } from 'react-navigation';
import Swipeout from 'react-native-swipeout';
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

    roundNumbers(num) {
        return (Math.round(num * 100) / 100).toFixed(2);
    };

    calculateAverage(period, value, selectedPeriod) {
        // return value;
        if (period === selectedPeriod || selectedPeriod === null) {
            return this.roundNumbers(value);
        }
        switch (period) {
            case 'year':
                switch (selectedPeriod) {
                    case 'quarter':
                        return this.roundNumbers(value / 4);
                    case 'month':
                        return this.roundNumbers(value / 12);
                    case 'week':
                        return this.roundNumbers(value / 48); 
                    case 'day':
                        return this.roundNumbers(value / 365);
                }
            case 'quarter':
                switch (selectedPeriod) {
                    case 'year':
                        return this.roundNumbers(value * 4);
                    case 'month':
                        return this.roundNumbers(value / 4); 
                    case 'week':
                        return this.roundNumbers(value / 12);
                    case 'day':
                        return this.roundNumbers(value / 84);
                }
            case 'month':
                switch (selectedPeriod) {
                    case 'year':
                        return this.roundNumbers(value * 12);
                    case 'quarter':
                        return this.roundNumbers(value * 3);
                    case 'week':
                        return this.roundNumbers(value / 4);
                    case 'day':
                        return this.roundNumbers(value / 30); 
                }
            case 'week':
                switch (selectedPeriod) {
                    case 'year':
                        return this.roundNumbers(value * 48);
                    case 'quarter':
                        return this.roundNumbers(value * 12);
                    case 'month':
                        return this.roundNumbers(value * 4);
                    case 'day':
                        return this.roundNumbers(value / 7); 
                }
            case 'day': 
                switch (selectedPeriod) {
                    case 'year':
                        return this.roundNumbers(value * 365);
                    case 'quarter':
                        return this.roundNumbers(value * 84);
                    case 'month':
                        return this.roundNumbers(value * 30); 
                    case 'week':
                        return this.roundNumbers(value * 7);
                }
        }
    };

    handleTimeSelectionRendering(period, value) {
        if (this.props.averagePeriod === null){
            return value; 
        } else {
           return this.calculateAverage(period, value, this.props.averagePeriod);
        }
    };


    handleComponentDidMount(categories, shortTerm, longTerm) {
        const usefulCategories = categories.filter((obj) => {
            return obj.sum !== 0;
        });

        const sums = usefulCategories.map((obj) => obj.sum);
        const total = sums.reduce((a, b) => a+b, 0);

        const percentages = sums.map((sum) => {
            return {
                percent: this.roundNumbers(sum / total),
            }
        });
        // console.log(percentages);
        // console.log(sums);
        // console.log(total);

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

                {/* time period selection */}
                <Text style={styles.smallTitle}> Overview</Text>
                <View style={{flexDirection: 'row', alignItems: 'baseline', paddingLeft: 10, backgroundColor: '#F8FAFB', padding: 5}}>
                    <Text style={styles.listText3}> Select a time period: </Text>
                    <AveragePeriodPicker />
                </View>

                {/* budget overview card */}
                <View style={{ 
                    backgroundColor:'#FAA381',
                    borderRadius: 20,
                    padding: 10,
                    elevation: 2,
                    margin: 10,
                }}>

                    {/* Recurring */}
                    <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
                        <Text style={{
                            color: '#fff',
                            fontWeight: 'bold',
                            textAlign: 'left',
                            fontSize: 19,
                            paddingVertical: 5,
                            marginHorizontal: 20
                        }}>
                            Recurring: 
                        </Text>
                        <Text style={styles.number}>$ {this.handleTimeSelectionRendering(shortTerm[1], shortTerm[0])}</Text>
                    </View>

                    {/* Non-recurring */}
                    <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
                        <Text style={{
                            color: '#fff',
                            fontWeight: 'bold',
                            textAlign: 'left',
                            fontSize: 19,
                            paddingVertical: 5,
                            marginHorizontal: 20
                        }}>
                            Non-Recurring:
                        </Text>
                        <Text style={styles.number}>$ {this.handleTimeSelectionRendering(longTerm[1], longTerm[0])}</Text>
                    </View>
                </View>

                {/* Pie chart for budget */}
                <Text style={styles.smallTitle}> Categories</Text>
                <View>
                <VictoryPie
                    data={usefulCategories}
                    x="title"
                    y="sum"
                    // x='percent'
                    // y='percent'
                    colorScale={['#78C0E0','#5EAFD9','#448DD1','#2D51A5','#212B8F','#150578', '#0E0E52' ]}
                    cornerRadius={8}
                    innerRadius={70}
                    labelRadius={({ innerRadius }) => innerRadius+30 }
                    labelPlacement={'vertical'}
                    labelComponent={
                        <VictoryLabel 
                            textAnchor='start'
                            // backgroundPadding={2}
                            dx={-10}
                        />
                    }
                    style={{ labels: { fill: "#FFCF56", fontSize: 20, fontWeight: "bold" } }}
                    padAngle={1}
                    radius={130}
                    name='averageViewPie'
                    width={400}
                    height={320}
                    events={[{
                        target: "data",
                        eventHandlers: {
                          onPress: () => {
                            return [
                              {
                                target: "data",
                                mutation: ({ style }) => {
                                  return style.fill === "#c43a31" ? null : { style: { fill: "#c43a31" } };
                                }
                              }
                            ];
                          }
                        }
                      }]}
                />
                </View>

                {/* Category details */}
                    {/* Add Categories Button */}
                    <View style={{alignItems: 'center', paddingRight: 15, alignItems: 'flex-end', paddingBottom: 5}}>

                        {/* TODO: update firebase collection("budgets") */}
                        {/* <TouchableOpacity onPress={() => this.handleAddCategories()} style={{backgroundColor:'#7E9181', elevation: 2, borderRadius: 20, padding: 8, width: 135, textAlign: 'center'}}> */}
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Add Categories')} style={{backgroundColor:'#7E9181', elevation: 2, borderRadius: 20, padding: 8, width: 135, textAlign: 'center'}}>
                            <Text style={{fontSize: 16, color: '#fff', fontWeight: 'bold'}}> Add Categories</Text>
                        </TouchableOpacity>
                    </View>

                    {/* List */}
                    <FlatList 
                        data={usefulCategories}
                        renderItem={({ item }) => {
                            return (
                                <Swipeout 
                                // TODO: onPress: delete categories
                                    right={[{text: "Delete", backgroundColor: 'red'}]}
                                    backgroundColor='transparent'
                                    autoClose='true'
                                >
                                    <View style={styles.listContainer}>
                                        <Text style={styles.listText}>{item.title}</Text> 
                                        <Text style={styles.listText2}>$ {this.handleTimeSelectionRendering(item.period,item.value)}</Text>
                                    </View>
                                </Swipeout>
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
    shortTerm: store.user.shortTerm,
    averagePeriod: store.averagePeriod.averagePeriod
});

// bind component to redux
const mapDispatchProps = (dispatch) => bindActionCreators({ fetchBudget, addBudget }, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(withNavigation(BudgetDetail));