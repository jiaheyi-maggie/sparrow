import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';

export default class CalculatorButtons extends Component {

    // performance optimization: component only renders once
    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }

    // call the bound function from its parent component to handle button press
    _handlePress = (value) => {
        requestAnimationFrame(() => {
            this.props.onButtonPress(value);
        })
    };

    render() {
        return(
            <View>
                {/* from parent class */}
                {
                    this.props.buttons.map((row, index) => (
                        <View key={index}>
                            {
                                row.map((col, index) => (
                                    <TouchableHighlight key={index} onPress={() => this._handlePress(col)}>
                                        <Text>{col}</Text>
                                    </TouchableHighlight>
                                ))
                            }
                        </View>
                    ))
                
                }
            </View>
        );
    };
}

const styles = StyleSheet.create({

})