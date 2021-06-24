/* Picker for Overview (with term passed in): mainly style change */
import React, { useState } from 'react';
import { Modal, TouchableOpacity, SafeAreaView, Text, StyleSheet, View, Image, FlatList } from 'react-native';

import store from '../../app/store';
import periods from '../../data/periods';


const OverviewPicker = ({ term }) => {

  const determineDefaultState = () => {
    if (term === "Long") {
      return store.getState().longTerm[1];
    } else if (term ==="Short") {
      return store.getState().shortTerm[1];
    }
  }; 
  const [chosen, setChosen] = useState(determineDefaultState());

  // toggle modal visibility
  const [modalVisible, setModalVisible] = useState(false);

  // when time period button is clicked
  const handleClickOpen = () => {
      setModalVisible(!modalVisible);
  };

  // action to update long term time period
  const changeLongTermPeriod = period => {
    return {
        type: 'changeLongTermPeriod',
        payload: period
    }
  };
  
  const changeShortTermPeriod = period => {
    return {
      type: 'changeShortTermPeriod',
      payload: period
    } 
  }


  return (
    <SafeAreaView style={styles.startView}>
      <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {setModalVisible(!modalVisible)}}
      >
        {/* View for the list of time periods */}
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <FlatList 
              data={periods}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => {
                    setModalVisible(false); 
                    setChosen(item.title);
                    // update term period
                    if (term === 'Long') {
                      store.dispatch(changeLongTermPeriod(item.title));
                    } 
                    else if (term === 'Short') {
                      store.dispatch(changeShortTermPeriod(item.title));
                    }
                  }}
                >
                  <Text style={styles.textStyle}>{item.title}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </Modal>

      {/* Time Period closed picker view */}
      <TouchableOpacity
        style={[styles.button, styles.buttonOpen]}
        // actions when time period button is clicked
        onPress={() => handleClickOpen()}
      >
        <View style={{flexDirection:'row', alignItems: 'center'}}>
          <Text style={styles.textStyle}> {chosen} </Text>
          <Image 
            source={require('../../assets/Icons/down-arrow.png')} 
            resizeMode='contain'
            style={{marginTop: 5, width: 25, height: 25, tintColor: '#fff'}}
          />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    startView: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'flex-start'
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    modalView: {
      backgroundColor: "white",
      width: 350,
      borderRadius: 20,
      padding: 20,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 10,
      paddingHorizontal: 8,
      elevation: 2,
      padding: 2,
      marginVertical:10
    },
    buttonOpen: {
      backgroundColor: "#D7CEB2",
      width: 170,
      alignItems: 'center'
    },
    buttonClose: {
      backgroundColor: "#7E9181",
      width: 280,
      height: 50,
      paddingTop: 8,
      flexDirection: 'row',
      justifyContent: 'center',
      textAlignVertical: 'center'
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
      fontSize: 25
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });

export default OverviewPicker;