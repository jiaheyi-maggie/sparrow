export default longTerm = (state = [0, 'Year'], action) => {
    switch (action.type) {
        // update long term goal (LongTerm)
        case 'changeLongTerm':
            if (action.payload === null) {
                return state;
            }
            const longTermState = [...state];
            longTermState[0] = action.payload;
            console.log(longTermState);
            return longTermState; 
        // update long term period
        case 'changeLongTermPeriod':
            const periodState = [...state];
            periodState[1] = action.payload;
            console.log(periodState);
            return periodState; 
        default:
            return state;
    }
}