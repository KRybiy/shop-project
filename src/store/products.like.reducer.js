const productsLikeReducer = (state ={
    '1': true,
    '2': false,
}, action) => {
    switch(action.type) {
        case "LIKE":
            return {
                ...state,
                [action.id]: true,
            }
        case "LIKE":
        return {
                ...state,
                [action.id]: false,
            }
        default:
            return state
    }
}


export default productsLikeReducer