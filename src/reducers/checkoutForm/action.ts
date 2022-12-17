import { CheckoutFormDataProps } from "../../context/CheckoutFormContext";

export enum CheckoutActionTypes {
  CREATE_NEW_PURCHASE = "CREATE_NEW_PURCHASE",
}

export function createNewPurchase(newPurchase: CheckoutFormDataProps, paymentMethod: string){
  return {
    type: CheckoutActionTypes.CREATE_NEW_PURCHASE,
    payload: {
      newPurchase,
      paymentMethod
    }
  }
}