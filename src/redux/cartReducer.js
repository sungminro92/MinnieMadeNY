const initialState = {
    cartItems: []
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]
            }
        case "DELETE_FROM_CART":
            console.log("deleting item index: ", action.value)
            return {
                ...state,
                cartItems: state.cartItems.filter((cartItem, index) => index != action.value)
            }
        default:
            return state;
    }
}