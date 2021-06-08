import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import styles from '../styles/componentStyle';

const NumberTextInput = () => {
    const [number, onChangeNumber] = useState(null);
  
    return (
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="$2000"
          placeholderTextColor='#FFF4CB'
          keyboardType="numeric"
        />
      </SafeAreaView>
    );
  };

  export default NumberTextInput;