import React, { Component }  from 'react';
import { Text, SafeAreaView, View, TouchableOpacity, Image, Modal, TextInput, Alert, FlatList, Keyboard } from 'react-native';
import { addBudget } from '../../app/actions/addBudget';
import { updateRecurring } from '../../app/actions/updateRecurring';
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

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        this.setState({modalVisible: !this.state.modalVisible});
        this.props.navigation.goBack();
    }

    handleComponentDidMount() {
        return (

                <SafeAreaView style={styles.container}>

                    {/* header */}
                    <View style={{
                        flexDirection: 'row', 
                        justifyContent:'space-between',
                        alignItems: 'baseline'
                        }}>
                        
                        {/* go back */}
                        <TouchableOpacity style={styles.backButton} onPress={() => this.props.navigation.navigate('Home')}>
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

                
                    </View>

                    <View style={{alignItems: 'center'}}>
                        {/* profile picture */}
                        <Image
                            source={require('../../assets/Icons/profile.png')}
                            style={{
                                width: 80,
                                height: 80
                            }}
                        />
                        {/* Display name */}
                        <Text style={styles.title2}>{this.props.currentUser.firstName} {this.props.currentUser.lastName}</Text>
                        <Text style={styles.subtitle}>@{this.props.currentUser.username}</Text>

                    </View>

                    <Text></Text>

                    <Text>{this.props.shortTerm}</Text>




                    {/* Done Button */}
                    <View style={{alignItems: 'center', justifyContent: 'center', marginBottom: 10}}>
                        <TouchableOpacity onPress={() => this.handleClick()} style={styles.cancelButtonContainer}>
                            <Text style={styles.cancelText}>Done</Text>
                        </TouchableOpacity>
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

const mapStateToProps = (store) => ({
    currentUser: store.user.currentUser,
    longTerm: store.user.longTerm,
    shortTerm: store.user.shortTerm
});


export default connect(mapStateToProps, null)(withNavigation(ProfileModal));