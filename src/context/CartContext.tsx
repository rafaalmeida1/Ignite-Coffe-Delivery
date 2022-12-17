import produce from "immer";
import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from "react";
import {
  addNewItemInCart,
  decreaseProductQuantity,
  deleteProductInCart,
  increaseProductQuantity,
} from "../reducers/cart/action";
import { cartReducer, ProductProps } from "../reducers/cart/reducer";

interface CartContextData {
  cart: ProductProps[];
  handleToCart: (product:any) => void;
  total: number;
  deleteProduct: (product: ProductProps) => void;
  increaseQuantity: (product: ProductProps) => void;
  decreaseQuantity: (product: ProductProps) => void;
  setNewQuantity: () => void;
}

export const CartContext = createContext({} as CartContextData);

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(cartReducer, { cart: [] }, () => {
    const storedStateAsJSON = localStorage.getItem(
      "@ignite-coffe-delivery:cart-state-1.0.0"
    );

    if (storedStateAsJSON) {
      return JSON.parse(storedStateAsJSON);
    }

    return {
      cart: [],
    };
  });

  const { cart } = cartState;
  const [total, setTotal] = useState(0);
  const [quantity, setQuantity] = useState([]);

  useEffect(() => {
    const stateJson = JSON.stringify(cartState);

    localStorage.setItem("@ignite-coffe-delivery:cart-state-1.0.0", stateJson);
  }, [cartState]);

  useEffect(() => {
    const getTotal = () => {
      const total = cart.reduce((prev, item) => {
        return prev + item.price * item.quantity;
      }, 0);

      setTotal(total);
    };
    getTotal();
  }, [cart]);

  const setNewQuantity = () => {
    setQuantity((state) => [...state]);
  };

  const handleToCart = (product: ProductProps) => {
    dispatch(addNewItemInCart(product));
    setNewQuantity();
  };

  const increaseQuantity = (product: ProductProps) => {
    dispatch(increaseProductQuantity(product));
  };

  const decreaseQuantity = (product: ProductProps) => {
    dispatch(decreaseProductQuantity(product));
  };

  const deleteProduct = (product: ProductProps) => {
    dispatch(deleteProductInCart(product));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        handleToCart,
        total,
        deleteProduct,
        increaseQuantity,
        decreaseQuantity,
        setNewQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
