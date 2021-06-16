import React from "react";
import { SafeAreaView, TextInput } from "react-native";
import store from "../app/store";
import styles from '../styles/componentStyle';

const NumberTextInput = ({ item }) => {

  let value = React.createRef(); 

  // action for text input
  const inputNumber = (item, number) => {
    return {
        type: 'inputNumber',
        payload: {item, number}
    }
  };

  const inputHandler = () => {
    const val = value.current.inputField;
    store.dispatch(inputNumber(item, val));
    console.log(item);
  }

  return (
    <SafeAreaView>
      <TextInput
        ref={value}
        style={styles.input}
        onChangeText={()=>inputHandler()}
        value={value}
        placeholder="2000"
        placeholderTextColor='#FFF4CB'
        keyboardType="numeric"
      />
    </SafeAreaView>
  );
};

  export default NumberTextInput;