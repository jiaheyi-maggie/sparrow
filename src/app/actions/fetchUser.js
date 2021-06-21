import firebase from "firebase";
import { USER_STATE_CHANGE } from "../constants/index";

export function fetchUser() {
    // dispatch: only available with thunk
    return ((dispatch) =>  {
        firebase.firestore()
        .collection("users")
        .doc(firebase.auth().currentUser.uid)
        .get()
        .then((snapshot) => {
            if(snapshot.exists) {
                console.log(snapshot);
                // dispatch to redux
                dispatch(
                    // {
                    // type: "getUserInfo",
                    // payload: snapshot.data()
                    // }
                    {
                        type: USER_STATE_CHANGE,
                        currentUser: snapshot.data()
                    }
                )
            } else {
                console.log("user does not exist in database")
            }
        })
    })
}