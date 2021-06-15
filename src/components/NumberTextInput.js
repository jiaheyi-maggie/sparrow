import React from "react";
import { SafeAreaView, TextInput } from "react-native";
import store from "../app/store";
import styles from '../styles/componentStyle';

const NumberTextInput = ({ item }) => {
    var val = item.value;

    // action for text input
    const inputNumber = (number, item) => {
      return {
          type: 'inputNumber',
          payload:
            number,
            item
      }
    };

    const inputHandler = () => {
      store.dispatch(inputNumber(val,item));
      console.log(item);
      console.log(val);
    }

    return (
      <SafeAreaView>
        <TextInput
          ref={(input)=> {val=input;}}
          style={styles.input}
          onChangeText={()=>inputHandler()}
          value={item.value}
          placeholder="$2000"
          placeholderTextColor='#FFF4CB'
          keyboardType="numeric"
        />
      </SafeAreaView>
    );
  };

  export default NumberTextInput;