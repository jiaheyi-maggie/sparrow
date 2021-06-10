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
  container: {
    alignItems: 'stretch',
    padding: 20,
    marginHorizontal: 8
  },
  buttonContainer: {
    elevation: 10,
    backgroundColor: "#2A94AF",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 9,
    margin: 10
  },
  title: {
    color: '#264653',
    fontWeight: 'bold',
    fontSize: 50,
    textAlign: 'left',
    margin: 10,
    marginTop: 10
  },
  subtitle: {
    color: '#E76F51',
    fontWeight: 'bold',
    textAlign: 'left',
    fontSize: 18,
    marginLeft: 10,
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
  circleText :{
    color: '#FFF4CB',
    fontSize: 40
  },
  reviewText: {
    color: '#264653',
    fontWeight: 'bold',
    textAlign: 'left',
    fontSize: 18,
    marginLeft: 20,
    marginRight: 10
  },
  infofieldtitle: {
    color: '#7E9181',
    fontSize: 20,
    textAlign: 'left',
    padding: 10
  },
  infofield: {
    elevation: 8,
    backgroundColor: "#EFEFEF",
    borderRadius: 10,
    paddingVertical: 9,
    marginHorizontal: 10,
    justifyContent: 'space-between'
  },
  imageContainer : {
    width: 300,
    height: 300,
    alignContent: 'center'
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: "#264653",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});

export default componentStyle;