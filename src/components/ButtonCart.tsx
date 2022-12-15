import { ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { ProductProps } from "../reducers/cart/reducer";

interface ButtonProps {
  activeButton: "primary" | "secondary";
  product: ProductProps
}

export function ButtonCart({ activeButton, product }: ButtonProps) {
  const {cart, handleToCart} = useContext(CartContext)

  return (
    <>
      {activeButton === "secondary" ? (
        <button className="p-2 bg-yellow-300 text-yellow-500 hover:opacity-80 relative">
          <span className="flex items-center justify-center w-5 h-5 rounded-full bg-yellow-800 text-base-white text-xs font-bold absolute right-[-8.35px] top-[-8px]">{cart.length}</span>
          <ShoppingCart size={19} weight="fill" />
        </button>
      ) : (
        <button className="p-2 bg-purple-800 text-white hover:bg-purple-500" onClick={() => handleToCart(product)}>
          <ShoppingCart size={19} weight="fill" />
        </button>
      )}
    </>
  );
}
