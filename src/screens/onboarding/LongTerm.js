/* Onboarding Long Term */
import React, {useState} from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, TextInput, StyleSheet, Modal, FlatList, Image } from 'react-native';
import { useSelector } from 'react-redux';
import store from '../../app/store';
import periods from '../../data/periods';
import componentStyle from '../../styles/componentStyle';
import styles from '../../styles/onboardingStyle';

const LongTerm = ({ navigation }) => {

    /* Change longTerm and shortTerm in store */
    const input = useSelector((state) => state.longTerm);
    const list = store.getState().reducer;

    const [period, setPeriod] = useState('time period');
    const [modalVisible, setModalVisible] = useState(false);
    const handleClickOpen = () => {
        setModalVisible(!modalVisible);
    };

    // actions
    const changeLongTerm = input => {
        return {
            type: 'changeLongTerm',
            payload: input
        }
    }
    const changeShortTerm = val => {
        return {
            type: "changeShortTerm",
            payload: val
        }
    }
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

    // calculate monthly average for each cateogory
    const calculateMonthlySumBasedOnPeriod = (p, v, o) => {
        if (v === 0) {
            return 0;
        }
        if (o !== 0) {
            return Math.floor(v * o / 12);
        }
        switch (p) {
            case 'year':
                return Math.floor(v / 12);
            case 'quarter':
                return Math.floor(v / 4);
            case 'month':
                return v; 
            case 'week':
                return v * 4;
            case 'day':
                return v * 30;
        }
    }

    // sum categories' calculated monthly value
    const calculateShortTermValue = (l) => {
        var shortTermValue = 0; 
        l.forEach((category) => {
            const currVal = calculateMonthlySumBasedOnPeriod(category.period, category.value, category.optional);
            shortTermValue += parseFloat(currVal);
        });
        return shortTermValue;
    };

    const shortTermValue = calculateShortTermValue(list);
    store.dispatch(changeShortTerm(shortTermValue));

    /* On set long term value */
    const inputHandler = (input) => {
        store.dispatch(changeLongTerm(input));
    }

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.longtitle}>Do you have a budget for non-recurring spendings?</Text>
                <Text style={styles.subtitle}>This could be non-periodical vacation, gift expenses and so on.</Text>
            </View>

            <View style={styles.longtermCenter}>
                <Text style={styles.title}>I plan to spend</Text>
                <View style={styles.genericRowAlign}>
                    <Text style={styles.title}>$ </Text>
                    <TextInput
                        style={[componentStyle.input, {marginRight: 1, width: 150}]}
                        onChangeText={(input) => inputHandler(input)}
                        value={input}
                        placeholder="5000"
                        placeholderTextColor='#FFF4CB'
                        keyboardType="numeric"
                    />
                </View>

                <View style={{flexDirection:'row', paddingLeft:40, alignItems: 'baseline'}}>
                    <Text style={styles.title}>per </Text>
                    {/* <Picker term={'long'}/> */}

                    {/* Time Period Picker */}
                    <SafeAreaView style={style.startView}>
                        <Modal animationType="fade" transparent={true} visible={modalVisible} onRequestClose={() => {setModalVisible(!modalVisible)}}>
                            <View style={style.centeredView}>
                                <View style={style.modalView}>
                                    <Text style={style.textStyle2}>Select time period:</Text>
                                    <FlatList 
                                        data={periods}
                                        renderItem={({ item }) => (
                                            <TouchableOpacity style={[style.button, style.buttonClose]}
                                            onPress={() => {
                                                setModalVisible(false); 
                                                setPeriod(item.title);
                                                store.dispatch(changeLongTermPeriod(item.title));
                                            }}>
                                                <Text style={style.textStyle3}>{item.title}</Text>
                                            </TouchableOpacity>
                                        )}
                                        keyExtractor={item => item.id}
                                    />
                                </View>
                            </View>
                        </Modal>

                            {/* Time Period closed picker view */}
                            <TouchableOpacity style={[style.button, style.buttonOpen]} onPress={() => handleClickOpen()}>
                            <View style={{flexDirection:'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                <Text style={style.textStyle}> {period} </Text>
                                <Image 
                                source={require('../../assets/Icons/down-arrow.png')} 
                                resizeMode='contain'
                                style={{marginTop: 5, width: 25, height: 25, tintColor: '#fff'}}
                                />
                            </View>
                            </TouchableOpacity>
                        </SafeAreaView>

                </View>
            </View>

            {/* Buttons */}
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('budgetOverview')}>
                    <Text style={componentStyle.buttonText}> I don't know, review budget!</Text>
                </TouchableOpacity>

                <View style={styles.multipleButtonContainer}> 
                    {/* Back Button */}
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.goBack()}>
                        <Text style={styles.buttonText}>     Back     </Text>
                    </TouchableOpacity>

                    {/* Next Button */}
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('budgetOverview')}>
                        <Text style={styles.buttonText}> Continue </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

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
    //   padding: 5,
      marginVertical:5
    },
    buttonOpen: {
      backgroundColor: "#D7CEB2",
      width: 250,
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
      fontSize: 35
    },
    textStyle2: {
      color: "#264653",
      fontSize: 20
    },
    textStyle3: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 22
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });

export default LongTerm;