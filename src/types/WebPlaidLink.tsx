import React, { useState, useCallback, useEffect } from 'react';
import { View, Modal, TouchableOpacity, Text, Image } from 'react-native';
import styles from '../styles/homeStyle';
import WebView from 'react-native-webview';
import { Client } from 'plaid';
import { connect } from 'react-redux';

// interface Props {
//     token: string;
//     client: Client;
// }

const WebPlaidLink = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const handleOpen = () => {
        return (
            <WebView source={{uri: 'http://192.168.1.20:19002'}} style={{flex:1, marginTop: 50}}/>
            
        );
    }

    const handleRendering = () => {
        return (
            <View style={{marginTop: 50}}>
                <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(!modalVisible)}
                >
                    {/* View for the list of time periods */}
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.listText2}>Select a time period</Text>
                        </View>
                    </View>
                </Modal>

                <TouchableOpacity style={[styles.button, styles.buttonOpen]} onPress={() => handleOpen()}>
                    <View style={{flexDirection:'row', alignItems: 'center', justifyContent: 'space-between'}}>
                        <Image 
                        source={require('../assets/Icons/down-arrow.png')} 
                        resizeMode='contain'
                        style={{marginTop: 5, width: 20, height: 20, tintColor: '#fff'}}
                        />
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
    return (
        <WebView source={{uri: 'http://192.168.1.20:19002'}} style={{flex:1, marginTop: 50}}/>
        // handleRendering()
        
    );
}

const mapStateToProps = (store) => ({
    client: store.plaidReducer.client,
})
export default connect(mapStateToProps, null)(WebPlaidLink);