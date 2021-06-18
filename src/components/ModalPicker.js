/* Customized picker (requires item passed in)  */
import React, { useState } from 'react';
import { Modal, TouchableOpacity, SafeAreaView, Text, StyleSheet, View, Image, FlatList } from 'react-native';
import store from '../app/store';
import periods from '../data/periods';


const ModalPicker = ({ item }) => {
    const [chosen, setChosen] = useState('time period');

    // toggle modal visibility
    const [modalVisible, setModalVisible] = useState(false);

    // when time period button is clicked
    const handleClickOpen = () => {
        setModalVisible(!modalVisible);
    };

    // action to update reducer
    const updatePeriod = period => {
        return {
            type: 'updatePeriod',
            payload: {item, period}
        }
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

                        {/* TIME PERIOD LIST HERE */}
                        <FlatList 
                            data={periods}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => {
                                        setModalVisible(false); 
                                        setChosen(item.title);
                                        // update reducer
                                        store.dispatch(updatePeriod(item.title));
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
                        source={require('../assets/Icons/down-arrow.png')} 
                        resizeMode='contain'
                        style={{marginTop: 5, width: 25, height: 25}}
                    />
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

// small style for category card
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
  

export default ModalPicker;