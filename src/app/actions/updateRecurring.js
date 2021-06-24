//  action creator to update shortTerm(recurring)
import firebase from "firebase";
import store from "../store";

export function updateRecurring(data) {
    return (
        firebase.firestore()
        .collection("budgets")
        .doc(firebase.auth().currentUser.uid)
        .update({
            shortTerm: data
        })
        .then(() => {
            store.dispatch (
                {
                type: "updateRecurring",
                recurring: data
                }
            )
        })
        .catch((error) => {
            console.log(error);
        })
    )
};