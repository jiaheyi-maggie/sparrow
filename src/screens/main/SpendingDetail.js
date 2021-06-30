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
                    <TouchableOpacity style={styles.backButton} onPress={() => this.props.navigation.goBack()}>
                        <Image 
                            source={require('../../assets/Icons/back.png')}
                            resizeMode='contain'
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: '#7E9181',
                            }}
                        />
                    </TouchableOpacity>

                    {/* Display name */}
                    <Text style={styles.title}>Spending</Text> 

                    {/* Menu */}
                    <TouchableOpacity style={styles.menuButton} onPress={() => this.props.navigation.openDrawer()}>
                        <Image 
                            source={require('../../assets/Icons/menu.png')}
                            resizeMode='contain'
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: '#7E9181',
                            }}
                        />
                    </TouchableOpacity>
                </View>

                {/* Main Content */}
                
                {/* Spending overview card */}
                <View style={styles.cardContainer}>

                    {/* Total */}
                    <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
                        <Text style={styles.cardText}>
                            Recurring Total: 
                        </Text>
                        <Text style={[styles.number, {color: '#264653', fontSize: 19}]}>$ 0</Text>
                    </View>

                    {/* Non-recurring */}
                    <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
                        <Text style={styles.cardText}>
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