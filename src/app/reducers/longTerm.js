export default longTerm = (state = 0, action) => {
    switch (action.type) {
        case 'changeLongTerm':
            // TODO: change long term logic
            return state + 1; 
        default:
            return state;
    }
}