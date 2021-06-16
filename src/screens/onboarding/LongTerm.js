import React, { Fragment, useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, TextInput } from 'react-native';
import NumberTextInput from '../../components/NumberTextInput';
import TimePeriodDropdown from '../../components/TimePeriodDropdown';
import componentStyle from '../../styles/componentStyle';
import styles from '../../styles/onboardingStyle';

const LongTerm = ({ navigation }) => {

    const [longTermGoal, setLongTermGoal] = useState(0);

    const inputHandler = (input) => {
        setLongTermGoal(input);
    }
    

    return (
            <SafeAreaView style={{
                backgroundColor:'#fff', 
                flex: 1,
                justifyContent: 'flex-start',
                paddingTop: 60
            }}>
                <View>
                    <Text style={styles.title}>
                        Do you have a long-term budget? 
                    </Text>
                </View>

                <View>
                    <Text style={styles.subtitle}>This way we can start by suggesting a budget that works for you. </Text>
                </View>

                <View style={{
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    alignContent: 'space-between',
                    flexDirection: 'column'
                }}>
                    <Text style={styles.itemDescription}>I plan to spend</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={styles.itemDescription}>$ </Text>
                        {/* <NumberTextInput /> */}
                        <TextInput
                            style={componentStyle.input}
                            onChangeText={(input) => inputHandler(input)}
                            value={longTermGoal}
                            placeholder="20000"
                            placeholderTextColor='#FFF4CB'
                            keyboardType="numeric"
                        />
                    </View>
                    
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={styles.itemDescription}>per </Text>
                        {/* <TimePeriodDropdown /> */}
                        {/* TODO: IMPLEMENT TIMER PERIOD DROPDOWN  */}
                    </View>

                    <View style={{height: 230}}><Text></Text></View>
                </View>

 
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('budgetOverview')}
                >
                    <Text style={componentStyle.buttonText}> I don't know </Text>
                </TouchableOpacity>

                <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}> 
                    {/* Back Button */}
                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={() => navigation.goBack()}
                        >
                        <Text style={styles.buttonText}>     Back     </Text>
                    </TouchableOpacity>

                    {/* Next Button */}
                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={() => navigation.navigate('budgetOverview')}
                        >
                        <Text style={styles.buttonText}> Continue </Text>
                    </TouchableOpacity>
                </View>



            </SafeAreaView>

    );
};

export default LongTerm;