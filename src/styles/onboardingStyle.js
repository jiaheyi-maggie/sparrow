import { StyleSheet } from 'react-native';

const onboardingStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
      color: '#264653',
      fontWeight: 'bold',
      fontSize: 45,
      textAlign: 'left',
      paddingTop: 10,
      paddingLeft: 20
  },
  subtitle: {
      color: '#E76F51',
      fontWeight: 'bold',
      textAlign: 'left',
      fontSize: 22,
      paddingVertical: 5,
      marginHorizontal: 20
  },
  longtitle: {
      color: '#264653',
      fontWeight: 'bold',
      fontSize: 30,
      textAlign: 'left',
      margin: 20
  },
  buttonContainer: {
      elevation: 8,
      backgroundColor: "#264653",
      borderRadius: 10,
      paddingVertical: 15,
      paddingHorizontal: 9,
      margin: 10
  },
  buttonText : {
      fontSize: 18,
      fontWeight: 'bold',
      color: "#fff",
      alignSelf: "center",
      textTransform: "uppercase"
  },
  imageContainer: {
    width: 380,
    height: 380,
    alignContent: 'center'
  },
  listitem: {
    backgroundColor: '#FFF4CB',
    padding: 8,
    marginVertical: 8,
    marginHorizontal:16,
    borderRadius: 20
  },
  listtitle: {
    color: '#264653',
    fontWeight: 'bold',
    textAlign: 'left',
    fontSize: 18,
    margin: 5,
    marginLeft: 80,
    marginRight: 10,
    marginTop: -27,
    marginBottom: 13,
    flexDirection: 'column',
    alignItems: 'center'
  },
  scrollviewContainer: {
    marginTop: 20
  },
  safeareaWithScroll : {
    backgroundColor: '#fff'
  },
  checkboxContainer : {
    alignContent: 'center',
    marginTop: 10,
    marginLeft: 10,
    flexDirection: 'row',
    height: 30,
    width: 30
  },
  checkbox: {
    alignSelf: 'center'
  },
  emphasizeText: {
    color: '#264653',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    marginHorizontal: 60,
    marginVertical: 5
  },
  withTitleContainer: {
    backgroundColor: '#fff',
    margin: 10,
    color: '#fff'
  },
  listSummaryItem: {
    backgroundColor: '#FFF4CB',
    padding: 20,
    marginVertical: 5,
    marginHorizontal:16,
    borderRadius: 20
  },
  listSummaryTitle: {
    color: '#264653',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    textAlign: 'left',
    fontSize: 20,
    color: "#E76F51"
  },
  itemTitle: {
    color: '#E76F51',
    fontWeight: 'bold',
    fontSize: 40,
    margin: 0
},
  itemDescription: {
    color: '#264653',
    fontWeight: 'bold',
    fontSize: 40,
    margin: 0
  },
});

export default onboardingStyle;