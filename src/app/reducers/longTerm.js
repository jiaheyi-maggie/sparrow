export default longTerm = (state = 0, action) => {
    switch (action.type) {
        // update long term goal (LongTerm)
        case 'changeLongTerm':
            if (action.payload === null) {
                return state;
            }
            return action.payload; 
        default:
            return state;
    }
}