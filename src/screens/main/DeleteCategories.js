import React, { Component }  from 'react';
import { Text, SafeAreaView, View, TouchableOpacity, Image, Modal, TextInput, Alert, FlatList, Keyboard } from 'react-native';
import { removeBudget } from '../../app/actions/removeBudget';
import { updateRecurring } from '../../app/actions/updateRecurring';
import { connect } from 'react-redux';
import Checkbox from '@react-native-community/checkbox';
import { bindActionCreators } from 'redux';
import { withNavigation } from 'react-navigation';
import periods from '../../data/periods';
import styles from '../../styles/homeStyle';
import store from '../../app/store';
import ListItem from '../../components/main/ListItem';

export class DeleteCategories extends Component {

    constructor(props) {
        super(props);

        this.state ={
            pageOffset:0,
            usefulCategories: this.props.categories.filter((obj) => {return obj.checked === true}),
            checkedStateArr: [],
        }

        this.handleClickOpen = this.handleClickOpen.bind(this);
    }


    componentDidMount() {
        const arr = new Array(this.state.usefulCategories.length).fill(true);
        this.setState({checkedStateArr: arr});

        // keyboard listeners
        this.keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            this._keyboardDidShow,
        );

        this.keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            this._keyboardDidHide,
        );

    };

    /* For Keyboard events */
    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    _keyboardDidShow(event) {
        this.setState({
            keyboardOffset: event.endCoordinates.height - 130,
        })
    }

    _keyboardDidHide() {
        this.setState({
            keyboardOffset: 0,
        })
    }

    // for modal
    handleClickOpen = () => {
        this.setState({modalVisible: !this.state.modalVisible});
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
                                        var copy = [...this.state.checkedStateArr];
                                        copy[item.id] = !copy[item.id];
                                        this.setState({checkedStateArr: copy});
                                        // console.log(this.state.checkedStateArr);
                                    }}>
                                    <Text style={styles.listText}>{item.title}</Text>
                                    <Checkbox 
                                        disabled={false}
                                        value={!this.state.checkedStateArr[item.id]}
                                        onValueChange={() => {
                                            var copy = [...this.state.checkedStateArr];
                                            copy[item.id] = !copy[item.id];
                                            this.setState({checkedStateArr: copy});
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