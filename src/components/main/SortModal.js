import React, { useState } from 'react';
import { Text, Modal, View, SafeAreaView, FlatList } from 'react-native';

const SortModal = ({ navigation, modalVisible }) => {

    return (
        <Modal
            animationType={'fade'}
            transparent={true}
            visible={modalVisible}
        >
            {/* <FlatList /> */}
            <View>
                <Text> Hello</Text>
            </View>
        </Modal>
    )
}

export default SortModal;