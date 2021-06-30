// EDIT THIS TO CHANGE USER INFO:COPIED RIGHT NOW!!!!

import React, { Component }  from 'react';
import { Text, SafeAreaView, View, TouchableOpacity, Image, Modal, TextInput, Alert, FlatList, Keyboard } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withNavigation } from 'react-navigation';
import periods from '../../data/periods';
import styles from '../../styles/homeStyle';
import store from '../../app/store';

export class ProfileModal extends Component {

    constructor(props) {
        super(props);

        this.state ={
            modalVisible: true
        }
    }

    handleComponentDidMount() {
        return (
            <Modal visible={this.state.modalVisible} animationType="slide"> 
                <SafeAreaView ref={this.wrapperRef} style={styles.modalContainer}>
                
                    {/* Display name */}
                    <Text style={styles.title2}>{this.props.currentUser.firstName} {this.props.currentUser.lastName}</Text>
                    

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
    currentUser: store.user.currentUser
});

// const mapDispatchProps = (dispatch) => bindActionCreators({ addBudget, updateRecurring }, dispatch);

export default connect(mapStateToProps, null)(withNavigation(ProfileModal));