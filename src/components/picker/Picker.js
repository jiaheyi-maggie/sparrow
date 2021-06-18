/* Picker (with term passed in) */
import React, { useState } from 'react';
import { Modal, TouchableOpacity, SafeAreaView, Text, StyleSheet, View, Image, FlatList } from 'react-native';
import store from '../../app/store';
import periods from '../../data/periods';


const Picker = ({ term }) => {
    const [chosen, setChosen] = useState('time period');

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

    // compare strings
    const strcmp= (a, b) => {
      if (a.toString() < b.toString()) return -1;
      if (a.toString() > b.toString()) return 1;
      return 0;
    };

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
                        if (strcmp(term, 'long') == 0) {
                          store.dispatch(changeLongTermPeriod(item.title));
                        } 
                        else {
                          store.dispatch(changeShortTermPeriod(item.title));
                        }
                      }}
                    >
                        <Text style={styles.selectionTextStyle}>{item.title}</Text>
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
                        style={{marginTop: 5, width: 25, height: 25}}
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
    },
    buttonClose: {
      backgroundColor: "#7E9181",
      width: 280,
      height: 50,
      paddingTop: 8,
      flexDirection: 'row',
      justifyContent: 'center',
      textAlign: 'center'
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
      fontSize: 35
    },
    selectionTextStyle: {
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
  

export default Picker;