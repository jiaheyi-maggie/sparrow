//  action creator to remove budget
import firebase from "firebase";
import store from "../store";

export function removeBudget(data) {
    return (
        firebase.firestore()
        .collection("budgets")
        .doc(firebase.auth().currentUser.uid)
        .update({
            categories: data,
        })
        .then(() => {
            store.dispatch ({
                type: "REMOVE_BUDGET",
                categories: data,
            })
        })
        .catch((error) => {
            console.log(error);
        })
    )
};