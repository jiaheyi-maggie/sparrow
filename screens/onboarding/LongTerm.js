import React from 'react';
import { SafeAreaView, View, Text, Image } from 'react-native';
import NumberTextInput from '../../components/NumberTextInput';
import TimePeriodDropdown from '../../components/TimePeriodDropdown';

const LongTerm = () => {
    return (
        <SafeAreaView style={styles.withTitleContainer}>
            <View>
                <Text style={styles.title}>Do you have a long-term budget? </Text>
            </View>
            <View>
                <Text style={styles.subtitle}>This way we can start by suggesting a budget that works for you. </Text>
            </View>
            <View style={{alignItems: 'center'}}>
                <Text style={styles.emphasizeText}>I plan to spend</Text>
                <NumberTextInput />
                <Text style={styles.emphasizeText}>per</Text>
                <TimePeriodDropdown />
            </View>

            <Image 
                source={require('../../assets/onboarding/long-term.png')} 
                resizeMode='contain'
                style={styles.imageContainer}
                />
        </SafeAreaView>
    );
};

export default LongTerm;