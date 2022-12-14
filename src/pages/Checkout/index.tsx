import classNames from "classnames";
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Spinner,
} from "phosphor-react";
import { useContext, useState } from "react";
import { ProductOnCart } from "../../components/ProductOnCart";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import * as zod from "zod";
import { CartContext } from "../../context/CartContext";
import { ProductProps } from "../../reducers/cart/reducer";
import { useNavigate } from "react-router-dom";
import { createNewPurchase } from "../../reducers/checkoutForm/action";
import { CheckoutFormContext } from "../../context/CheckoutFormContext";
import produce from "immer";
import { PaymentForm } from "./components/PaymentForm";
import { SectionPaymentMethod } from "./components/SectionPaymentMethod";

const paymentFormValidationSchema = zod.object({
  cep: zod.number().min(1),
  rua: zod.string(),
  number: zod.number(),
  complemento: zod.string(),
  bairro: zod.string(),
  cidade: zod.string(),
  uf: zod.string(),
});

type PaymentFormData = zod.infer<typeof paymentFormValidationSchema>;

export function Checkout() {
  const [typePay, setTypePay] = useState("");
  const [loading, setLoading] = useState(false);
  const { cart, total } = useContext(CartContext);
  const { dispatch } = useContext(CheckoutFormContext);
  const navigate = useNavigate();

  const handleSetTypePay = (paymentMethod: string) => {
    setTypePay(paymentMethod);
  }

  const paymentForm = useForm<PaymentFormData>({
    resolver: zodResolver(paymentFormValidationSchema),
  });

  const { handleSubmit, watch, reset, register } = paymentForm;

  function handleCreatePaymentForm(data: PaymentFormData) {
    setLoading(true);
    const newPurchase: PaymentFormData = {
      cep: data.cep,
      rua: data.rua,
      number: data.number,
      complemento: data.complemento,
      bairro: data.bairro,
      cidade: data.cidade,
      uf: data.uf,
    };

    const paymentMethod = typePay;

    dispatch(createNewPurchase(newPurchase, paymentMethod));
    setTimeout(() => {
      setLoading(false);
      navigate("/success");
    }, 1000);
  }

  const firstInputInForm = watch("cep");
  const isSubmitDisabled = !firstInputInForm;

  return (
    <form
      className="mt-2 flex flex-col xl:flex-row items-center md:items-start gap-8"
      onSubmit={handleSubmit(handleCreatePaymentForm)}
    >
      <section className="flex flex-col flex-wrap gap-3 rounded-md  w-full xl:w-3/4">
        <h1 className="text-lg font-bold leading-snug">Complete seu pedido</h1>
        <div className="p-10 flex flex-col bg-base-card">
          <div className="flex gap-2 mb-8">
            <MapPinLine size={22} className="text-yellow-800" />
            <div className="text-left flex flex-col">
              <span className="leading-snug text-base-subtitle">
                Endere??o de Entrega
              </span>
              <span className="leading-snug text-base-text text-sm">
                Informe o endere??o onde deseja receber seu pedido
              </span>
            </div>
          </div>

          <FormProvider {...paymentForm}>
            <PaymentForm />
          </FormProvider>
        </div>

        <div className="p-10 flex flex-col bg-base-card">
          <div className="flex gap-2 mb-8">
            <CurrencyDollar size={22} className="text-purple-500" />
            <div className="text-left flex flex-col">
              <span className="leading-snug text-base-subtitle">Pagamento</span>
              <span className="leading-snug text-base-text text-sm">
                O pagamento ?? feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </div>

          <SectionPaymentMethod typePay={typePay} onSetTypePay={handleSetTypePay} />
        </div>
      </section>

      <section className="flex flex-col flex-wrap gap-3 rounded-md w-full xl:w-2/4">
        <h1 className="text-lg font-bold leading-snug">Caf??s selecionados</h1>
        <div className="bg-base-card p-10 rounded-tr-3xl rounded-bl-3xl">
          {cart.map((item: ProductProps) => (
            <ProductOnCart key={item.id} {...item} />
          ))}

          <div className="flex flex-col gap-y-3">
            <div className="flex justify-between items-center">
              <strong className="text-sm text-base-text font-normal leading-snug">
                Total de itens
              </strong>
              <strong className="text-base-text font-normal leading-snug">
                R$ {String(total.toFixed(2)).replace(".", ",")}
              </strong>
            </div>

            <div className="flex justify-between items-center">
              <strong className="text-sm text-base-text font-normal leading-snug">
                Entrega
              </strong>
              <strong className="text-base-text font-normal leading-snug">
                R${" "}
                {cart.length === 0
                  ? "0,00"
                  : String((3.5).toFixed(2)).replace(".", ",")}
              </strong>
            </div>

            <div className="flex justify-between items-center">
              <strong className="text-xl text-base-subtitle font-bold leading-snug">
                Total
              </strong>
              <strong className="text-xl text-base-subtitle font-bold leading-snug">
                R${" "}
                {String(
                  cart.length === 0 ? "0,00" : (total + 3.5).toFixed(2)
                ).replace(".", ",")}
              </strong>
            </div>
          </div>

          <button
            type="submit"
            className={classNames(
              "w-full rounded-md bg-yellow-500 py-3 px-2 text-base-white mt-9 flex items-center justify-center",
              {
                "opacity-50 cursor-not-allowed": isSubmitDisabled,
                "opacity-100 hover:bg-yellow-800": !isSubmitDisabled,
              }
            )}
          >
            {!loading ? (
              "CONFIRMAR PEDIDO"
            ) : (
              <Spinner size={23} className="animate-spin" />
            )}
          </button>
        </div>
      </section>
    </form>
  );
}
