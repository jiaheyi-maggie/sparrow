import { StyleSheet, Dimensions } from 'react-native';
import { Platform } from 'react-native';
import { FONTS, COLOR } from '../constants/theme';


const homeStyle = StyleSheet.create({
    title: {
        ...FONTS.h1,
        color: '#264653',
        fontWeight: 'bold',
        textAlign: 'left',
        fontSize: 23,
        marginHorizontal: 10,
        marginTop: 5,
    },
    title2: {
        color: '#264653',
        fontWeight: 'bold',
        textAlign: 'left',
        fontSize: 23,
        marginTop: 5,
        marginHorizontal: 10,

    },
    title3: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'left',
        fontSize: 20,
        marginHorizontal: 10,
        marginTop: 5,
        ...FONTS.h2
    },
    operation: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 23,
        // marginHorizontal: 20,
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
        backgroundColor: '#2A94AF', 
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
        paddingTop: (Platform.OS === 'ios') ? 0: 50,
    },
    container2:{
        backgroundColor: '#fff',
        flex: 1,
        paddingTop: (Platform.OS === 'ios') ? 0: 40,
        padding: (Platform.OS === 'ios') ? 20: 10,
    },
    subtitle: {
        color:'#562C2C',
        textAlign: 'left',
        fontSize: 17,
        paddingVertical: 5,
        marginHorizontal: 10
    },
    viewDetailText:{
        color: '#F4A261',
        fontSize: 15,
        marginHorizontal: 20, 
        fontWeight: 'bold'
    },
    subtitle2: {
        color: '#264653',
        fontWeight: 'bold',
        textAlign: 'left',
        fontSize: 17,
        paddingVertical: 5,
        marginHorizontal: 10,
        textDecorationLine:'underline'
    },
    statusContainer: {
        borderRadius: 20,
        padding: 7,
        elevation: 2,
        backgroundColor: "#FFF4CB",
        margin: 10,
        alignItems: 'center'
    },
    number: {
        color: '#2A94AF',
        fontWeight: 'bold',
        textAlign: 'left',
        fontSize: 17,
        paddingVertical: 5,
        marginHorizontal: 20
    },
    number2: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'left',
        fontSize: 17,
        paddingVertical: 5,
        marginHorizontal: 20
    },
    listContainer: {
        backgroundColor:'#FFF4CB', 
        margin: 5, 
        flexDirection: 'row', 
        padding: 12, 
        borderRadius: 15, 
        justifyContent: 'space-between',
        marginHorizontal: Platform.OS ==='android' ? 0 : 20
    },
    listText: {
        fontSize: 18,
        fontWeight: 'bold',
        color:'#706993',
        marginBottom: 5
    },
    listText2: {
        fontSize: 18,
        fontWeight: 'bold',
        color:'#E76F51'
    },
    listText3: {
        fontSize: 18,
        fontWeight: 'bold',
        color:'#2A94AF'
    },
    smallTitle :{
        color: '#264653',
        fontWeight: 'bold',
        textAlign: 'left',
        fontSize: 23,
        marginHorizontal: 5,
        marginTop: 5,
    },
    modalContainer: {
        backgroundColor: '#fff',
        flex: 1,
        paddingTop: 10,
    },
    addButtonContainer: {
        backgroundColor: "#F4A261",
        borderRadius: 20,
        paddingLeft: 15,
        paddingVertical: 5,
        marginRight: 10,
        elevation: 2
    },
    settingsButton: {
        backgroundColor: "#F4A261",
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        elevation: 2
    },
    settingsText: {
        fontSize: 17,
        fontStyle:'italic',
        fontWeight:'bold',
        color: '#2A94AF',
        
    },
    settingsInput: {
        fontSize: 17,
        marginVertical: Platform.OS === 'ios' ? 5 : 0
    },
    addText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "#264653",
        marginRight: 10,
        paddingRight: 8
    },
    textInput: {
        backgroundColor: '#FFF4CB',
        borderRadius: 15,
        paddingVertical: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#E76F51',
        elevation: 2,
        textAlign: 'center'
    },
    textInputContainer: {
       margin: 10,
       backgroundColor: 'white'
    },
    textInputValue: {
        backgroundColor: '#FFF4CB',
        borderRadius: 15,
        paddingVertical: 3,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#E76F51',
        marginTop: 5,
        elevation: 2,
        textAlign: 'center',
        width: 100
    },
    textInputContainerValue: {
        borderRadius: 15,
        elevation: 2,
        backgroundColor: 'aliceblue',
        padding: 10,
        paddingLeft: 15
    },
    textInputContainerValue2: {
        borderRadius: 15,
        elevation: 2,
        backgroundColor: '#FFF4CB',
        padding: 10,
        height: 200
    },
    addTextGuide: {
        fontSize: 20,
        fontWeight: 'bold',
        color:'#264653'
    },
    addTextGuide2: {
        fontSize: 20,
        fontWeight: 'bold',
        color:'#2A94AF'
    },
    startView: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        backgroundColor: "#F8FAFB",
        width: 350,
        borderRadius: 20,
        padding: 10,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        paddingHorizontal: 8,
        elevation: 2,
        padding: 2,
        marginVertical:10,
        width: 150
    },
    buttonOpen: {
        backgroundColor: "#D7CEB2",
    },
    buttonClose: {
        backgroundColor: "#7E9181",
        width: 280,
        height: 40,
        padding: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        textAlignVertical: 'center'
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 20
    },
    textStyle2: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 20
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    cancelButtonContainer: {
        backgroundColor: "#E76F51",
        borderRadius: 20,
        padding: 10,
        width: 150,
        alignItems: 'center'
    },
    cancelText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },
    titleContainer: {
        width: 200,
        borderRadius: 15,
        backgroundColor: '#E0FBFC',
        elevation: 2,
        marginHorizontal: 10,
        marginVertical: 5,
        alignItems: 'center',
        padding: 2
    },
    smallTitle2 : {
        color: '#264653',
        fontWeight: 'bold',
        textAlign: 'left',
        fontSize: 17,
    },
    settingList: {
        borderBottomWidth: 1,
        borderBottomColor: '#D7CEB2', 
        marginBottom: 10, 
        padding: 5
    },
    backButton:{
        backgroundColor: '#2A94AF',
        marginLeft: 5,
        borderRadius: 10,
        padding: 5
    },
    menuButton:{
        backgroundColor: '#2A94AF',
        marginRight: 5,
        borderRadius: 10,
        padding: 5
    },
    cardText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'left',
        fontSize: 19,
        marginHorizontal: Platform.OS === 'ios'? 10: 15
    },
    cardContainer: {
        backgroundColor:'#FAA381',
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        margin: 10,
    },
    genericRow: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent:'space-between',
    }
});

 export default homeStyle;