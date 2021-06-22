// action creator to fetch budget 
import firebase from "firebase";

export function fetchBudget() {
    return ((dispatch) =>  {
        firebase.firestore()
        .collection("budgets")
        .doc(firebase.auth().currentUser.uid)
        .get()
        .then((snapshot) => {
            if(snapshot.exists) {
                const data = snapshot.data();
                console.log(data);
                dispatch(
                    {
                        type: "BUDGET_STATE_CHANGE",
                        // categories: data.categories,
                        longTerm: data.longTerm,
                        shortTerm: data.shortTerm
                    }
                )
            } else {
                console.log("budget does not exist in database")
            }
        })
    })
};