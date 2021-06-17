const shortTerm = (state = 0, action) => {
    switch (action.type) {
        case 'changeShortTerm':
            if (action.payload === null) {
                return 0;
            }
            return action.payload; 
        default:
            return state;
    }
};

export default shortTerm;