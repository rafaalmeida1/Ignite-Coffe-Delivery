import { ProductProps } from "./reducer";

export enum ActionTypes {
  ADD_PRODUCT_IN_CART = "ADD_PRODUCT_IN_CART",
  INCREASE_PRODUCT_QUANTITY = "INCREASE_PRODUCT_QUANTITY",
  DECREASE_PRODUCT_QUANTITY = "DECREASE_PRODUCT_QUANTITY",
  DELETE_FROM_CART = "DELETE_FROM_CART",
}

export function addNewItemInCart(product: ProductProps) {
  return {
    type: ActionTypes.ADD_PRODUCT_IN_CART,
    payload: {
      newProduct: product,
    },
  };
}

export function increaseProductQuantity(product: ProductProps) {
  return {
    type: ActionTypes.INCREASE_PRODUCT_QUANTITY,
    payload: { newProduct: product },
  };
}

export function decreaseProductQuantity(product: ProductProps) {
  return {
    type: ActionTypes.DECREASE_PRODUCT_QUANTITY,
    payload: { newProduct: product },
  };
}

export function deleteProductInCart(product: ProductProps) {
  return {
    type: ActionTypes.DELETE_FROM_CART,
    payload: {
      newProduct: product,
    },
  };
}
