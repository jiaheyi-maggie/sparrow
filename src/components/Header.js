import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import styles from '../styles/homeStyle';

const Header = ({ navigation, destination }) => {
    return (
        <View style={{
            flexDirection: 'row', 
            justifyContent:'space-between',
            alignItems: 'baseline'
            }}>
            
            {/* go back */}
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate({destination})}>
                <Image 
                source={require('../assets/Icons/right-arrow.png')}
                resizeMode='contain'
                style={{
                    width: 20,
                    height: 20,
                    tintColor: '#fff',
                }}
                />
            </TouchableOpacity>
        </View>
    );
}

export default Header;

