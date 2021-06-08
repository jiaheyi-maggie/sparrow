import { StyleSheet } from 'react-native';

const componentStyle = StyleSheet.create({
  input: {
    fontSize: 40,
    textAlign: 'left',
    height: 40,
    marginHorizontal: 100,
    borderBottomColor: '#264653',
    borderBottomWidth: 3,
    alignContent: 'center'
  },
  dropdown : {
    height: 50, 
    width: 150
  },
  //unused because somehow it doesn't render
  pickerContainer: { 
    borderWidth: 3, 
    borderColor: '#264653', 
    borderRadius: 4,
    marginHorizontal: 100,
    alignItems:'center'
    }
});

export default componentStyle;