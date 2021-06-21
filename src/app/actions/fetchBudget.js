//  action creator to fetch budget
import firebase from "firebase";

// action creator to get budget
export function fetchBudget() {
    return ((dispatch) =>  {
        firebase.firestore()
        .collection("budgets")
        .doc(firebase.auth().currentUser.uid)
        .get()
        .then((snapshot) => {
            if(snapshot.exists) {
                const data = snapshot.data();
                dispatch(
                    {
                        type: "BUDGET_STATE_CHANGE",
                        categories: data.categories,
                        longTerm: data.longTerm,
                        shortTerm: data.shortTerm
                    }
                )
            } else {
                console.log("cannot add budget to database")
            }
        })
    })
};
