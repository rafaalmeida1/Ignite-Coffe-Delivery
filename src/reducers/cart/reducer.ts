import produce from "immer";
import { ActionTypes } from "./action";

export interface ProductProps {
  id: number;
  name: string;
  description: string;
  category: string;
  subcategory: string | null;
  anothercategory: string | null;
  price: number;
  inventory: number;
  quantity: number;
  image: string;
}

export interface CartState {
  cart: ProductProps[];
}

export function cartReducer(state: CartState, action: any) {
  const coffeeAlreadyExistsInCart = state.cart.findIndex(
    (cartItem) => cartItem.id === action.payload.newProduct.id
  );
  switch (action.type) {
    case ActionTypes.ADD_PRODUCT_IN_CART:
      return produce(state, (draft) => {
        if (coffeeAlreadyExistsInCart < 0) {
          draft.cart.push(action.payload.newProduct);
        } else {
          draft.cart[coffeeAlreadyExistsInCart].quantity = action.payload.newProduct.quantity + draft.cart[coffeeAlreadyExistsInCart].quantity;
        }
      });

    case ActionTypes.INCREASE_PRODUCT_QUANTITY:
      return produce(state, (draft) => {
        if(draft.cart[coffeeAlreadyExistsInCart].quantity === draft.cart[coffeeAlreadyExistsInCart].inventory) return state
        if(coffeeAlreadyExistsInCart >= 0) {
          draft.cart[coffeeAlreadyExistsInCart].quantity += 1;
        }
      })
    case ActionTypes.DECREASE_PRODUCT_QUANTITY:
      return produce(state, (draft) => {
        if(draft.cart[coffeeAlreadyExistsInCart].quantity === 1) return state
        if(coffeeAlreadyExistsInCart >= 0) {
          draft.cart[coffeeAlreadyExistsInCart].quantity -= 1;
        }
      })
    case ActionTypes.DELETE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(product => product.id !== action.payload.newProduct.id)
      }
    default:
      return state;
  }
}
