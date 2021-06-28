import React, { Component }  from 'react';
import { Text, SafeAreaView, View, ScrollView, FlatList, Pressable, TouchableOpacity, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from '../../styles/homeStyle';


export class Notifications extends Component {

  handleComponentDidMount() {
    return (
      <SafeAreaView style={styles.container2}>
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
            <Text style={styles.title}>Notifications</Text>

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