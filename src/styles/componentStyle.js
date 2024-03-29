import { StyleSheet, Dimensions } from 'react-native';
import { Platform } from 'react-native';
import { COLORS, FONTS } from '../constants/theme';

const componentStyle = StyleSheet.create({
  input: {
	  ...FONTS.h1, 
    color: COLORS.yellow,
    textAlign: 'center',
    borderBottomColor: COLORS.desertGreen,
    borderBottomWidth: 3,
  },
  container: {
    flex: 1, 
    flexDirection: 'column', 
    backgroundColor: 'white', 
    padding: 10, 
    paddingTop: Platform.OS === 'ios'? 0: 40, 
    justifyContent: 'space-between'
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
	  ...FONTS.h3, 
    color: COLORS.lightSalmon,
  },
  infofieldtitle: {
	  ...FONTS.body3, 
    color: '#fff',
    padding: 5,
    paddingTop: 15
  },
  infoIcon: {
    width: 20,
    height: 30,
    marginTop: 10,
    marginRight: 5,
    tintColor: "#fff"
  },
  infofield: {
    backgroundColor: 'aliceblue',
    borderRadius: 10,
    paddingVertical: 9,
    justifyContent: 'space-around',
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
    ...FONTS.h3, 
    color: COLORS.secondary,
    alignSelf: "center",
    textTransform: "uppercase"
  },
	clickContainer: {
		backgroundColor: '#FFF4CB', 
		borderRadius: 20, 
		marginVertical: 5,
		padding: 8,
	},
  listTextAlign: {
		flexDirection: 'row',
		alignItems: 'flex-start',
		flexWrap: 'wrap'
  },
	clickTitle: {
		...FONTS.h22, 
		color: COLORS.primary,
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