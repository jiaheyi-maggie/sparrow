/* Customized picker  */
import React, { useState } from 'react';
import { Modal, TouchableOpacity, SafeAreaView, Text, StyleSheet, View, Image, Dimensions, FlatList } from 'react-native';


const ModalPicker = ({ item }) => {
    // TODO: track time period selection
    const [chosen, setChosen] = useState('time period');
    // toggle modal visibility
    const [modalVisible, setModalVisible] = useState(false);

    //TODO: render list upon modal pop up
    
    const handleClickOpen = () => {
        setModalVisible(true);
    };

    const handleClickClose = () => {
        setModalVisible(false);
        setChosen('Year');
    }

    const options = [
        {
            id: 0,
            title: 'Year',
        },
        {
            id: 1,
            title: 'Quarter',
        },
        {
            id: 2,
            title: 'Month',
        },
        {
            id: 3,
            title: 'Week',
        },
        {
            id: 4,
            title: 'Day',
        },
    ];

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
                        {/* TODO: change this to a render function */}
                        <TouchableOpacity
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => handleClickClose()}
                        >
                            <Text style={styles.textStyle}>Year</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => handleClickClose()}
                        >
                            <Text style={styles.textStyle}>Quarter</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => handleClickClose()}
                        >
                            <Text style={styles.textStyle}>Month</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => handleClickClose()}
                        >
                            <Text style={styles.textStyle}>Week</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => handleClickClose()}
                        >
                            <Text style={styles.textStyle}>Day</Text>
                        </TouchableOpacity>
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