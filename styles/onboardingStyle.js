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
      textAlign: 'center'
  },
  subtitle: {
      color: '#E76F51',
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 18,
      margin: 15
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
  }
});

export default onboardingStyle;