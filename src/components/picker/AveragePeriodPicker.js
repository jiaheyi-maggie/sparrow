/* Picker (with term passed in) */
import React, { useState } from 'react';
import { Modal, TouchableOpacity, SafeAreaView, Text, StyleSheet, View, Image, FlatList } from 'react-native';
import store from '../../app/store';
import periods from '../../data/periods';


const AveragePeriodPicker = () => {
    const [chosen, setChosen] = useState('time period');

    // toggle modal visibility
    const [modalVisible, setModalVisible] = useState(false);

    // when time period button is clicked
    const handleClickOpen = () => {
        setModalVisible(!modalVisible);
    };

    // action to change averagePeriod
    const changeAveragePeriod = period => {
        return {
            type: 'changeAveragePeriod',
            payload: period
        }
    };

    return (
        <SafeAreaView style={styles.startView}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => handleClickOpen()}
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
                            store.dispatch(changeAveragePeriod(item.title));
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
                    <Text style={styles.textStyle}>  {chosen}  </Text>
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
      padding: 10,
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
      borderRadius: 30,
      elevation: 2,
      padding: 3,
      marginVertical:5
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
      fontWeight: 'bold',
      textAlign: "center",
      fontSize: 20
    },
    selectionTextStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 23
      },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });
  

export default AveragePeriodPicker;