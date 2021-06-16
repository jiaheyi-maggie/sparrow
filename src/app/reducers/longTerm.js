export default longTerm = (state = 0, action) => {
    switch (action.type) {
        case 'changeLongTerm':
            console.log(action.payload);
            return action.payload; 
        default:
            return state;
    }
}