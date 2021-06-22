import React, { Component }  from 'react';
import { Text, SafeAreaView, View, ScrollView, FlatList, Pressable, TouchableOpacity, Image } from 'react-native';

import { fetchBudget } from '../../app/actions/fetchBudget';

// allow connect to redux
import { connect } from 'react-redux';
// bind actions to components
import { bindActionCreators } from 'redux';

import { withNavigation } from 'react-navigation';

import styles from '../../styles/homeStyle';


export class Notification extends Component {

  componentDidMount() {
    this.props.fetchBudget();
  };

  signOutUser = async () => {
    try {
      await firebase.auth().signOut();
      Alert.alert('signed out');
      this.props.navigation.navigate('signin');
    } catch (error) {
      console.log(error);
    }
  };

  handleComponentDidMount(categories, shortTerm, longTerm) {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
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
                  marginLeft: 15,
                  marginTop: 10
                }}
              />
            </TouchableOpacity>

            {/* Display name */}
            <Text style={styles.title}>Notification</Text>

            {/* Log out */}
            <TouchableOpacity onPress={() => this.signOutUser()}>
              <Image 
                source={require('../../assets/Icons/logout.png')}
                resizeMode='contain'
                style={{
                  width: 23,
                  height: 23,
                  tintColor: '#7E9181',
                  marginRight: 15,
                  marginTop: 10
                }}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
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
const mapDispatchProps = (dispatch) => bindActionCreators({ fetchBudget }, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(withNavigation(Notification));