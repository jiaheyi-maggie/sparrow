import React, { Component }  from 'react';
import { Text, SafeAreaView, View, ScrollView, FlatList, TouchableOpacity, Image, Slice } from 'react-native';
import AveragePeriodPicker from '../../components/picker/AveragePeriodPicker';
// import { PieChart } from 'react-native-charts-wrapper';
import { VictoryChart, VictoryGroup, VictoryBar, VictoryPie, VictoryLabel } from 'victory-native';
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
                    <Text style={styles.title}>Average Budget</Text>

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
                <View style={{flexDirection: 'row', alignItems: 'baseline', paddingLeft: 15, paddingTop: 10}}>
                    <Text style={styles.listText}> Select a time period: </Text>
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
                            fontSize: 20,
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
                            fontSize: 20,
                            paddingVertical: 5,
                            marginHorizontal: 20
                        }}>
                            Non-Recurring:
                        </Text>
                        <Text style={styles.number}>$ {this.handleTimeSelectionRendering(longTerm[1], longTerm[0])}</Text>
                    </View>
                </View>

                {/* Pie chart for budget */}
                <VictoryPie
                    data={usefulCategories}
                    x="title"
                    y="sum"
                    colorScale={['#78C0E0','#5EAFD9','#448DD1','#2D51A5','#212B8F','#150578', '#0E0E52' ]}
                    cornerRadius={8}
                    events={[{
                        target: 'data',
                        eventHandlers: {
                            onclick: () => {
                                return [
                                    {
                                        target: 'data',
                                        mutation: ({style}) => {
                                            return style.fill === '#c43a31' ? null : {style: {fill: '#c43a31'}};
                                        }
                                    }, 
                                    {
                                        target: 'labels',
                                        mutation: ({ text }) => {
                                            return text === 'clicked' ? null : {text: 'clicked'};
                                        }
                                    }, 

                                ];
                            }
                        }
                    }]}
                    innerRadius={70}
                    labelRadius={({ innerRadius }) => innerRadius+60 }
                    labelPlacement={'vertical'}
                    style={{ labels: { fill: "#F4A261", fontSize: 20, fontWeight: "bold" } }}
                    padAngle={1}
                    radius={120}
                />

                
                

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
                                    <Text style={styles.listText2}>$ {this.handleTimeSelectionRendering(item.period,item.value)}</Text>
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
    shortTerm: store.user.shortTerm,
    averagePeriod: store.averagePeriod.averagePeriod
});

// bind component to redux
const mapDispatchProps = (dispatch) => bindActionCreators({ fetchBudget }, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(withNavigation(BudgetDetail));