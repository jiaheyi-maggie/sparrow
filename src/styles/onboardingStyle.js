import { StyleSheet } from 'react-native';

const onboardingStyle = StyleSheet.create({
  // onboarding page container
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  // title for onboarding
  title: {
      color: '#264653',
      fontWeight: 'bold',
      fontSize: 45,
      textAlign: 'left',
      paddingTop: 10,
      paddingLeft: 15
  },
  // subtitle for onboarding
  subtitle: {
      color: '#E76F51',
      fontWeight: 'bold',
      textAlign: 'left',
      fontSize: 22,
      paddingVertical: 5,
      marginHorizontal: 20
  },
  // when onboarding title is long
  longtitle: {
      color: '#264653',
      fontWeight: 'bold',
      fontSize: 30,
      textAlign: 'left',
      margin: 20
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
      elevation: 8,
      backgroundColor: "#264653",
      borderRadius: 10,
      paddingVertical: 15,
      paddingHorizontal: 9,
      margin: 10
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
    justifyContent: 'space-around',
    alignItems: 'stretch',
    width: 400
  },
  // text to indicate optional
  optionalText: {
    color: '#264653',
    textAlign: 'left',
    fontSize: 20,
    paddingVertical: 5,
    marginHorizontal: 20
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
  // scroll view
  scrollviewContainer: {
    marginTop: 30,
  },
  // safe area with scroll view
  safeareaWithScroll : {
    backgroundColor: '#fff',
    flex: 1
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
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 60
  },
  // long term page text
  longtermDescription: {
    color: '#264653',
    fontWeight: 'bold',
    fontSize: 40,
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