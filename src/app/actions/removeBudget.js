//  action creator to remove budget
import firebase from "firebase";
import store from "../store";

export function removeBudget(data) {
    return (
        firebase.firestore()
        .collection("budgets")
        .doc(firebase.auth().currentUser.uid)
        .update({
            categories: firebase.firestore.FieldValue.arrayRemove(data)
        })
        .then(() => {
            const index =  data.id;
            store.dispatch (
                {
                type: "REMOVE_BUDGET",
                categories: {data, index}
                }
            )
        })
        .catch((error) => {
            console.log(error);
        })
    )
};