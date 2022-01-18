export const ADD_ITEM = "ADD_ITEM"

const addItemAction = (list) => ({type: ADD_ITEM, payload: list})

export const addItemToCart = (item) => {
    return (dispatch, getState) => {
        const state = getState()
        const prevList = state.cartReducer.list
        const newList = [ ...prevList, item]
        dispatch(addItemAction(newList))
    }
}