import React, { useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { Text, SafeAreaView, View, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import { getHoldings, getCoinMarket } from '../../app/actions/marketActions';
import BalanceInfo from '../../components/main/BalanceInfo';
import { COLORS, FONTS } from '../../constants/theme';
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

    let totalHoldings = myHoldings.reduce((a, b) => a + (b.total || 0), 0).toFixed(2);
    let changeInValue = myHoldings.reduce((a, b) => a + (b.holding_value_change_7d|| 0), 0);
    let percentageChange = changeInValue / (totalHoldings - changeInValue) * 100;

    const renderWalletInfoSection = () => {
        return (
            <View>
                <Text style={{color: '#FFF4CB', ...FONTS.h2}}>My Crypto Wallet</Text>  
                {/* Todo: change dummy data */}
                <BalanceInfo 
                    title="Current Balance"
                    currency="USD"
                    displayAmount={totalHoldings}
                    changePct={percentageChange}
                />
            </View>
        )
    }

    const handleAddBalance = () => {
        return (
            console.log("add balance please")
        )
    }

    const handleComponentDidMount = () => {
        return (
            <SafeAreaView style={[styles.container2, {backgroundColor:'black'}]}>
                {/* My Wallet */}
                {renderWalletInfoSection()}
                <View style={{backgroundColor: 'aliceblue', borderRadius: 20, paddingVertical: 5,paddingHorizontal:10, alignSelf: 'flex-start', marginVertical: 5}}>
                    <TouchableOpacity onPress={() => handleAddBalance()}>
                        <Text style={{...FONTS.h3, color: COLORS.primary}}>Add Amount to Budget</Text>
                    </TouchableOpacity>   
                </View>

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
