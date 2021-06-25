import { StyleSheet } from 'react-native';
import { Platform } from 'react-native';

const onboardingStyle = StyleSheet.create({
  // onboarding page container
  container: {
    flex: 1, 
    flexDirection: 'column', 
    backgroundColor: 'white', 
    padding: 10, 
    paddingTop: Platform.OS === 'ios'? 0: 40, 
    justifyContent: 'space-between', 
    paddingBottom:Platform.OS === 'ios'? 0: 10 
  },
  // title for onboarding
  title: {
      color: '#264653',
      fontWeight: 'bold',
      fontSize: 35,
      textAlign: 'left',
      paddingTop: 10,
      marginLeft: 10
  },
  // subtitle for onboarding
  subtitle: {
      color: '#E76F51',
      // fontWeight: 'bold',
      textAlign: 'left',
      fontSize: 20,
      marginHorizontal: 10,
      marginBottom: 5
  },
  // when onboarding title is long
  longtitle: {
      color: '#264653',
      fontWeight: 'bold',
      fontSize: 28,
      textAlign: 'left',
      margin: 10
  },
  // semi long title
  semiLongTitle: {
    color: '#264653',
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'left',
    paddingTop: 10,
    paddingLeft: 20
  },
  // onboarding buttons
  buttonContainer: {
      elevation: 2,
      backgroundColor: "#264653",
      borderRadius: 15,
      padding: 10,
      marginTop: 10
  },
  // button text inside button
  buttonText : {
      fontSize: 18,
      fontWeight: 'bold',
      color: "#fff",
      alignSelf: "center",
      textTransform: "uppercase"
  },
  // onboarding image
  imageContainer: {
    width: 380,
    height: 380,
    alignContent: 'center'
  },
  // onboarding small image
  smallImage: {
    width: 300,
    height: 300,
    alignContent: 'center'
  },
  // horizontal containing multiple buttons
  multipleButtonContainer: {
    alignContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  // text to indicate optional
  optionalText: {
    color: '#2A94AF',
    textAlign: 'left',
    fontSize: 18,
    paddingVertical: 5,
    marginHorizontal: 10,
    fontWeight: 'bold'
  },
  // blue category card
  categoryCard :{
    alignContent: 'center',
    backgroundColor: 'aliceblue',
    alignItems: 'flex-start',
    borderRadius: 15,
    padding: 20,
    margin: 10,
    flex: 1
  },
  // for aligning generic texts + other components
  genericRowAlign: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  // text with $
  textInputContainer: {
    borderBottomWidth: 3,
    borderBottomColor: '#264653',
    flexDirection: 'row',
    marginHorizontal: 5,
    textAlign: 'center'
  },
  // budget summary list container
  listSummaryItem: {
    backgroundColor: '#FFF4CB',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    marginVertical: 5,
    marginHorizontal:16,
    borderRadius: 20
  },
  // list item text for BudgetOverview
  listSummaryTitle: {
    color: '#264653',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    textAlign: 'left',
    fontSize: 23,
    color: "#E76F51"
  },
  // blue card title
  itemTitle: {
    color: '#FAA381',
    fontWeight: 'bold',
    fontSize: 30,
    margin: 0
  },
  // view containing text input
  itemDescription: {
    color: '#264653',
    fontWeight: 'bold',
    fontSize: 30,
    margin: 0
  },
  // long term column container
  longtermContainer :{
    backgroundColor:'#fff', 
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: (Platform.OS === 'ios') ? 0: 50,
  },
  // long term page text
  longtermDescription: {
    color: '#264653',
    fontWeight: 'bold',
    fontSize: 38,
    margin: 0
  },
  // long term center screen text
  longtermCenter: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
});

export default onboardingStyle;