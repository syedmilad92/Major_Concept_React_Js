import { createContext, useReducer } from "react";
import { cartReducer } from "./cartReducer";

const CartContext = createContext();

const initialState = {
  cart: []
}

export const CartProvider = ({ children }) => {
  const [state,dispatch] = useReducer(cartReducer,initialState)
  return (
    <CartContext.Provider value={{state,dispatch}} >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;