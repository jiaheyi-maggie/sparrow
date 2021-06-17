/* Customized picker  */
import React, { useState } from 'react';
import { Modal, TouchableOpacity, SafeAreaView, Text, StyleSheet, View, Image } from 'react-native';

const ModalPicker = ({ item }) => {
    const [chosen, setChosen] = useState('time period');
    const [modalVisible, setModalVisible] = useState(false);

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
                        <Text style={styles.modalText}>Hello World!</Text>
                        <TouchableOpacity
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            {/* Time Period closed picker view */}
            <TouchableOpacity
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}
            >
                <View style={{flexDirection:'row', alignItems: 'center'}}>
                    <Text style={styles.textStyle}> time period </Text>
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

const styles = StyleSheet.create({
    startView: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'flex-start'
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
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
      marginTop: 2,
      elevation: 2,
      padding: 2
    },
    buttonOpen: {
      backgroundColor: "#D7CEB2",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
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