//  action creator to add budget
import firebase from "firebase";

// TODO: fix bug => invalid data type
export function addBudget(data) {
    return (
        firebase.firestore()
        .collection("budgets")
        .doc(firebase.auth().currentUser.uid)
        .update({
            categories: firebase.firestore.FieldValue.arrayUnion(data)
        })
        .then(() => {
            // update redux store
            // dispatch (
            //     {
            //     type: "ADD_BUDGET",
            //     categories: data
            //     }
            // )
            console.log('successful');
            console.log(data);
        })
        .catch((error) => {
            console.log(error);
        })
    )
};