//  action creator to add budget
import firebase from "firebase";
import store from "../store";

export function addBudget(data) {
    return (
        firebase.firestore()
        .collection("budgets")
        .doc(firebase.auth().currentUser.uid)
        .update({
            categories: firebase.firestore.FieldValue.arrayUnion(data)
        })
        .then(() => {
            store.dispatch (
                {
                type: "ADD_BUDGET",
                categories: data
                }
            )
            console.log('successful');
            console.log(data);
        })
        .catch((error) => {
            console.log(error);
        })
    )
};