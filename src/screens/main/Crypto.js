import React, { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { Text, SafeAreaView, View, TouchableOpacity, Image, FlatList } from 'react-native';
import { VictoryChart, VictoryLine, VictoryTheme } from 'victory-chart';
import CategoryBar from '../../components/main/CategoryBar';
import { connect } from 'react-redux';
import { getHoldings, getCoinMarket } from '../../app/actions/marketActions';
import BalanceInfo from '../../components/main/BalanceInfo';
import { COLORS, FONTS } from '../../constants/theme';
// import { ChartDot, ChartPath, ChartPathProvider, ChartXLabel, ChartYLabel, monotoneCubicInterpolation } from '@rainbow-me/animated-charts';
import data from '../../constants/dummy';
import styles from '../../styles/homeStyle';
import CryptoChart from '../../components/main/CryptoChart';

const Crypto = ({ navigation, getHoldings, getCoinMarket, myHoldings, coins }) => { 

    const [selectedCoin, setSelectedCoin] = useState(null);

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
                <Text style={{color: '#FFF4CB', ...FONTS.h2, marginBottom: 5}}>My Crypto Wallet</Text>  
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
            <SafeAreaView style={[styles.container2, {backgroundColor:COLORS.primary}]}>
                {/* My Wallet */}
                {renderWalletInfoSection()}
                <View style={{backgroundColor: 'aliceblue', borderRadius: 20, paddingVertical: 5,paddingHorizontal:10, alignSelf: 'flex-start', marginVertical: 5}}>
                    <TouchableOpacity onPress={() => handleAddBalance()}>
                        <Text style={{...FONTS.h3, color: COLORS.primary}}>Add Amount to Budget</Text>
                    </TouchableOpacity>   
                </View>

                {/* Chart */}
                <View>
                    <CryptoChart data={selectedCoin ? selectedCoin.sparkline_in_7d.price : coins[0]?.sparkline_in_7d?.price} changePct={percentageChange} title={selectedCoin.name}/>
                </View>
                
                {/* Top currency list */}
                <Text style={{...FONTS.h3, fontSize: 17, color: COLORS.white, marginHorizontal: 5, textDecorationLine:'underline'}}>Top Cryptocurrencies</Text>
                <FlatList
                    data={coins}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => {

                        let priceColor = (item.price_change_percentage_7d_in_currency > 0) ? COLORS.lightGreen : COLORS.red;

                        return(
                            <View>
                            <TouchableOpacity 
                                style={{flexDirection: 'row', height: 55, alignItems: 'center', justifyContent: 'space-between'}}
                                onPress={() => setSelectedCoin(item)}
                                >
                                <View style={{flexDirection:'row', alignItems: 'center'}}>
                                    <Image 
                                        source={{uri: item.image}}
                                        style={{width:22, height: 22, marginHorizontal: 10}}
                                    />
                                    <Text style={{...FONTS.h4, color: COLORS.lightGray4}}>{item.name}</Text>
                                </View>

                                <View style={{marginRight: 10}}>
                                    <Text style={{...FONTS.h4, color: COLORS.white, textAlign: 'right'}}>{item.current_price} USD</Text>
                                    <View style={{flexDirection:'row', alignSelf:'flex-end'}}>
                                        {
                                            item.price_change_percentage_7d_in_currency != 0 && 
                                            <Image
                                                source={require('../../assets/Icons/up-arrow.png')}
                                                style={{
                                                    width: 10,
                                                    height: 10,
                                                    alignSelf: 'center',
                                                    tintColor: priceColor,
                                                    transform: (item.price_change_percentage_7d_in_currency > 0) ? [{rotate: '45deg'}] : [{rotate:'125deg'}]
                                                }}
                                            />
                                        }
                                        <Text style={{alignSelf:'center',color: priceColor, marginHorizontal: 2}}>
                                            {item.price_change_percentage_7d_in_currency.toFixed(2)}%
                                        </Text>
                                    </View>
                                </View>

                            </TouchableOpacity>
                            <View style={{borderBottomColor: COLORS.lightGray3,borderBottomWidth: 1, }}/>
                            </View>
                        );
                    }}
                />

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
