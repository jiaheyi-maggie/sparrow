import React, { Component } from 'react';
import categories from '../../data/categories';
import { Checkbox, TouchableOpacity } from 'react-native';


const data = categories;

export default class CategoryPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: data,
            checked: false
        };
    }

    handleCheckbox = () => this.setState({checked: !this.state.checked})

    renderItems() {
        return this.state.data.map(() => {
            return (

            );
        })
    }
}
