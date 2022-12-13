import { productData, coffeImages } from "../utils/productData";
import { ButtonCart } from "./ButtonCart";

interface ProductDataProps {
  name: String;
  description: String;
  category: String;
  subcategory: String | null;
  anothercategory: String | null;
  price: Number;
  inventory: Number;
  quantity: Number;
}

export function ProductCart() {
  console.log(productData);

  return (
    <>
      {productData.map((product, index) => (
        <div className="flex flex-col items-center w-[256px] pb-10 bg-base-card rounded-tr-3xl rounded-bl-3xl">
          <img
            src={coffeImages[index].url}
            alt={`Coffe ${coffeImages[index]}`}
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
              <h1 className="font-bold text-2xl">{product.price.toString().padStart(2, '0').replace('.', ',')}0</h1>
            </div>

            <div className="flex gap-2 items-center justify-between">
              <div className="flex gap-1 bg-base-button justify-center items-center h-9 rounded-md">
                <button className="text-purple-500 text-3xl p-2 hover:opacity-80">
                  -
                </button>
                <span className="text-base-title font-normal text-base leading-snug text-center">
                  {product.quantity}
                </span>
                <button className="text-purple-500 text-2xl p-2 hover:opacity-80">
                  +
                </button>
              </div>
              <ButtonCart activeButton="primary" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
