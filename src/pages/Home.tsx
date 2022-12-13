import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import coffeBanner from "../assets/coffeBanner.png";
import { ProductCart } from "../components/ProductCart";

export function Home() {
  return (
    <>
      <main className="py-14 md:py-[104px] md:mb-8 flex items-center sm:flex-row flex-col gap-14 sm:h-[554px]">
        <div className="flex flex-col">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl md:text-3xl text-base-title leading-snug">
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <p className="text-lg lg:text-xl md:text-sm text-base-subtitle mt-4 leading-snug">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <div className="mt-16 grid grid-cols-2 gap-y-5">
            <div className="flex gap-1 text-base-text text-xs lg:text-base leading-snug items-center">
              <ShoppingCart
                weight="fill"
                size={30}
                className="p-2 bg-yellow-800 text-base-background rounded-full"
              />
              Compra simples e segura
            </div>
            <div className="flex gap-1 text-base-text text-xs lg:text-base leading-snug items-center">
              <Package
                weight="fill"
                size={30}
                className="p-2 bg-base-text text-base-background rounded-full"
              />
              Embalagem mantém o café intacto
            </div>
            <div className="flex gap-1 text-base-text text-xs lg:text-base leading-snug items-center">
              <Timer
                weight="fill"
                size={30}
                className="p-2 bg-yellow-500 text-base-background rounded-full"
              />
              Entrega rápida e rastreada
            </div>
            <div className="flex gap-1 text-base-text text-xs lg:text-base leading-snug items-center">
              <Coffee
                weight="fill"
                size={30}
                className="p-2 bg-purple-500 text-base-background rounded-full"
              />
              O café chega fresquinho até você
            </div>
          </div>
        </div>

        <img src={coffeBanner} alt="Coffe Banner Image" className="w-72 h-72 lg:w-auto lg:h-auto" />
      </main>

      <section className="md:mt-8 mb-24">
        <h1 className="text-3xl text-base-subtitle leading-10">Nosso cafés</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-center md:gap-x-8 gap-y-10 mt-14">
          <ProductCart />
        </div>
      </section>
    </>
  );
}
