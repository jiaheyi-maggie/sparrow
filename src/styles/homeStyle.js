import { StyleSheet, Dimensions } from 'react-native';
import { Platform } from 'react-native';


const homeStyle = StyleSheet.create({
    title: {
        color: '#264653',
        fontWeight: 'bold',
        textAlign: 'left',
        fontSize: 30,
        marginHorizontal: 20
    },
    tab: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        right: 10,
        elevation: 0,
        backgroundColor: '#fff',
        borderRadius: 15,
        height: 80,
    },
    homeContainer: {
        backgroundColor: '#C2EABD', 
        flex:1,
        paddingTop: (Platform.OS === 'ios') ? 0: 40,
    },
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
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
    container: {
        backgroundColor: '#fff',
        flex: 1,
        paddingTop: (Platform.OS === 'ios') ? 0: 40,
    },
    subtitle: {
        color: '#2A94AF',
        fontWeight: 'bold',
        textAlign: 'left',
        fontSize: 22,
        paddingVertical: 5,
        marginHorizontal: 20
    },
    statusContainer: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        backgroundColor: "#FFF4CB",
        margin: 10,
        alignItems: 'center'
    },
    number: {
        color: '#562C2C',
        fontWeight: 'bold',
        textAlign: 'left',
        fontSize: 22,
        paddingVertical: 5,
        marginHorizontal: 20
    },
 });

 export default homeStyle;