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
      margin: 20
  },
  subtitle: {
      color: '#E76F51',
      fontWeight: 'bold',
      textAlign: 'left',
      fontSize: 18,
      margin: 5,
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
    width: 400,
    height: 400,
    alignContent: 'center'
  },
  listitem: {
    backgroundColor: '#FFF4CB',
    padding: 20,
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
    marginLeft: 20,
    marginRight: 10
  },
  scrollviewContainer: {
    marginTop: 50
  }
});

export default onboardingStyle;