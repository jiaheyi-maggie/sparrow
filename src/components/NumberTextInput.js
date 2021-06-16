import React, { useRef } from "react";
import { SafeAreaView, TextInput } from "react-native";
import store from "../app/store";
import { useSelector } from 'react-redux';
import styles from '../styles/componentStyle';

// TODO: UPDATE VALUE FROM TEXT INPUT
const NumberTextInput = ({ item }) => {

  // const ref = useRef();

  const textValue = useSelector((state) => state[item.id].value);

  // action for text input
  const inputNumber = (item, number) => {
    return {
        type: 'inputNumber',
        payload: {item, number}
    }
  };

  const inputHandler = () => {
    // TODO: get the value from ref.current
    // var val = ref.current;
    // ref.current.setNativeProps({text: ""});
    // store.dispatch(inputNumber(item, val));
    store.dispatch(inputNumber(item, textValue));
    console.log(item);
  }

  return (
    <SafeAreaView>
      <TextInput
        // ref={ref}
        style={styles.input}
        onChangeText={()=>inputHandler()}
        value={textValue}
        placeholder="2000"
        placeholderTextColor='#FFF4CB'
        keyboardType="numeric"
      />
    </SafeAreaView>
  );
};

  export default NumberTextInput;