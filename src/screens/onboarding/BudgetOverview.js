import React, { useState } from 'react';
import { SafeAreaView, View, Text, FlatList, TouchableOpacity, Modal, StyleSheet, Image} from 'react-native';
import SummaryListItem from '../../components/SummaryListItem';
import store from '../../app/store';
import styles from '../../styles/onboardingStyle';
import style from '../../styles/componentStyle';
import periods from '../../data/periods';

const BudgetOverview = ({ navigation }) => {

    const list = store.getState().reducer;
    const usefulCategories = list.filter((obj) => {return obj.checked === true});

    const [longTerm, setLongTerm] = useState(store.getState().longTerm[0]);
    const [shortTerm, setShortTerm] = useState(store.getState().shortTerm[0]);
    const [longTermPeriod, setLongTermPeriod] = useState(store.getState().longTerm[1]);
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

    const calculateLongTermValue = (value, period) => {
        switch(period){
            case 'year':
                return value; 
            case 'quarter':
                return Math.floor(value / 4);
            case 'month':
                return Math.floor(value / 12);
            case 'week':
                return Math.floor(value / 52);
            case 'day':
                return Math.floor(value / 365);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Budget Overview </Text>
            {/* edit numbers */}
            <View style={{backgroundColor: 'aliceblue', padding: 10, borderRadius: 15}}> 
                <Text style={styles.subtitle}>Options to edit numbers:</Text>
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
            <View style={{flexDirection: 'row', alignItems:'center'}}>

                {/* Long term budget */}
                <View style={{paddingVertical: 10, alignItems:'center'}}>
                    {/* circle */}
                    <SafeAreaView style={{alignItems: 'center'}}>
                    <Text style={style.reviewText}>Non-Recurring</Text>
                        <View style={style.budgetCircle}>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{color: '#FFF4CB', fontSize: 35, fontWeight: 'bold'}}>$ </Text>
                                <Text style={{fontSize: 35, fontWeight: 'bold', color: '#FFF4CB'}}> {longTerm}</Text>
                            </View>
                        </View>
                    </SafeAreaView>

                    {/* Non-Recurring: Time Period Picker */}
                    <SafeAreaView style={styless.startView}>
                        <Modal animationType="fade" transparent={true} visible={modalVisible} onRequestClose={() => {setModalVisible(!modalVisible)}}>
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
                                                    setLongTerm(calculateLongTermValue(store.getState().longTerm[0], p));
                                                    setLongTermPeriod(p);
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
                            <Text style={styless.textStyle}> {longTermPeriod} </Text>
                            <Image 
                                source={require('../../assets/Icons/down-arrow.png')} 
                                resizeMode='contain'
                                style={{marginTop: 5, width: 25, height: 25, tintColor: '#fff'}}
                            />
                            </View>
                        </TouchableOpacity>
                    </SafeAreaView>
                </View>


                {/* Short term budget */}
                <View style={{paddingVertical: 10, alignItems:'center'}}>
                    {/* circle */}
                    <SafeAreaView style={{alignItems: 'center'}}>
                    <Text style={style.reviewText}>Recurring</Text>
                        <View style={style.budgetCircle}>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{color: '#FFF4CB', fontSize: 35, fontWeight: 'bold'}}>$ </Text>
                                <Text style={{fontSize: 35, fontWeight: 'bold', color: '#FFF4CB'}}> {shortTerm}</Text>
                            </View>
                        </View>
                    </SafeAreaView>

                    {/* Non-Recurring: Time Period Picker */}
                    <SafeAreaView style={styless.startView}>
                        <Modal animationType="fade" transparent={true} visible={modalVisible} onRequestClose={() => {setModalVisible(!modalVisible)}}>
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

            {/* Button View */}
            <View style={styles.multipleButtonContainer}> 
                {/* Back Button */}
                <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.goBack()}>
                    <Text style={styles.buttonText}>     Back     </Text>
                </TouchableOpacity>

                {/* Next Button */}
                <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('register')}>
                    <Text style={styles.buttonText}> Looks Good! </Text>
                </TouchableOpacity>
            </View>
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

export default BudgetOverview; 