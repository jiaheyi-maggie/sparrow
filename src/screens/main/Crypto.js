import React, { useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { Text, SafeAreaView, View, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import { getHoldings, getCoinMarket } from '../../app/actions/marketActions';
import BalanceInfo from '../../components/main/BalanceInfo';
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

    const renderWalletInfoSection = () => {
        return (
            <View style={{borderBottomLeftRadius:25, borderBottomRightRadius:25,}}>
                <Text style={[styles.title, {color: '#FFF4CB'}]}>My Crypto Wallet</Text>  
                {/* Todo: change dummy data */}
                <BalanceInfo 
                    title="Your Crypto Wallet"
                    displayAmount="45000"
                    changePct="2.30"
                />
            </View>
        )
    }

    const handleComponentDidMount = () => {
        return (
            <SafeAreaView style={[styles.container2, {backgroundColor:'black'}]}>
                {/* My Wallet */}
                {renderWalletInfoSection()}

                {/* Chart */}

                {/* Top currency list */}

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
