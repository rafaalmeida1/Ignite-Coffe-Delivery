import React, { createContext, ReactNode, useReducer } from "react";
import { CheckoutFormState, checkoutReducer } from "../reducers/checkoutForm/reducers";

export interface CheckoutFormDataProps {
  cep: Number;
  rua: String;
  number: Number;
  complemento: String;
  bairro: String;
  cidade: String;
  uf: String;
}

interface CheckoutFormContextData {
  dispatch: ({}: any) => void;
  checkoutFormData: {
    checkoutFormItems: any,
    paymentMethod: String;
  }
}

export const CheckoutFormContext = createContext({} as CheckoutFormContextData);

interface CheckoutFormContextProviderProps {
  children: ReactNode;
}

export function CheckoutFormProvider({
  children,
}: CheckoutFormContextProviderProps) {

  const [checkoutFormData, dispatch] = useReducer(checkoutReducer, {
    checkoutFormItems: {},
    paymentMethod: "",
  });

  return (
    <CheckoutFormContext.Provider value={{ checkoutFormData, dispatch }}>
      {children}
    </CheckoutFormContext.Provider>
  );
}
