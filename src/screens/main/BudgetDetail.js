import React from 'react';
import { Text, SafeAreaView, View, ScrollView, FlatList, TouchableOpacity, Image, Slice, Platform } from 'react-native';
import AveragePeriodPicker from '../../components/picker/AveragePeriodPicker';
import PieChart from '../../components/main/PieChart';
import { fetchBudget } from '../../app/actions/fetchBudget';
import { addBudget } from '../../app/actions/addBudget';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withNavigation } from 'react-navigation';
import styles from '../../styles/homeStyle';
import { COLORS, FONTS } from '../../constants/theme';

const BudgetDetail = ({ navigation, categories, longTerm, shortTerm, averagePeriod }) => {

    const roundNumbers = (num) => {
        return (Math.round(num * 100) / 100).toFixed(2);
    };

    const calculateAverage = (period, value, selectedPeriod) => {
        if (period === selectedPeriod || selectedPeriod === null) {
            return roundNumbers(value);
        }
        switch (period) {
            case 'year':
                switch (selectedPeriod) {
                    case 'quarter':
                        return roundNumbers(value / 4);
                    case 'month':
                        return roundNumbers(value / 12);
                    case 'week':
                        return roundNumbers(value / 52); 
                    case 'day':
                        return roundNumbers(value / 365);
                }
            case 'quarter':
                switch (selectedPeriod) {
                    case 'year':
                        return roundNumbers(value * 4);
                    case 'month':
                        return roundNumbers(value / 4); 
                    case 'week':
                        return roundNumbers(value / 12);
                    case 'day':
                        return roundNumbers(value / 84);
                }
            case 'month':
                switch (selectedPeriod) {
                    case 'year':
                        return roundNumbers(value * 12);
                    case 'quarter':
                        return roundNumbers(value * 3);
                    case 'week':
                        return roundNumbers(value / 4);
                    case 'day':
                        return roundNumbers(value / 30); 
                }
            case 'week':
                switch (selectedPeriod) {
                    case 'year':
                        return roundNumbers(value * 52);
                    case 'quarter':
                        return roundNumbers(value * 12);
                    case 'month':
                        return roundNumbers(value * 4);
                    case 'day':
                        return roundNumbers(value / 7); 
                }
            case 'day': 
                switch (selectedPeriod) {
                    case 'year':
                        return roundNumbers(value * 365);
                    case 'quarter':
                        return roundNumbers(value * 84);
                    case 'month':
                        return roundNumbers(value * 30); 
                    case 'week':
                        return roundNumbers(value * 7);
                }
        }
    };

    const handleTimeSelectionRendering = (period, value) => {
        if (averagePeriod === null){
            return value; 
        } else {
           return calculateAverage(period, value, averagePeriod);
        }
    };

    const handleComponentDidMount = () => {
        var usefulCategories =  categories.filter((obj) => {
            return obj.sum !== 0;
        });

        console.log("hmm");
        return (
            <SafeAreaView style={styles.container3}>
                {/* <ScrollView> */}
                {/* Header */}
                <View style={[styles.genericRow, {marginHorizontal: Platform.OS ==="ios"? 10:0}]}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image 
                            source={require('../../assets/Icons/back.png')}
                            style={{
                                width: 18,
                                height: 18,
                                tintColor: COLORS.primary,
                            }}
                        />
                    </TouchableOpacity>
                    <Text style={{color: COLORS.primary, ...FONTS.h2}}>Budget Details</Text>
                    {/* Menu */}
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <Image 
                            source={require('../../assets/Icons/menu.png')}
                            resizeMode='contain'
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: COLORS.primary,
                            }}
                        />
                    </TouchableOpacity>
                </View>

                <View style={[styles.genericRow, {marginHorizontal: Platform.OS ==="ios"? 10:0}]}> 
                    <Text style={{...FONTS.h3, color: COLORS.secondary}}>Summary</Text>
                    <View style={{alignSelf:'flex-end'}}>
                        <AveragePeriodPicker />
                    </View>
                </View>

                {/* Budget overview card */}
                <View style={[styles.genericRow, {marginTop: 10, marginHorizontal: Platform.OS ==="ios"? 10:0}]}>
                    <View style={{backgroundColor:'aliceblue', margin: 5, padding: 8, width: 180, marginBottom: 10, alignItems:'center'}}>
                        <Text style={{...FONTS.h4, color: COLORS.lightGray3, textDecorationLine: 'underline', alignSelf:'flex-start'}}>Recurring</Text>

                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={{...FONTS.h4, color: COLORS.lightGray3}}>$</Text>
                            <Text style={{...FONTS.h2, color: COLORS.bluebell, marginHorizontal: 5}}>{handleTimeSelectionRendering(shortTerm[1], shortTerm[0])}</Text>
                            <Text style={{...FONTS.h4, color: COLORS.lightGray3}}>USD</Text>
                        </View>

                    </View>

                    <View style={{backgroundColor:'aliceblue', margin: 5, padding: 8, width: 180, marginBottom: 10, alignItems:'center'}}>
                        <Text style={{...FONTS.h4, color: COLORS.lightGray3, textDecorationLine: 'underline', alignSelf:'flex-start'}}>Non-Recurring</Text>

                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={{...FONTS.h4, color: COLORS.lightGray3}}>$</Text>
                            <Text style={{...FONTS.h2, color: COLORS.bluebell, marginHorizontal: 5}}>{handleTimeSelectionRendering(longTerm[1], longTerm[0])}</Text>
                            <Text style={{...FONTS.h4, color: COLORS.lightGray3}}>USD</Text>
                        </View>

                    </View>
                </View>

                <View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal: Platform.OS ==="ios"? 10:0}}>
                    <Text style={{...FONTS.h3, color: COLORS.secondary}}>Categories</Text>
                    <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
                        <TouchableOpacity onPress={() => navigation.navigate('Delete Categories')} style={{backgroundColor:'#bfbfbf', elevation: 2, borderRadius: 15, padding: 5, width: 60, marginRight:10}}>
                            <Text style={{...FONTS.h4, color: COLORS.white, alignSelf:'center'}}>Delete</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Add Categories')} style={{backgroundColor:'#7E9181', elevation: 2, borderRadius: 15, padding: 5, width: 60}}>
                            <Text style={{...FONTS.h4, color: COLORS.white, alignSelf:'center'}}>Add</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
                <PieChart data={usefulCategories}/>

                {/* List */}
                <FlatList 
                    data={usefulCategories}
                    renderItem={({ item }) => {
                        return (
                            <View> 
                                <View style={{marginBottom: 15, backgroundColor: "#fffee9", padding: 8, borderBottomLeftRadius: 15, borderBottomRightRadius: 15, borderWidth: 1, borderColor: COLORS.grass, borderTopWidth: 2, flexDirection:'row', justifyContent:'space-between'}}>
                                    <Text style={{...FONTS.h3, color: COLORS.purple, textAlign: 'right'}}>{item.title}</Text>
                                    <Text style={{...FONTS.h3, color: COLORS.orange, textAlign: 'right'}}>$ {handleTimeSelectionRendering(item.period,item.value)}</Text>
                                </View>
                            </View>
                        );
                    }}
                    keyExtractor={item => item.id}
                    contentContainerStyle={{
                        flexGrow: 1,
                        marginHorizontal: Platform.OS ==="ios"? 10:0
                    }}
                />  

                {/* </ScrollView> */}
            </SafeAreaView>
        );
    };

    return (
        handleComponentDidMount()
    );

}

const mapStateToProps = (store) => ({
    categories: store.user.categories,
    longTerm: store.user.longTerm,
    shortTerm: store.user.shortTerm,
    averagePeriod: store.averagePeriod.averagePeriod
});

const mapDispatchProps = (dispatch) => bindActionCreators({ fetchBudget, addBudget }, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(withNavigation(BudgetDetail));
