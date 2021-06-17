export default longTerm = (state = 0, action) => {
    switch (action.type) {
        // update long term goal (LongTerm)
        case 'changeLongTerm':
            console.log(action.payload);
            if (action.payload === null) {
                return 0;
            }
            return action.payload; 
        case 'changeShortTerm':
            console.log(action.payload);
            return Math.floor(action.payload / 12); 
        default:
            return state;
    }
}