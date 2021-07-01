import firebase from "firebase";

// action creator
// TODO: change this to make it work
export function updateUser(data, updateCriteria) {
    const user = firebase.auth().currentUser;

    return ((dispatch) =>  {
        switch(updateCriteria) {
            case "email":
                user.updateEmail(data)
                .then(() => {
                    dispatch({
                        type: "USER_STATE_CHANGE",
                        currentUser: data
                    })
                }).catch((error) => {
                    console.log(error);
                })

            case "password":
                user.updatePassword(data)
                .then(() => {
                    console.log('password updated')
                }).catch((error) => {
                    console.log(error);
                })

            case "profile": 
                firebase.firestore()
                .collection('users')
                .doc(user.uid)
                .update({
                    photoURL: data
                })
                .then(() => {
                    console.log('profile picture updated');
                }).catch((error) => {
                    console.log(error);
                })
        }
    })
};