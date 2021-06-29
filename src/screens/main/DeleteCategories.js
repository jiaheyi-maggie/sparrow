import React, { Component }  from 'react';
import { Text, SafeAreaView, View, TouchableOpacity, Image, Modal, TextInput, Alert, FlatList, Keyboard } from 'react-native';
import { removeBudget } from '../../app/actions/removeBudget';
import { updateRecurring } from '../../app/actions/updateRecurring';
import { connect } from 'react-redux';
import Checkbox from '@react-native-community/checkbox';
import { bindActionCreators } from 'redux';
import { withNavigation } from 'react-navigation';
import styles from '../../styles/homeStyle';

export class DeleteCategories extends Component {

    constructor(props) {
        super(props);

        this.state ={
            pageOffset:0,
            usefulCategories: this.props.categories.filter((obj) => {return obj.checked === true}),
            categoriesCopy: this.props.categories,
            shortTerm: this.props.shortTerm,
        }

        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.updateCategories = this.updateCategories.bind(this);
        this.calculateRecurring = this.calculateRecurring.bind(this);
    }

    // for modal
    handleClickOpen = () => {
        this.setState({modalVisible: !this.state.modalVisible});
    };

    // calculate new recurring budget based on short term period after deleting
    // v: yearly sum
    calculateRecurring = (p, v) => {
        switch (p) {
            case 'year':
                return v;
            case 'quarter':
                return Math.floor(v/4);
            case 'month':
                return Math.floor(v/12);
            case 'week':
                return Math.floor(v/52);
            case 'day':
                return Math.floor(v/365);
        }
    };

    // remove categories by matching their checked fields with state array
    updateCategories = () => {

        var sum = 0;
        for (var i = 0; i < this.state.categoriesCopy.length; i++) {
            if (this.state.categoriesCopy[i].checked === true) {
                sum += this.state.categoriesCopy[i].sum;
            }
        }

        const recurring = this.calculateRecurring(this.state.shortTerm[1], sum);

        var shortTermCopy = [...this.state.shortTerm];
        shortTermCopy[0] = recurring;
        const updatedCategories = this.state.categoriesCopy.filter((obj) => {
            return obj.checked === true;
        });

        // dispatch to store
        removeBudget(updatedCategories);
        updateRecurring(shortTermCopy);

    };


    handleComponentDidMount() {
        return (
            <Modal animationType="slide"> 
                <SafeAreaView style={[styles.modalContainer, {bottom: this.state.pageOffset}]}>
                    <View style={{
                        flexDirection: 'row', 
                        alignItems: 'baseline',
                        justifyContent: 'space-between'
                        }}>

                        {/* Display name */}
                        <Text style={styles.title2}>Delete Categories</Text>
                        {/* add button */}
                        <TouchableOpacity style={styles.addButtonContainer}
                            onPress={() => {
                                // TODO: update categories
                                this.updateCategories();
                                this.props.navigation.goBack();
                            }} 
                        >
                            <Text style={styles.addText}>Done</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Main Content */}
                    <FlatList 
                        data={this.state.usefulCategories}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity style={styles.listContainer} 
                                    onPress={() => {
                                        var copy = [...this.state.categoriesCopy];
                                        copy[item.id].checked = !copy[item.id].checked;
                                        this.setState({categoriesCopy: copy});
                                        console.log(this.state.categoriesCopy);
                                    }}>
                                    <Text style={styles.listText}>{item.title}</Text>
                                    <Checkbox 
                                        disabled={false}
                                        value={!this.state.categoriesCopy[item.id].checked}
                                        onValueChange={() => {
                                            var copy = [...this.state.categoriesCopy];
                                            copy[item.id].checked = !copy[item.id].checked;
                                            this.setState({categoriesCopy: copy});
                                        }}
                                    />
                                </TouchableOpacity>
                            );
                        }}
                        keyExtractor={item => item.id}
                        contentContainerStyle={{
                            flexGrow: 1,
                        }}
                    />  

                    {/* Cancel Button */}
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={[styles.cancelButtonContainer, {marginBottom: 10}]}>
                            <Text style={styles.cancelText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>

                </SafeAreaView>
            </Modal>
        );
    }

    render() {
        return(
            this.handleComponentDidMount()
        );
    }
};

const mapStateToProps = (store) => ({
  categories: store.user.categories,
  newCategory: store.user.newCategory,
  shortTerm: store.user.shortTerm
});

const mapDispatchProps = (dispatch) => bindActionCreators({ removeBudget, updateRecurring }, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(withNavigation(DeleteCategories));