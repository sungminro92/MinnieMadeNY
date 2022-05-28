const initialState = {
    cartItems: []
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            const index = state.cartItems.findIndex(item => item.title === action.value.title);
            if (index === -1) {
                return {
                    ...state,
                    cartItems: [...state.cartItems, action.value]
                }
            } else {
                state.cartItems[index].quantity += 1;
                return {
                    ...state,
                    cartItems: state.cartItems
                }
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