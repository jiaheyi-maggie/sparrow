import React, { Component }  from 'react';
import { Text, SafeAreaView, View, ScrollView, FlatList, Pressable, TouchableOpacity, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from '../../styles/homeStyle';


export class Notifications extends Component {

  handleComponentDidMount() {
    return (
      <SafeAreaView style={styles.container2}>
        <ScrollView>
        
            {/* Display name */}
            <Text style={styles.title}>Notifications</Text>
        </ScrollView>
      </SafeAreaView>
    );
  }

  render() {
    return(
      this.handleComponentDidMount()
    );
  }
}


export default withNavigation(Notifications);