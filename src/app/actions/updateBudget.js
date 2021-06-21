//  action creator to update budget
import firebase from "firebase";

export function updateBudget(data) {
    return (
        firebase.firestore()
        .collection("budgets")
        .doc(firebase.auth().currentUser.uid)
        .update({
            categories: data.categories,
            longTerm: data.longTerm,
            shortTerm: data.shortTerm
        })
        .then(() => {
            console.log("data has been updated")
        })
    )
};
