import { StyleSheet, Dimensions } from 'react-native';

const homeStyle = StyleSheet.create({
    title: {
        color: '#264653',
        fontSize: 50,
        textAlign: 'center',
        marginTop: 60
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
    }
 });

 export default homeStyle;