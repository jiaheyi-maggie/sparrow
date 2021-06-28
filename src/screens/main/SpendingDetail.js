import React, { Component } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import styles from '../../styles/homeStyle';
import { withNavigation } from 'react-navigation';
import AveragePeriodPicker from '../../components/picker/AveragePeriodPicker';
import { connect } from 'react-redux';

export class SpendingDetail extends Component {

    handleComponentDidMount() {
        return (
            <SafeAreaView style={styles.container2}>
                {/* Header */}
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
                    <Text style={styles.title}>Spending</Text> 

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

                {/* Main Content */}
                
                {/* Spending overview card */}
                <View style={{ 
                    backgroundColor:'#FAA381',
                    borderRadius: 20,
                    padding: 10,
                    elevation: 2,
                    margin: 10,
                    }}>

                    {/* Total */}
                    <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
                        <Text style={{
                            color: '#fff',
                            fontWeight: 'bold',
                            textAlign: 'left',
                            fontSize: 19,
                            paddingVertical: 5,
                            marginHorizontal: 20
                        }}>
                            Recurring Total: 
                        </Text>
                        <Text style={[styles.number, {color: '#264653', fontSize: 19}]}>$ 0</Text>
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
                            Non-Recurring Total:
                        </Text>
                        <Text style={[styles.number, {color: '#264653', fontSize: 19}]}>$ 0</Text>
                    </View>
                </View>


            </SafeAreaView>
        );
    }

    render() {
        return(
            this.handleComponentDidMount()
        );
    }
};

export default (withNavigation(SpendingDetail));