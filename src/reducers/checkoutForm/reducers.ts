import produce from "immer";
import { CheckoutActionTypes } from "./action";

export interface CheckoutFormState {
  checkoutFormItems: {},
  paymentMethod: string
}

export function checkoutReducer(state: CheckoutFormState , action: any) {
  switch(action.type) {
    case CheckoutActionTypes.CREATE_NEW_PURCHASE:
      return produce(state, (draft) => {
        draft.checkoutFormItems = action.payload.newPurchase;
        draft.paymentMethod = action.payload.paymentMethod
      })
    default:
      return state
  }
}