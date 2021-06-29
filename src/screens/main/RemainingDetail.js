import React, { Component } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import styles from '../../styles/homeStyle';
import { withNavigation } from 'react-navigation';
import AveragePeriodPicker from '../../components/picker/AveragePeriodPicker';
import { connect } from 'react-redux';

export class RemainingDetail extends Component {

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
                    <Text style={styles.title}>Remaining</Text> 

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

                {/* time period selection */}
                <View style={{flexDirection: 'row', alignItems: 'baseline', paddingLeft: 10, backgroundColor: '#F8FAFB', padding: 5, marginTop: 5}}>
                    <Text style={styles.listText3}> Select a time period: </Text>
                    <AveragePeriodPicker />
                </View>

                {/* Remaining overview card */}
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
                        <Text style={[styles.number, {color: '#264653', fontSize: 19}]}>$ 4107</Text>
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
                        <Text style={[styles.number, {color: '#264653', fontSize: 19}]}>$ 6969</Text>
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

export default (withNavigation(RemainingDetail));