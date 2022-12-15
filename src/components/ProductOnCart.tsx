import { Trash } from "phosphor-react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { ProductProps } from "../reducers/cart/reducer";

export function ProductOnCart(props: ProductProps) {

  const { deleteProduct, increaseQuantity, decreaseQuantity } = useContext(CartContext)

  return (
    <div className="flex relative pb-8 first:pt-0 pt-8 border-b border-base-button">
      <div className="flex gap-5 items-end">
        <img src={props.image} alt="" className="w-1/4" />
        <div className="flex flex-col ">
          <strong className="text-base-subtitle font-normal leading-snug">
            {props.name}
          </strong>
          <div className="flex gap-2">
            <div className="flex gap-1 bg-base-button justify-center items-center p-1 rounded-md">
              <button type="button" className="text-purple-500 text-3xl px-2 hover:opacity-80" onClick={() => decreaseQuantity(props)}>
                -
              </button>
              <span className="text-base-title font-normal text-base leading-snug text-center">
                {props.quantity}
              </span>
              <button type="button" className="text-purple-500 text-2xl px-2 hover:opacity-80" onClick={() => increaseQuantity(props)}>
                +
              </button>
            </div>
            <button type="button" className="text-base-text flex gap-1 items-center px-2" onClick={() => deleteProduct(props)}><Trash size={16} className="text-purple-500" />Remover</button>
          </div>

          <p className="text-base-text text-base font-bold leading-snug absolute right-0">R$ {String((props.price * props.quantity).toFixed(2)).replace('.', ',')}</p>
        </div>
      </div>
    </div>
  );
}
