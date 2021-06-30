import React, { Component }  from 'react';
import { Text, SafeAreaView, View, ScrollView, FlatList, TouchableOpacity, Image, Slice } from 'react-native';
import AveragePeriodPicker from '../../components/picker/AveragePeriodPicker';
import PieChart from '../../components/main/PieChart';
import { fetchBudget } from '../../app/actions/fetchBudget';
import { addBudget } from '../../app/actions/addBudget';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withNavigation } from 'react-navigation';
import styles from '../../styles/homeStyle';


export class BudgetDetail extends Component {

    componentDidMount() {
        this.props.fetchBudget();
    };

    // componentDidUpdate(prevProps) {
    //     if (this.props.categories !== prevProps.categories) {
    //         this.props.fetchBudget(); 
    //     }
    // };

    roundNumbers(num) {
        return (Math.round(num * 100) / 100).toFixed(2);
    };

    calculateAverage(period, value, selectedPeriod) {
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
                        return this.roundNumbers(value / 52); 
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
                        return this.roundNumbers(value * 52);
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


    handleComponentDidMount(shortTerm, longTerm) {
        var usefulCategories =  this.props.categories.filter((obj) => {
            return obj.sum !== 0;
        });

        console.log("hmm");
        return (
            <SafeAreaView style={styles.container2}>
                <ScrollView>
                
                {/* Header */}
                <View style={{
                    flexDirection: 'row', 
                    justifyContent:'space-between',
                    alignItems: 'baseline'
                    }}>

                    {/* go back */}
                    <TouchableOpacity style={styles.backButton} onPress={() => this.props.navigation.goBack()}>
                        <Image 
                            source={require('../../assets/Icons/back.png')}
                            resizeMode='contain'
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: '#fff',
                                // marginLeft: 5,
                            }}
                        />
                    </TouchableOpacity>

                    {/* Display name */}
                    <Text style={styles.title}>Overview</Text> 


                    {/* Menu */}
                    <TouchableOpacity  style={styles.menuButton} onPress={() => this.props.navigation.openDrawer()}>
                        <Image 
                            source={require('../../assets/Icons/menu.png')}
                            resizeMode='contain'
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: '#fff',
                                // marginRight: 10
                            }}
                        />
                    </TouchableOpacity>
                </View>

                {/* time period selection */}
                <View style={{flexDirection: 'row', alignItems: 'baseline', paddingLeft: 10, backgroundColor: '#F8FAFB', padding: 5, marginTop: 5}}>
                    <Text style={styles.listText3}> Select a time period: </Text>
                    <AveragePeriodPicker />
                </View>

                {/* Budget overview card */}
                <View style={styles.cardContainer}>

                    {/* Recurring */}
                    <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
                        <Text style={styles.cardText}>
                            Recurring: 
                        </Text>
                        <Text style={[styles.number, {color: '#264653', fontSize: 19}]}>$ {this.handleTimeSelectionRendering(shortTerm[1], shortTerm[0])}</Text>
                    </View>

                    {/* Non-recurring */}
                    <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
                        <Text style={styles.cardText}>
                            Non-Recurring:
                        </Text>
                        <Text style={[styles.number, {color: '#264653', fontSize: 19}]}>$ {this.handleTimeSelectionRendering(longTerm[1], longTerm[0])}</Text>
                    </View>
                </View>

                {/* Pie chart for budget */}
                <Text style={styles.smallTitle}> Categories</Text>
                <PieChart data={usefulCategories}/>

                {/* Category details */}
                <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
                    {/* Delete Categories Button */}
                    <View style={{alignItems: 'center', paddingLeft: 15, alignItems: 'flex-end', paddingBottom: 5}}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Delete Categories')} style={{backgroundColor:'#bfbfbf', elevation: 2, borderRadius: 20, padding: 8, width: 150, textAlign: 'center'}}>
                            <Text style={{fontSize: 16, color: '#fff', fontWeight: 'bold'}}> Delete Categories</Text>
                        </TouchableOpacity>
                    </View>
                    {/* Add Categories Button */}
                    <View style={{alignItems: 'center', paddingRight: 15, alignItems: 'flex-end', paddingBottom: 5}}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Add Categories')} style={{backgroundColor:'#7E9181', elevation: 2, borderRadius: 20, padding: 8, width: 135, textAlign: 'center'}}>
                            <Text style={{fontSize: 16, color: '#fff', fontWeight: 'bold'}}> Add Categories</Text>
                        </TouchableOpacity>
                    </View>
                    
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
        const { shortTerm, longTerm } = this.props;

        return(
            this.handleComponentDidMount(shortTerm, longTerm)
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