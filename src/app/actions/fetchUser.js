import firebase from "firebase";

// action creator
export function fetchUser() {
    // dispatch, getState: variables for thunk
    return ((dispatch) =>  {
        firebase.firestore()
        .collection("users")
        .doc(firebase.auth().currentUser.uid)
        .get()
        .then((snapshot) => {
            if(snapshot.exists) {
                // dispatch action to redux
                dispatch(
                    {
                        type: "USER_STATE_CHANGE",
                        currentUser: snapshot.data()
                    }
                )
            } else {
                console.log("user does not exist in database")
            }
        })
    })
};