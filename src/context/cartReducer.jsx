export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_CART":
      return { ...state, cart: [...state.card, action.payload] };
    case "DELETE":
      return {
        ...state,
        cart: state.cart.filter((c, _) => c.id !== action.payload.id),
      };
    case "UPDATE":
      return {
        ...state,
        cart: state.cart.map((cart, index) =>
          card.id === action.payload.id ? action.payload : cart
        ),
      };
    default:
      break;
  }
};
