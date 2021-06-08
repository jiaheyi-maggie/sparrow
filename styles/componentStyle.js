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
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center"
  },
  pickerItem :{
      fontSize: 40,
      fontWeight: 'bold'
  }
});

export default componentStyle;