import React, { useState, useEffect }  from 'react';
import { Text, SafeAreaView, View, ScrollView, FlatList, Pressable, TouchableOpacity, Image, TextInput } from 'react-native';
import firebase from 'firebase';
import {  useSelector } from 'react-redux';
import * as ImagePicker from 'expo-image-picker';
import styles from '../../../styles/homeStyle';
import store from '../../../app/store';


const EditProfile = ({ navigation }) => {

    const currentUser = useSelector(store => store.user.currentUser);

    const [firstName, setFirstname] = useState(currentUser.firstName);
    const [lastName, setLastname] = useState(currentUser.lastName);
    const [username, setUsername] = useState(currentUser.username);
    const [photoURL, setPhotoURL] = useState(currentUser.photoURL);
    const [email, setEmail]  = useState(currentUser.email);

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    ert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });
    
    
        if (!result.cancelled) {
            setPhotoURL(result.uri);
            store.dispatch({
                type: "USER_STATE_CHANGE",
                currentUser: {...currentUser, photoURL: result.uri}
            })
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
                        borderColor: '#7E9181'
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
                        borderColor: '#7E9181'
                    }}
                />);

        }
    };

    const onSave = () => {
        store.dispatch({
            type: "USER_STATE_CHANGE",
            currentUser: {firstName: firstName, lastName: lastName, username: username, photoURL: photoURL, email: email}
        });

        // update firebase
        firebase.firestore().collection('users')
        .doc(firebase.auth().currentUser.uid)
        .update({
            email: email,
            firstName: firstName,
            lastName: lastName,
            username: username,
            photoURL: photoURL
        })
        .then(() => {
            console.log('user profile update successful');
        })
        .catch((error) => {
            console.log(error);
        })
        navigation.goBack();
    };

    const handleComponentDidMount = () => {
        return (
            <SafeAreaView style={styles.container2}>

                {/* header */}
                <View style={{alignItems:'center'}}>
                    <Text style={styles.title}>Edit Profile</Text>   
                    <Text style={styles.subtitle, {color: '#E76F51', marginBottom: 5}}>Tap on fields to edit</Text>
                </View>

                {/* main setting content */}

                <TouchableOpacity onPress={() => pickImage()}>
                <View style={{alignItems: 'center'}}>
                    {handleImageRendering(photoURL)}
                    <Text style={[styles.listText2, {fontWeight: 'normal', fontSize: 15, marginBottom: 5, color: '#7E9181'}]}>(Change Profile Picture)</Text>
                </View>
                </TouchableOpacity>

                <View style={{margin: 5}}>
                    <Text style={styles.settingsText}>First Name:</Text>
                    <TextInput
                        value={firstName}
                        onChangeText={(firstname) => setFirstname(firstname)}
                        style={styles.settingsInput}
                    />
                    <View style={{borderBottomColor: '#D7CEB2',borderBottomWidth: 1}}/>
                </View>

                <View style={{margin: 5}}>
                    <Text style={styles.settingsText}>Last Name:</Text>
                    <TextInput
                        value={lastName}
                        onChangeText={(lastname) => setLastname(lastname)}
                        style={styles.settingsInput}
                    />
                    <View style={{borderBottomColor: '#D7CEB2',borderBottomWidth: 1}}/>
                </View>

                <View style={{margin: 5}}>
                    <Text style={styles.settingsText}>Username:</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.settingsInput}>@ </Text>
                        <TextInput
                        value={username}
                        onChangeText={(username) => setUsername(username)}
                        style={styles.settingsInput}
                        />
                    </View>
                    
                    <View style={{borderBottomColor: '#D7CEB2',borderBottomWidth: 1}}/>
                </View>

                <View style={{margin: 5}}>
                    <Text style={styles.settingsText}>E-mail:</Text>
                    <TextInput
                        value={email}
                        onChangeText={(email) => setEmail(email)}
                        style={styles.settingsInput}
                    />
                    <View style={{borderBottomColor: '#D7CEB2',borderBottomWidth: 1}}/>
                </View>


                <View style={{margin: 10, flexDirection: 'row', justifyContent: 'space-between', alignContent:'center'}}>
                    <TouchableOpacity style={styles.settingsButton}
                        onPress={()=> onSave()}>
                        <Text style={{fontSize: 16, fontWeight: 'bold', color: '#264653'}}>Save</Text> 
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.settingsButton}
                        onPress={()=> navigation.goBack()}>
                        <Text style={{fontSize: 16, fontWeight: 'bold', color: '#264653'}}>Cancel</Text> 
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    };

    return (
        handleComponentDidMount()
    )

};

export default EditProfile;