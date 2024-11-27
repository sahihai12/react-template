const initialstate = 0;
 
const reducer = (state = initialstate , action) => {
    switch (action.type) {
        case 'inc':
            return state+1
        case 'desc':
            return state-1
        default:
            return state;
    }
}
export default reducer