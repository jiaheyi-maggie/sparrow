import { StyleSheet, Dimensions } from 'react-native';

const componentStyle = StyleSheet.create({
  input: {
    fontSize: 40,
    textAlign: 'left',
    height: 40,
    marginHorizontal: 100,
    marginTop:10,
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
  },
  //also unused because it doesn't render
  circle : {
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    width: Dimensions.get('window').width * 0.42,
    height: Dimensions.get('window').width * 0.42,
    backgroundColor:'#2A94AF',
    justifyContent: 'center',
    alignItems: 'center'
  },
  reviewText :{
    color: '#FFF4CB',
    fontSize: 40
  }
});

export default componentStyle;