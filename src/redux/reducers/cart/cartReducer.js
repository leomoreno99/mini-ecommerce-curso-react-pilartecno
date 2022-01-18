const initialState = {
    list: []
}

export const cartReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case "ADD_ITEM":
            return { ...state, list: payload }
        default:
            return state;
    }
}