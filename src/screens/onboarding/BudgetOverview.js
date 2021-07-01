import React, { useState } from 'react';
import { SafeAreaView, View, Text, FlatList, TouchableOpacity, Modal, StyleSheet, Image, Platform } from 'react-native';
import SummaryListItem from '../../components/SummaryListItem';
import store from '../../app/store';
import styles from '../../styles/onboardingStyle';
import style from '../../styles/componentStyle';
import periods from '../../data/periods';

const BudgetOverview = ({ navigation }) => {

    const list = store.getState().reducer;
    const usefulCategories = list.filter((obj) => {return obj.checked === true});

    const longTerm = store.getState().longTerm[0];
    const [shortTerm, setShortTerm] = useState(store.getState().shortTerm[0]);
    const longTermPeriod = store.getState().longTerm[1];
    const [shortTermPeriod, setShortTermPeriod] = useState(store.getState().shortTerm[1]);
    const [modalVisible, setModalVisible] = useState(false);

    const calculateShortTermValue = (value, period) => {
        switch(period){
            case 'year':
                return value * 12; 
            case 'quarter':
                return value * 4;
            case 'month':
                return value;
            case 'week':
                return Math.floor(value / 4);
            case 'day':
                return Math.floor(value / 12);
        }
    };
    
    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={{flexDirection: 'row', justifyContent:'space-between',alignItems: 'baseline'}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                        <Image 
                            source={require('../../assets/Icons/back.png')}
                            resizeMode='contain'
                            style={{
                                width: 18,
                                height: 18,
                                tintColor: '#fff',
                            }}
                        />
                    </TouchableOpacity>
                    <Text style={styles.forwardButtonText}> Back </Text>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={styles.forwardButtonText}> Looks Good </Text>
                    <TouchableOpacity style={styles.forwardButton} onPress={() => navigation.navigate('register')}>
                        <Image 
                            source={require('../../assets/Icons/right-arrow.png')}
                            resizeMode='contain'
                            style={{
                                width: 18,
                                height: 18,
                                tintColor: '#fff',
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <Text style={styles.title}>Budget Overview</Text>

            {/* Edit numbers */}
            <View style={{backgroundColor: 'aliceblue', padding: 5, borderRadius: 15, marginHorizontal: Platform.OS ==='ios'?10:0}}> 
                <Text style={styles.subtitle2}>Options to edit numbers:</Text>
                {/* Button View */}
                <View style={styles.multipleButtonContainer}> 
                    {/* Back Button */}
                    <TouchableOpacity style={styles.cuteButtonContainer} onPress={() => navigation.navigate('categories')}>
                        <Text style={styles.cuteButtonText}>Edit Categories</Text>
                    </TouchableOpacity>

                    {/* Next Button */}
                    <TouchableOpacity style={styles.cuteButtonContainer} onPress={() => navigation.navigate('longTerm')}>
                        <Text style={styles.cuteButtonText}>Edit Non-Recurring</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Two Budget Circles */}
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>

                {/* Non-Recurring budget */}
                <View style={{paddingVertical: 10, alignItems:'center'}}>
                    {/* circle */}
                    <SafeAreaView style={{alignItems: 'center'}}>
                    <Text style={style.reviewText}>Non-Recurring</Text>
                        <View style={style.budgetCircle}>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{color: '#FFF4CB', fontSize: 30, fontWeight: 'bold'}}>$ </Text>
                                <Text style={{fontSize: 30, fontWeight: 'bold', color: '#FFF4CB'}}> {longTerm}</Text>
                            </View>
                        </View>
                    </SafeAreaView>

                    <View style={[styless.button, styless.buttonOpen, {padding: 7, elevation: 2}]}>
                        <Text style={styless.textStyle}> {longTermPeriod} </Text>
                    </View>
                </View>


                {/* Recurring budget */}
                <View style={{paddingVertical: 10, alignItems:'center'}}>
                    {/* circle */}
                    <SafeAreaView style={{alignItems: 'center'}}>
                    <Text style={style.reviewText}>Recurring</Text>
                        <View style={style.budgetCircle}>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{color: '#FFF4CB', fontSize: 30, fontWeight: 'bold'}}>$ </Text>
                                <Text style={{fontSize: 30, fontWeight: 'bold', color: '#FFF4CB'}}> {shortTerm}</Text>
                            </View>
                        </View>
                    </SafeAreaView>

                    {/* Non-Recurring: Time Period Picker */}
                    <SafeAreaView style={styless.startView}>
                        <Modal animationType="fade" transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(!modalVisible)}>
                            <View style={styless.centeredView}>
                                <View style={styless.modalView}>
                                    <Text style={styless.textStyle2}>Select time period:</Text>
                                    <FlatList 
                                        data={periods}
                                        renderItem={({ item }) => (
                                            <TouchableOpacity
                                                style={[styless.button, styless.buttonClose]}
                                                onPress={() => {
                                                    const p = item.title;
                                                    setShortTerm(calculateShortTermValue(store.getState().shortTerm[0], p));
                                                    setShortTermPeriod(p);
                                                    setModalVisible(false);
                                                }}>
                                            <Text style={styless.textStyle}>{item.title}</Text>
                                            </TouchableOpacity>
                                        )}
                                        keyExtractor={item => item.id}
                                    />
                                </View>
                            </View>
                        </Modal>

                        <TouchableOpacity style={[styless.button, styless.buttonOpen]} onPress={() => setModalVisible(!modalVisible)}>
                            <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                            <Text style={styless.textStyle}> {shortTermPeriod} </Text>
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

            <FlatList 
                data={usefulCategories}
                renderItem={({ item }) => (
                    <SummaryListItem item={item}  />
                )}
                keyExtractor={item => item.id}
                contentContainerStyle={{
                    flexGrow: 1,
                }}
            />
        </SafeAreaView>
    );
};
// small style for category card
const styless = StyleSheet.create({
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
      width: 150,
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
      fontSize: 20
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

export default BudgetOverview; 