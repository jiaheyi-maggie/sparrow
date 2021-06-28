import React, { Component }  from 'react';
import { Text, SafeAreaView, View, ScrollView, TouchableOpacity, Pressable, Image } from 'react-native';
import { VictoryChart, VictoryBar, VictoryLabel} from 'victory-native';
import { fetchUser } from '../../app/actions/fetchUser';
import { fetchBudget } from '../../app/actions/fetchBudget';
// allow connect to redux
import { connect } from 'react-redux';
// bind actions to components
import { bindActionCreators } from 'redux';
import { withNavigation } from 'react-navigation';
import styles from '../../styles/homeStyle';



export class Home extends Component {

    // BEWARE: check this
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.categories !== this.props.categories || 
            nextProps.currentUser !== this.props.currentUser || 
            nextProps.shortTerm !== this.props.shortTerm ||
            nextProps.longTerm !== this.props.longTerm){ 
                return true;
            }
        else {
            return false;
        }
    }

    componentDidMount() {
        this.props.fetchUser();
        this.props.fetchBudget();
    }

    componentDidUpdate(prev) {
        if (this.props.shortTerm != prev.shortTerm || this.props.longTerm != prev.longTerm) {
            this.props.fetchBudget(); 
        }
    }

    handleComponentDidMount(currentUser, categories, shortTerm, longTerm) {
        if (currentUser) {
            const monthNames = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            ];

            const d = new Date();
            const m = monthNames[d.getMonth()];
            const y = d.getFullYear();

            const usefulCategories = categories.filter((obj) => {
                return obj.sum !== 0;
            });

            return (
                <SafeAreaView style={styles.homeContainer}>
                    <ScrollView>
                        <View style={{
                            flexDirection: 'row', 
                            justifyContent:'space-between',
                            alignItems: 'baseline',
                        }}>
                            
                            {/* Profile */}
                            {/* TODO: profile modal */}
                            <TouchableOpacity onPress={() => this.props.navigation.navigate("Settings")}>
                                <Image 
                                    source={require('../../assets/Icons/profile-user.png')}
                                    resizeMode='contain'
                                    style={{
                                        width: 27,
                                        height: 27,
                                        tintColor: '#7E9181',
                                        marginLeft: 15
                                    }}
                                />
                            </TouchableOpacity>

                            {/* Display name */}
                            <Text style={styles.title}>Hi, {currentUser.firstName}</Text>             
                                                            
                            {/* Menu */}
                            <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                                <Image 
                                    source={require('../../assets/Icons/menu.png')}
                                    resizeMode='contain'
                                    style={{
                                        width: 23,
                                        height: 23,
                                        tintColor: '#7E9181',
                                        marginRight: 15
                                    }}
                                />
                            </TouchableOpacity>

                        </View>

                        {/* overview section */}
                        <View> 
                            <View style={styles.titleContainer}>
                                <Text style={styles.smallTitle2}>Overview</Text>
                            </View>

                            <ScrollView horizontal={true} >

                                {/* remaining card */}
                                <Pressable 
                                    style={({ pressed }) => [
                                        {
                                            backgroundColor: pressed ? 'aliceblue' : 'white',
                                            borderRadius: 20,
                                            padding: 5,
                                            elevation: 2,
                                            margin:5
                                        }
                                    ]} 
                                    onPress={()=>{this.props.navigation.navigate("Remaining Detail")}}
                                >
                                    <Text style={styles.subtitle2}>Remaining</Text>
                                    {/* Short Term */}
                                    <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
                                        <View style={{backgroundColor: '#fff', borderRadius: 20}}>
                                            <Text style={styles.subtitle}>{m}:</Text>
                                        </View>
                                       
                                       {/* TODO: Subtract numbers */}
                                        <View style={{backgroundColor: '#7DDE92', borderRadius: 20, marginRight: 5}}>
                                            <Text style={styles.number2}>$ {shortTerm[0]}</Text>
                                        </View>
                                    </View>

                                    {/* Long Term */}
                                    <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
                                        <View style={{backgroundColor: '#fff', borderRadius: 20, margin: 2}}>
                                            <Text style={styles.subtitle}>{y}:</Text>
                                        </View>
                                        <View style={{backgroundColor: '#7DDE92', borderRadius: 20, margin: 2, marginRight: 5}}>
                                            <Text style={styles.number2}>$ {longTerm[0]}</Text>
                                        </View>
                                    </View>

                                    {/* View Details */}
                                    <View style={styles.statusContainer}>
                                        <Text style={{color: '#F4A261',fontSize: 17,marginHorizontal: 20, fontWeight: 'bold'}}>View Details</Text> 
                                    </View>
                                </Pressable>

                                <View style={{marginTop: 75}}>
                                    <Text style={styles.operation}> = </Text>
                                </View>

                                {/* budget card */}
                                <Pressable 
                                    style={({ pressed }) => [
                                        {
                                            backgroundColor: pressed ? 'aliceblue' : 'white',
                                            borderRadius: 20,
                                            padding: 5,
                                            elevation: 2,
                                            margin:5
                                        }
                                    ]} 
                                    onPress={()=>{this.props.navigation.navigate("Average Budget")}}
                                >
                                    <Text style={styles.subtitle2}>Budget</Text>
                                    {/* Short Term */}
                                    <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
                                        <View style={{backgroundColor: '#fff', borderRadius: 20}}>
                                            <Text style={styles.subtitle}>{m}:</Text>
                                        </View>
                                       
                                        <View style={{backgroundColor: '#F8FFE5', borderRadius: 20, marginRight: 5}}>
                                            <Text style={styles.number}>$ {shortTerm[0]}</Text>
                                        </View>
                                    </View>

                                    {/* Long Term */}
                                    <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
                                        <View style={{backgroundColor: '#fff', borderRadius: 20, margin: 2}}>
                                            <Text style={styles.subtitle}>{y}:</Text>
                                        </View>
                                        <View style={{backgroundColor: '#F8FFE5', borderRadius: 20, margin: 2, marginRight: 5}}>
                                            <Text style={styles.number}>$ {longTerm[0]}</Text>
                                        </View>
                                    </View>

                                    {/* View Details */}
                                    <View style={styles.statusContainer}>
                                        <Text style={{color: '#F4A261',fontSize: 17,marginHorizontal: 20, fontWeight: 'bold'}}>View Details</Text> 
                                    </View>
                                </Pressable>

                                <View style={{marginTop: 75}}>
                                    <Text style={styles.operation}> — </Text>
                                </View>

                                {/* spending card */}
                                {/* TODO: GET USER SPENDING */}
                                <Pressable 
                                    style={({ pressed }) => [
                                        {
                                            backgroundColor: pressed ? 'aliceblue' : 'white',
                                            borderRadius: 20,
                                            padding: 5,
                                            elevation: 2,
                                            margin:5
                                        }
                                    ]} 
                                    onPress={()=>{this.props.navigation.navigate("Spending Detail")}}
                                >
                                    <Text style={styles.subtitle2}>Spending</Text>
                                    {/* Short Term */}
                                    <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
                                        <View style={{backgroundColor: '#fff', borderRadius: 20}}>
                                            <Text style={styles.subtitle}>{m}:</Text>
                                        </View>
                                       
                                        <View style={{backgroundColor: '#7DDE92', borderRadius: 20, marginRight: 5}}>
                                            <Text style={styles.number2}>$ 0</Text>
                                        </View>
                                    </View>

                                    {/* Long Term */}
                                    <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
                                        <View style={{backgroundColor: '#fff', borderRadius: 20, margin: 2}}>
                                            <Text style={styles.subtitle}>{y}:</Text>
                                        </View>
                                        <View style={{backgroundColor: '#7DDE92', borderRadius: 20, margin: 2, marginRight: 5}}>
                                            <Text style={styles.number2}>$ 0</Text>
                                        </View>
                                    </View>

                                    {/* View Details */}
                                    <View style={styles.statusContainer}>
                                        <Text style={{color: '#F4A261',fontSize: 17,marginHorizontal: 20, fontWeight: 'bold'}}>View Details</Text> 
                                    </View>
                                </Pressable>

                            </ScrollView>

                        </View>

                        {/* TODO: style bar graphs */}
                        <View style={styles.titleContainer}>
                                <Text style={styles.smallTitle2}>Budget Categories</Text>
                            </View>
                        <View style={{
                            borderRadius: 20,
                            padding: 10,
                            elevation: 2,
                            margin: 10,
                            backgroundColor: '#fff'
                        }}>
                            <VictoryChart
                            domainPadding={{ x: 35 }}
                            >
                                <VictoryBar
                                    data={usefulCategories}
                                    x='title'
                                    y='sum'
                                    style={{
                                        data: { fill: "#2A94AF", stroke: "black", strokeWidth: 2 },
                                        labels: { fill: "#FFCF56", fontSize: 20, fontWeight: "bold" }
                                    }}
                                    barRatio={0.8}
                                    alignment="start"
                                    cornerRadius={5}
                                    height={300}
                                    labels={({ datum }) => datum.x}
                                    labelComponent={<VictoryLabel dy={30} />}
                                    events={[{
                                        target: "data",
                                        eventHandlers: {
                                          onPress: () => {
                                            return [
                                              {
                                                target: "data",
                                                mutation: (props) => {
                                                  const fill = props.style && props.style.fill;
                                                  return fill === "black" ? null : { style: { fill: "black" } };
                                                }
                                              }
                                            ];
                                          }
                                        }
                                      }]}
                                />
                            </VictoryChart>
                        </View>

                    </ScrollView>
                </SafeAreaView>
            );
        } else {
            return (
                <SafeAreaView style={styles.homeContainer}>
                    {/* <Text style={styles.subtitle}> User does not exist </Text> */}
                </SafeAreaView>
            );
        }
    }

    render() {
        const { currentUser, categories, shortTerm, longTerm } = this.props;

        return(
            this.handleComponentDidMount(currentUser, categories, shortTerm, longTerm)
        );
    }
}

// allow access to data in Home component
const mapStateToProps = (store) => ({
    currentUser: store.user.currentUser,
    categories: store.user.categories,
    longTerm: store.user.longTerm,
    shortTerm: store.user.shortTerm
});

// bind component to redux
const mapDispatchProps = (dispatch) => bindActionCreators({ fetchUser, fetchBudget }, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(withNavigation(Home));