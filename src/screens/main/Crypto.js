import React, { useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { Text, SafeAreaView, View, ScrollView, FlatList, Pressable, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getHoldings, getCoinMarket } from '../../app/actions/marketActions';
import data from '../../constants/dummy';

import styles from '../../styles/homeStyle';

const Crypto = ({ navigation, getHoldings, getCoinMarket, myHoldings, coins }) => { 

    useFocusEffect(
        useCallback(
            () => {
                getHoldings(data.holdings)
                getCoinMarket()
            },[])
    )

    const handleComponentDidMount = () => {
        return (
          <SafeAreaView style={styles.container2}>
                <View style={{flexDirection: 'row', justifyContent:'space-between',alignItems: 'center'}}>
                    <Text style={styles.title}>My Crypto Wallet</Text>         
                                                    
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <Image 
                            source={require('../../assets/Icons/menu.png')}
                            resizeMode='contain'
                            style={{
                                width: 23,
                                height: 23,
                                tintColor: '#264653',
                                // marginRight: 8
                            }}
                        />
                    </TouchableOpacity>
                </View>
          </SafeAreaView>
        );
    };

    return (
        handleComponentDidMount()
    )
};

const mapStateToProps = (store) => {
    return {
        myHoldings: store.marketReducer.myHoldings,
        coins: store.marketReducer.coins
    }

}

// const mapDispatchToProps = (dispatch) =>  bindActionCreators({ getHoldings, getCoinMarket }, dispatch);
const mapDispatchToProps = (dispatch) => {
    return {
        getHoldings: (holdings, currency, coinList, orderBy, sparkline, priceChangePerc, perPage, page) => {
            return dispatch(getHoldings(holdings, currency, coinList, orderBy, sparkline, priceChangePerc, perPage, page))
        },
        getCoinMarket: (currenct, coinList, orderBy, perPage, page, sparkline, priceChangePerc) => {
            return dispatch(getCoinMarket(currenct, coinList, orderBy, perPage, page, sparkline, priceChangePerc))
        }
    }
}



// export default connect(mapStateToProps, mapDispatchToProps)(Crypto); 
export default connect(mapStateToProps, mapDispatchToProps)(Crypto); 
