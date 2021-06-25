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
  cuteButtonContainer: {
    elevation: 2,
    backgroundColor: "#FAA381",
    borderRadius: 15,
    padding: 10,
    marginTop: 10
  },
  cuteButtonText : {
      fontSize: 18,
      fontWeight: 'bold',
      color: "#fff",
      alignSelf: "center",
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
    backgroundColor: 'aliceblue',
    alignItems: 'flex-start',
    borderRadius: 15,
    padding: 10,
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
    backgroundColor:'#FFF4CB',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: 'row',
    width: 100
  },
  // budget summary list container
  listSummaryItem: {
    backgroundColor: '#FFF4CB',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    marginVertical: 5,
    borderRadius: 20
  },
  // list item text for BudgetOverview
  listSummaryTitle: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    textAlign: 'left',
    fontSize: 20,
    color: "#E76F51"
  },
  listSummaryPeriod :{
    textAlign: 'left',
    fontSize: 20,
    color: "#E76F51"
  },
  listSummaryTextInput :{
    fontSize: 20, 
    fontWeight: 'bold', 
    color: '#E76F51',
    textDecorationLine: 'underline'
  },
  // blue card title
  itemTitle: {
    color: '#FAA381',
    fontWeight: 'bold',
    fontSize: 24,
  },
  // view containing text input
  itemDescription: {
    color: '#264653',
    fontWeight: 'bold',
    fontSize: 24,
    marginRight: 2
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