import { StyleSheet, Dimensions } from 'react-native';
import { Platform } from 'react-native';
import { FONTS, COLORS } from '../constants/theme';


const homeStyle = StyleSheet.create({
    title: {
        ...FONTS.h2,
        color: COLORS.primary,
        // marginHorizontal: 10,
        // marginTop: 5,
    },
    title2: {
        color: COLORS.primary, 
        ...FONTS.h2,
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
    container3:{
        backgroundColor: '#fff',
        flex: 1,
        paddingTop: (Platform.OS === 'ios') ? 0: 45,
        padding: (Platform.OS === 'ios') ? 10: 10,
    },
    subtitle: {
        ...FONTS.h4,
        color: COLORS.lightGray3,
    },
    viewDetailText:{
        color: '#F4A261',
        fontSize: 15,
        marginHorizontal: 20, 
        fontWeight: 'bold'
    },
    subtitle2: {
        ...FONTS.h33,
        color: COLORS.primary,
        textDecorationLine:'underline',
        paddingHorizontal: 10
    },
    statusContainer: {
        borderRadius: 20,
        padding: 5,
        elevation: 2,
        backgroundColor: "#FFF4CB",
        margin: 5,
        alignItems: 'center',
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
        ...FONTS.h3,
        color:'#706993',
        marginBottom: 5
    },
    listText2: {
        ...FONTS.h3,
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
        margin: 10
    },
    addButtonContainer: {
        backgroundColor: "#F4A261",
        borderRadius: 15,
        paddingLeft: 15,
        paddingRight: 15,
        paddingVertical: 5,
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
        ...FONTS.h3,
        color: COLORS.secondary,
        
    },
    settingsInput: {
        fontSize: 17,
        marginVertical: Platform.OS === 'ios' ? 5 : 0
    },
    addText: {
        ...FONTS.h3,
        color: COLORS.primary,
    },
    textInput: {
        ...FONTS.h3, 
        backgroundColor: '#FFF4CB',
        borderRadius: 15,
        paddingVertical: 8,
        color: '#E76F51',
        elevation: 2,
        textAlign: 'center'
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
        ...FONTS.body22,
        color: COLORS.primary
    },
    addTextGuide2: {
        ...FONTS.body22,
        color: COLORS.secondary
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
        marginVertical:5,
        width: 150
    },
    buttonOpen: {
        backgroundColor: "#D7CEB2",
    },
    buttonClose: {
        backgroundColor: "#7E9181",
        width: 280,
        padding: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        textAlignVertical: 'center'
    },
    textStyle: {
        ...FONTS.h2,
        color: COLORS.white
    },
    textStyle2: {
        ...FONTS.body22,
        color: COLORS.white
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
        ...FONTS.h3,
        color: 'white',
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
        ...FONTS.h3, 
        color: '#fff',
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