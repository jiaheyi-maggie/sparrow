import { StyleSheet, Dimensions } from 'react-native';

const componentStyle = StyleSheet.create({
  input: {
    fontSize: 37,
    fontWeight: 'bold',
    textAlign: 'center',
    height: 40,
    marginTop:10,
    borderBottomColor: '#264653',
    borderBottomWidth: 5,
    alignContent: 'center'
  },
  container: {
    alignItems: 'stretch',
    padding: 20,
    margin: 10,
    backgroundColor: '#FFF4CB',
    flexDirection: 'column',
    flex: 1
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
    marginTop: 20,
    marginLeft: 20
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
    width: 100
  },
  circleText :{
    color: '#FFF4CB',
    fontSize: 40
  },
  reviewText: {
    color: '#264653',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
  infofieldtitle: {
    color: '#7E9181',
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'left',
    padding: 5,
    paddingTop: 15
  },
  infofield: {
    elevation: 3,
    backgroundColor: 'aliceblue',
    borderRadius: 10,
    paddingVertical: 9,
    justifyContent: 'space-between',
    textAlign: 'left',
    paddingLeft: 15,
    fontSize: 18
  },
  imageContainer : {
    width: 300,
    height: 300,
    alignContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "#FAA381",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  clickContainer: {
    height: 60, 
    backgroundColor: '#FFF4CB', 
    borderRadius: 20, 
    margin: 10,
    paddingBottom: 15,
    paddingHorizontal: 10,
    flexDirection: 'column-reverse'
  },
  listTextAlign: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      flexWrap: 'wrap'
  },
  clickTitle: {
      color: '#264653',
      fontWeight: 'bold',
      textAlign: 'left',
      fontSize: 23,
      marginLeft: 50
  },
  budgetCircle : {
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    width: Dimensions.get('window').width * 0.42,
    height: Dimensions.get('window').width * 0.42,
    backgroundColor:'#2A94AF',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#FFF4CB'
  }
});

export default componentStyle;