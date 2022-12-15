import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { ProductProps } from "../reducers/cart/reducer";
import { ButtonCart } from "./ButtonCart";

interface ProductCartProps {
  index: number;
  product: ProductProps;
}

export function ProductCart({ index, product }: ProductCartProps) {
  const {setNewQuantity} = useContext(CartContext)

  const increaseQuantityProductBeforeCart = () => {
    product.quantity += 1 
    setNewQuantity()
  }

  const decreaseQuantityProductBeforeCart = () => {
    product.quantity -= 1 
    setNewQuantity()
  }

  return (
    <>
      <div className="flex flex-col items-center pb-10 bg-base-card rounded-tr-3xl rounded-bl-3xl">
        <img
          src={product.image}
          alt={`Coffe ${product.image[index]}`}
          className="mt-[-20px] px-12"
        />
        <div className="flex gap-1 mt-3">
          <span className="flex justify-center items-center text-yellow-800 bg-yellow-300 py-1 px-2 rounded-full font-bold text-xs leading-snug">
            {product.category}
          </span>
          {product.subcategory !== null && (
            <span className="flex justify-center items-center text-yellow-800 bg-yellow-300 py-1 px-2 rounded-full font-bold text-xs leading-snug">
              {product.subcategory}
            </span>
          )}
          {product.anothercategory !== null && (
            <span className="flex justify-center items-center text-yellow-800 bg-yellow-300 py-1 px-2 rounded-full font-bold text-xs leading-snug">
              {product.anothercategory}
            </span>
          )}
        </div>

        <h1 className="p-5 text-base-subtitle text-xl leading-snug font-bold">
          {product.name}
        </h1>
        <p className="text-base-label text-sm leading-snug text-center px-5">
          {product.description}
        </p>

        <div className="flex justify-between items-center px-6 gap-6 mt-8">
          <div className="flex items-center text-base-text gap-1">
            <span className="text-sm font-normal">R$</span>
            <h1 className="font-bold text-2xl">
              {product.price.toString().padStart(2, "0").replace(".", ",")}0
            </h1>
          </div>

          <div className="flex gap-2 items-center justify-between">
            <div className="flex gap-1 bg-base-button justify-center items-center h-9 rounded-md">
              <button
                className="text-purple-500 text-3xl px-2 hover:opacity-80"
                onClick={() => decreaseQuantityProductBeforeCart()}
              >
                -
              </button>
              <span className="text-base-title font-normal text-base leading-snug text-center">
                {product.quantity}
              </span>
              <button
                className="text-purple-500 text-2xl px-2 hover:opacity-80"
                onClick={() => increaseQuantityProductBeforeCart()}
              >
                +
              </button>
            </div>
            <ButtonCart activeButton="primary" product={product} />
          </div>
        </div>
      </div>
    </>
  );
}
