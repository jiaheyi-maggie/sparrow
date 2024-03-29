export default shortTerm = (state = [0, 'month'], action) => {
    switch (action.type) {
        case 'changeShortTerm':
            if (action.payload === null) {
                return 0;
            }
            const shortTermState = [...state];
            shortTermState[0] = action.payload;
            return shortTermState; 
        // update short term period
        case 'changeShortTermPeriod':
            const period = [...state];
            period[1] = action.payload;
            return period; 
        default:
            return state;
    }
};