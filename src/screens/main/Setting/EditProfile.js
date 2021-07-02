import React, { useState }  from 'react';
import { Text, SafeAreaView, View, ScrollView, FlatList, Pressable, TouchableOpacity, Image } from 'react-native';
import firebase from 'firebase';
import { connect, useSelector } from 'react-redux';
import * as ImagePicker from 'expo-image-picker';
import { bindActionCreators } from 'redux';
import { withNavigation } from 'react-navigation';
import styles from '../../../styles/homeStyle';


const EditProfile = ({ navigation }) => {

    const currentUser = useSelector(store => store.user.currentUser);

    const [firstName, setFirstname] = useState(currentUser.firstName);
    const [lastName, setLastname] = useState(currentUser.lastName);
    const [username, setUsername] = useState(currentUser.username);
    const [photoURL, setPhotoURL] = useState(currentUser.photoURL);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });
    
    
        if (!result.cancelled) {
            setPhotoURL(result.uri);
            console.log(store.getState().user.currentUser);
        }
    };

    const handleImageRendering = (image) => {
        if (image === "") {
            return (
                <Image
                    source={require('../../../assets/Icons/profile.png')}
                    style={{
                        width: 80,
                        height: 80,
                        borderRadius: 50,
                        borderWidth: 3,
                        borderColor: '#264653'
                    }}
                />);
        } else {
            return (
                <Image
                    source={{uri: image}}
                    style={{
                        width: 80,
                        height: 80,
                        borderRadius: 50,
                        borderWidth: 3,
                        borderColor: '#264653'
                    }}
                />);

        }
    };

    const handleComponentDidMount = () => {
        return (
            <SafeAreaView style={styles.container2}>
                <ScrollView>

                    {/* header */}
                    <View style={{alignItems:'center'}}>
                        <Text style={styles.title}>Edit Profile</Text>   
                    </View>

                    {/* main setting content */}

                    <TouchableOpacity onPress={() => pickImage()}>
                    <View style={{alignItems: 'center'}}>
                        <Text style={[styles.listText2, {fontWeight: 'normal', fontSize: 15, marginBottom: 5}]}>(Change Profile Picture)</Text>
                        {handleImageRendering(photoURL)}
                    </View>
                    </TouchableOpacity>


                    <View style={{margin: 10}}>
                        <TouchableOpacity
                            onPress={()=> navigation.navigate("Home")}>
                            <Text style={{fontSize: 16}}>Save</Text> 
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={()=> navigation.goBack()}>
                            <Text style={{fontSize: 16}}>Cancel</Text> 
                        </TouchableOpacity>
                    </View>
                    


                </ScrollView>
            </SafeAreaView>
        );
    };

    return (
        handleComponentDidMount()
    )

};

export default EditProfile;

// export class EditProfile extends Component {

//     handleComponentDidMount() {
//         return (
//             <SafeAreaView style={styles.container2}>
//                 <ScrollView>

//                     {/* header */}
//                     <View style={{alignItems:'center'}}>
//                         {/* Display name */}
//                         <Text style={styles.title}>Edit Profile</Text>   
//                     </View>

//                     {/* main setting content */}
//                     <View style={{margin: 10}}>
//                         <TouchableOpacity
//                             onPress={()=> this.props.navigation.navigate("Home")}>
//                             <Text style={{fontSize: 16}}>Save</Text> 
//                         </TouchableOpacity>
//                         <TouchableOpacity
//                             onPress={()=> this.props.navigation.goBack()}>
//                             <Text style={{fontSize: 16}}>Cancel</Text> 
//                         </TouchableOpacity>
//                     </View>
                    


//                 </ScrollView>
//             </SafeAreaView>
//         );
//     }

//     render() {
//         return(
//             this.handleComponentDidMount()
//         );
//     }
// }

// const mapStateToProps = (store) => ({
//     currentUser: store.user.currentUser,
// });

// export default connect(mapStateToProps,null)(withNavigation(EditProfile));