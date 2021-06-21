import firebase from "firebase";

export default fetchUser = () => {
    return ((dispatch) =>  {
        firebase.firestore()
        .collection("users")
        .doc(firebase.auth().currentUser.uid)
        .get()
        .then((snapshot) => {
            if(snapshot.exists) {
                // dispatch to redux
                dispatch({
                    type: "getUserInfo",
                    payload: snapshot.data()
                })
            } else {
                console.log("user does not exist in database")
            }
        })
    })
}