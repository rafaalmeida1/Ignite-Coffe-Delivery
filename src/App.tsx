import { BrowserRouter } from "react-router-dom";
import { CartContextProvider } from "./context/CartContext";
import { CheckoutFormProvider } from "./context/CheckoutFormContext";
import { Router } from "./Router";

export function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <CheckoutFormProvider>
          <Router />
        </CheckoutFormProvider>
      </CartContextProvider>
    </BrowserRouter>
  );
}
