const initialState = {
    cartItems: []
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            const addIndex = state.cartItems.findIndex(item => item.title === action.value.title && item.stemLength === action.value.stemLength);
            if (addIndex === -1) {
                return {
                    ...state,
                    cartItems: [...state.cartItems, action.value]
                }
            } else {
                state.cartItems[addIndex].quantity += 1;
                return {
                    ...state,
                    cartItems: state.cartItems
                }
            }

        case "DELETE_FROM_CART":
            console.log("deleting item index: ", action.value)
            // find the one that matches the name and the stemLength.
            const deleteIndex = state.cartItems.findIndex(item => item.title === action.value.title && item.stemLength === action.value.stemLength);
            // decrease its quantity.
            state.cartItems[deleteIndex].quantity -= 1;
            // if quantity is 0, delete it by its index.
            if (state.cartItems[deleteIndex].quantity === 0) {
                return {
                    ...state,
                    cartItems: state.cartItems.filter((item, index) => index !== deleteIndex)
                }
            } else {
                return {
                    ...state,
                    cartItems: state.cartItems
                }
            }
        default:
            return state;
    }
}