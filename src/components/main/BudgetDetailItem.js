import React from 'react';
import { View, Text } from 'react-native-safe-area-context';
import store from '../../app/store';


const BudgetDetailItem = ({ item }) => {
    const currVal = store.getState().reducer[item.id].value;
    const [val, setVal] = useState(currVal);

    return (
        <View>
        <View>
            <Text>{item.title}</Text>
            <Text style={{
                    color: '#264653',
                    fontWeight: 'bold',
                    textAlign: 'left',
                    fontSize: 23,
                    color: "#E76F51"
            }}> ({item.period})</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
            <Text style={styles.listSummaryTitle}>$</Text>
            <TextInput
                onChangeText={(value) => onChangeNumber(value)}
                value={val}
                placeholder='?'
                keyboardType="phone-pad"
                selectionColor='#C2A878'
                textAlign= 'center'
                style={{
                    fontSize: 23, 
                    fontWeight: 'bold', 
                    color: '#E76F51',
                    textDecorationLine: 'underline'
                }}
            />
        </View>
    </View>
    );
};

export default BudgetDetailItem;