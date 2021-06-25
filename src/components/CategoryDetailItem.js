import React, { useState } from 'react';
import { SafeAreaView, Text, View, TextInput, Alert, StyleSheet, Modal, FlatList, TouchableOpacity, Image } from 'react-native';
import store from '../app/store';
import styles from '../styles/onboardingStyle';
import periods from '../data/periods';

const CategoryDetailItem = ({ item }) => {

    const [period, setPeriod] = useState(store.getState().reducer[item.id].period);
    const [value, setValue] = useState(null);
    const [optional, setOptional] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    // action to update redux
    const updateValue = value => {
        return {
            type: 'updateValue',
            payload: {item, value}
        };
    }
    const updateOptional = value => {
        return {
            type: 'updateOptional',
            payload: {item, value}
        };
    }
    const updatePeriod = period => {
        return {
            type: 'updatePeriod',
            payload: {item, period}
        }
    };

    // functions to handle input 
    const handleTextInput = (value) => {
        setValue(value);
        store.dispatch(updateValue(value));
    };
    const handleClickOpen = () => {
        setModalVisible(!modalVisible);
    };

    // handle optional input with error catch
    const handleOptionalInput = (value) => {
        switch (period) {
            case 'year': 
                if (value > 1) {
                    Alert.alert(
                        'Input not valid',
                        'Cannot have more than 1 year in a year :(',
                        [
                            { text: "OK" }
                        ],
                        { cancelable: true }
                    )
                }
            case 'quarter': 
                if (value > 4) {
                    Alert.alert(
                        'Input not valid',
                        'Cannot have more than 4 quarters in a year :(',
                        [
                            { text: "OK" }
                        ],
                        { cancelable: true }
                    )
                }
            case 'month':
                if (value > 12) {
                    Alert.alert(
                        'Input not valid',
                        'Cannot have more than 12 months in a year :(',
                        [
                            { text: "OK" }
                        ],
                        { cancelable: true }
                    )
                }
            case 'week':
                if (value > 52) {
                    Alert.alert(
                        'Input not valid',
                        'Cannot have more than 52 weeks in a year :(',
                        [
                            { text: "OK" }
                        ],
                        { cancelable: true }
                    )
                    
                }
            case 'day':
                if (value > 365) {
                    Alert.alert(
                        'Input not valid',
                        'Cannot have more than 365 days in a year :(',
                        [
                            { text: "OK" }
                        ],
                        { cancelable: true }
                    )
                }
        }
        setOptional(value);
        store.dispatch(updateOptional(value));
    };

    const handleConditionalPeriodSelection = () => {
        return (
            <SafeAreaView style={styles.categoryCard}>
                <View style={styles.genericRowAlign}>
                    <Text style={styles.itemTitle}>{item.title} :</Text>
                </View>

                <View style={styles.genericRowAlign}>
                    <View style={styles.textInputContainer}>
                        <Text style={styles.itemDescription}>$</Text>
                        <TextInput
                            style={[styles.itemDescription, {marginRight: 15, color: "#F4A261"}]}
                            value={value}
                            onChangeText={(value) => handleTextInput(value)}
                            placeholder=" 200 "
                            placeholderTextColor='#D7CEB2'
                            keyboardType="phone-pad"
                        />
                    </View>
                    <Text style={styles.itemDescription}> per </Text>
                    
                    {/* Time Period Picker */}
                    <SafeAreaView style={style.startView}>
                        <Modal animationType="fade" transparent={true} visible={modalVisible} onRequestClose={() => {setModalVisible(!modalVisible)}}>
                            {/* View for the list of time periods */}
                            <View style={style.centeredView}>
                            <View style={style.modalView}>
                                <Text style={style.textStyle2}>Select time period:</Text>
                                <FlatList 
                                    data={periods}
                                    renderItem={({ item }) => (
                                        <TouchableOpacity
                                        style={[style.button, style.buttonClose]}
                                        onPress={() => {
                                            setModalVisible(false); 
                                            setPeriod(item.title);
                                            store.dispatch(updatePeriod(item.title));
                                        }}>
                                        <Text style={style.textStyle}>{item.title}</Text>
                                        </TouchableOpacity>
                                    )}
                                    keyExtractor={item => item.id}
                                />
                            </View>
                            </View>
                        </Modal>

                        <TouchableOpacity style={[style.button, style.buttonOpen]} onPress={() => handleClickOpen()}>
                            <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                            <Text style={style.textStyle}> {period} </Text>
                            <Image 
                                source={require('../assets/Icons/down-arrow.png')} 
                                resizeMode='contain'
                                style={{marginTop: 5, width: 25, height: 25, tintColor: '#fff'}}
                            />
                            </View>
                        </TouchableOpacity>
                    </SafeAreaView>

                </View>

                <View style={styles.genericRowAlign}>
                    <Text style={styles.itemDescription}>for </Text>
                    <View style={[styles.textInputContainer, {width: 63}]}>
                        <TextInput
                            style={[styles.itemDescription, {marginRight: 1, color:'#F4A261'}]}
                            value={optional}
                            onChangeText={(value) => handleOptionalInput(value)}
                            placeholder=" 12 "
                            placeholderTextColor='#D7CEB2'
                            keyboardType="phone-pad"
                        />
                    </View>
                    <Text style={styles.itemDescription}> {period.concat('s')}</Text>
                    <Text style={styles.itemDescription}> per year</Text>
                </View>
            </SafeAreaView>
        );
    }

    return (
        handleConditionalPeriodSelection()
    );
};

// small style for category card
const style = StyleSheet.create({
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
      backgroundColor: "#EDFFEC",
      width: 350,
      borderRadius: 5,
      padding: 10,
      alignItems: 'center',
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
      borderRadius: 20,
      paddingHorizontal: 10,
      elevation: 2,
      padding: 5,
      marginVertical: 5
    },
    buttonOpen: {
      backgroundColor: "#D7CEB2",
      width: 180,
    },
    buttonClose: {
      backgroundColor: "#7E9181",
      width: 280,
      flexDirection: 'row',
      justifyContent: 'center',
      textAlignVertical: 'center',
      padding: 8
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
      fontSize: 22
    },
    textStyle2: {
      color: "#264653",
      fontSize: 20
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });

export default CategoryDetailItem;
