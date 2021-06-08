import { StyleSheet } from 'react-native';

const onboardingStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
      color: '#264653',
      fontWeight: 'bold',
      fontSize: 40,
      textAlign: 'left',
      margin: 10,
      marginTop: 70
  },
  subtitle: {
      color: '#E76F51',
      fontWeight: 'bold',
      textAlign: 'left',
      fontSize: 18,
      marginLeft: 20,
      marginRight: 10
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
      paddingVertical: 9,
      paddingHorizontal: 9,
      margin: 10
  },
  buttonText : {
      fontSize: 15,
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
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
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
    marginBottom: 13
  },
  scrollviewContainer: {
    marginTop: 50
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
    marginTop: 120,
    flexDirection: 'column',
    padding:0
  }
});

export default onboardingStyle;