const initialState = {
    averagePeriod: 'year',
}

export default averagePeriod = (state = initialState, action) => {
    switch (action.type) {
        case 'changeAveragePeriod':
            if (action.payload === null) {
                return state;
            }
            return {
                ...state,
                averagePeriod: action.payload
            }
        default:
            return state;
    }
}