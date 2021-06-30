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
                    dispatch({
                        type: "USER_STATE_CHANGE",
                        currentUser: data
                    })
                }).catch((error) => {
                    console.log(error);
                })

            case "profile": 
                user.updateProfile(data)
                .then(() => {
                    console.log('updated');
                }).catch((error) => {
                    console.log(error);
                })
        }
    })
};