import React, { Component } from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import styles from '../../styles/homeStyle';
import { withNavigation } from 'react-navigation';
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
                    <Text style={styles.title}>Remaining</Text> 

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
            </SafeAreaView>
        );
    }

    render() {
        return(
            this.handleComponentDidMount()
        );
    }
};

export default connect(withNavigation(RemainingDetail));