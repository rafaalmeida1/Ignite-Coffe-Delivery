import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useContext } from "react";
import successImage from "../assets/SuccessImage.png";
import { CheckoutFormContext } from "../context/CheckoutFormContext";

export function Success() {
  const { checkoutFormData } = useContext(CheckoutFormContext);

  const { checkoutFormItems, paymentMethod } = checkoutFormData;
  return (
    <div className="py-14 xl:py-[104px] flex flex-col items-center xl:flex-row gap-4 xl:items-end">
      <div className="flex flex-col">
        <h1 className="text-yellow-800 text-3xl font-bold leading-snug">
          Uhu! Pedido confirmado
        </h1>
        <p className="text-base-subtitle text-xl leading-snug">
          Agora é só aguardar que logo o café chegará até você
        </p>

        <div className="flex flex-col xl:flex-row items-center justify-center w-[330px] sm:w-[450px] xl:w-[528px] h-[274px] xl:h-[274px] mt-10 rounded-tr-3xl rounded-tl-sm rounded-bl-3xl rounded-br-rounded-tl-sm  bg-gradient-to-r from-yellow-500 to-purple-500">
          <div className="flex flex-col gap-5 xl:gap-8 w-[328px] sm:w-[448px] xl:w-[526px] h-[272px] xl:h-[272px] p-10 rounded-tr-3xl rounded-tl-sm rounded-bl-3xl rounded-br-rounded-tl-sm bg-base-background">
            <div className="flex gap-1 xl:gap-3 items-center">
              <MapPin
                weight="fill"
                size={32}
                className="p-2 bg-purple-500 rounded-full text-white"
              />
              <p className="text-base-text font-normal leading-snug">
                Entrega em{" "}
                <span className="font-bold">
                  {checkoutFormItems.rua}, {checkoutFormItems.number}
                </span>
                <br />
                {checkoutFormItems.bairro} - {checkoutFormItems.cidade}, {checkoutFormItems.uf}
              </p>
            </div>

            <div className="flex gap-1 xl:gap-3 items-center">
              <Timer
                weight="fill"
                size={32}
                className="p-2 bg-yellow-500 rounded-full text-white"
              />
              <p className="text-base-text font-normal leading-snug">
                Previsão de entrega
                <br />
                <span className="font-bold">20 min - 30 min</span>
              </p>
            </div>

            <div className="flex gap-1 xl:gap-3 items-center">
              <CurrencyDollar
                weight="fill"
                size={32}
                className="p-2 bg-yellow-800 rounded-full text-white"
              />
              <p className="text-base-text font-normal leading-snug">
                Pagamento na entrega
                <br />
                {paymentMethod === "debit" && <span className="font-bold">Cartão de débito</span>}
                {paymentMethod === "credit" && <span className="font-bold">Cartão de crédito</span>}
                {paymentMethod === "money" && <span className="font-bold">Dinheiro</span>}
              </p>
            </div>
          </div>
        </div>
      </div>

      <img
        src={successImage}
        alt="Image Success Delivery"
        className="xl:w-[492px] xl:h-[293px] "
      />
    </div>
  );
}
