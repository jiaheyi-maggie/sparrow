import React, { Component }  from 'react';
import { Text, SafeAreaView, View, ScrollView, FlatList, Pressable, TouchableOpacity, Image, Modal } from 'react-native';
import { fetchBudget } from '../../app/actions/fetchBudget';
import { addBudget } from '../../app/actions/addBudget';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withNavigation } from 'react-navigation';
import styles from '../../styles/homeStyle';

export class AddCategoriesDetail extends Component {

    componentDidMount() {
        this.props.fetchBudget();
    };

  handleComponentDidMount(categories, shortTerm, longTerm) {
    return (
    <Modal
    animationType="slide"
    // transparent={true}
    > 
        {/* <SafeAreaView style={styles.container}> */}
        <SafeAreaView style={styles.modalContainer}>
            <ScrollView>
                <View style={{
                    flexDirection: 'row', 
                    alignItems: 'baseline',
                    justifyContent: 'space-between'
                    }}>

                    {/* Display name */}
                    <Text style={styles.title}>New Category</Text>
                    {/* add button */}
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.addButtonContainer}>
                        <View style={{flexDirection: 'row'}}>
                        
                        <Image 
                            source={require('../../assets/Icons/add.png')}
                            resizeMode='contain'
                            style={{
                                width: 23,
                                height: 23,
                                tintColor: '#264653',
                                marginRight: 15
                            }}
                        />
                        <Text style={styles.addText}>Add</Text>
                        </View>
                    </TouchableOpacity>
                </View>


                {/* Main Content */}
            </ScrollView>
        </SafeAreaView>
    </Modal>
    );
  }

  render() {
    const { categories, shortTerm, longTerm } = this.props;
    return(
      this.handleComponentDidMount(categories, shortTerm, longTerm)
    );
  }
}

// allow access to data in Home component
const mapStateToProps = (store) => ({
  categories: store.user.categories,
  longTerm: store.user.longTerm,
  shortTerm: store.user.shortTerm
});

// bind component to redux
const mapDispatchProps = (dispatch) => bindActionCreators({ fetchBudget, addBudget }, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(withNavigation(AddCategoriesDetail));