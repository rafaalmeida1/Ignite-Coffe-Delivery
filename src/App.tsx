import { BrowserRouter } from "react-router-dom";
import { CartContextProvider } from "./context/CartContext";
import { Router } from "./Router";

export function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Router />
      </CartContextProvider>
    </BrowserRouter>
  );
}
