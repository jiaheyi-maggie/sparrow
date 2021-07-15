import React from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import styles from '../../styles/homeStyle';
import AveragePeriodPicker from '../../components/picker/AveragePeriodPicker';
import {COLORS, FONTS} from '../../constants/theme';
import { connect } from 'react-redux';

const RemainingDetail = ({ navigation }) => {

    const handleComponentDidMount = () => {
        return (
            <SafeAreaView style={styles.container3}>
                {/* Header */}
                <View style={styles.genericRow}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image 
                            source={require('../../assets/Icons/back.png')}
                            style={{
                                width: 18,
                                height: 18,
                                tintColor: COLORS.primary,
                            }}
                        />
                    </TouchableOpacity>
                    <Text style={{color: COLORS.primary, ...FONTS.h2}}>Remaining</Text>
                    {/* Menu */}
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <Image 
                            source={require('../../assets/Icons/menu.png')}
                            resizeMode='contain'
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: COLORS.primary,
                            }}
                        />
                    </TouchableOpacity>
                </View>

                {/* Main Content */}

                <View style={styles.genericRow}> 
                    <Text style={{...FONTS.h3, color: COLORS.secondary}}>Summary</Text>
                    <View style={{alignSelf:'flex-end'}}>
                        <AveragePeriodPicker />
                    </View>
                </View>

                {/* TODO: Number calculations */}
                {/* Budget overview card */}
                <View style={[styles.genericRow, {marginTop: 10}]}>
                    <View style={{backgroundColor:'aliceblue', margin: 5, padding: 8, width: 180, marginBottom: 10, alignItems:'center'}}>
                        <Text style={{...FONTS.h4, color: COLORS.lightGray3, textDecorationLine: 'underline', alignSelf:'flex-start'}}>Recurring</Text>

                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={{...FONTS.h4, color: COLORS.lightGray3}}>$</Text>
                            <Text style={{...FONTS.h2, color: COLORS.bluebell, marginHorizontal: 5}}>4107</Text>
                            <Text style={{...FONTS.h4, color: COLORS.lightGray3}}>USD</Text>
                        </View>

                    </View>

                    <View style={{backgroundColor:'aliceblue', margin: 5, padding: 8, width: 180, marginBottom: 10, alignItems:'center'}}>
                        <Text style={{...FONTS.h4, color: COLORS.lightGray3, textDecorationLine: 'underline', alignSelf:'flex-start'}}>Non-Recurring</Text>

                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={{...FONTS.h4, color: COLORS.lightGray3}}>$</Text>
                            <Text style={{...FONTS.h2, color: COLORS.bluebell, marginHorizontal: 5}}>6969</Text>
                            <Text style={{...FONTS.h4, color: COLORS.lightGray3}}>USD</Text>
                        </View>

                    </View>
                </View>
            </SafeAreaView>
        );
    }

    return (
        handleComponentDidMount()
    )
}

export default RemainingDetail;