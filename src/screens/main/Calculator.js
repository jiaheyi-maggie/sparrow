import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from '../../styles/homeStyle';

export class Calculator extends Component {

    handleComponentRendering() {
        return (
            <SafeAreaView style={styles.container2}>
                {/* Header */}
                <View style={{flexDirection: 'row', justifyContent:'flex-start',alignItems:'baseline', marginBottom: 10}}>
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
                    <Text style={styles.title}>Calculator</Text> 
                </View>

                {/* main content */}
                {/* Calculation History */}
                <View style={{backgroundColor:'#D7CEB2', flex: 6}}>
                    <Text>History</Text>
                </View>

                {/* Output */}
                <View style={{backgroundColor: '#FFF4CB', flex: 4}}>

                </View>

                {/* Number pad */}
                <View style={{flex: 9, borderRadius: 15, margin: 10}}>

                </View>

            </SafeAreaView>
            
        );
    }


    render() {
        return (
           this.handleComponentRendering()
        );
    }
};

export default withNavigation(Calculator);