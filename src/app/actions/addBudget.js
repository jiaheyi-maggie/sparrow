//  action creator to add budget
import firebase from "firebase";

// TODO: fix bug => invalid data type
export function addBudget(data) {
    return (
        firebase.firestore()
        .collection("budgets")
        // reference the doc through the unique uid
        .doc(firebase.auth().currentUser.uid)
        .set(data)
        .then((ref) => {
            console.log("budget added to database", ref.uid)
        })
        .catch((error) => {
            console.log(error);
        })
    )
};