import firebase from "firebase";

// action creator
export function fetchUser() {
    // dispatch, getState: variables for thunk
    return ((dispatch, getState) =>  {
        firebase.firestore()
        .collection("users")
        .doc(firebase.auth().currentUser.uid)
        .get()
        .then((snapshot) => {
            if(snapshot.exists) {
                const currUser = getState().currentUser;
                console.log(currUser);
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