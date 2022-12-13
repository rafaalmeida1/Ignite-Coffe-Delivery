import classNames from "classnames";
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import { useState } from "react";
import { ProductOnCart } from "../components/ProductOnCart";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import * as zod from "zod";
import { PaymentForm } from "../components/PaymentForm";

const paymentFormValidationSchema = zod.object({
  cep: zod.number(),
  rua: zod.string(),
  number: zod.number(),
  complemento: zod.string().optional(),
  bairro: zod.string(),
  cidade: zod.string(),
  uf: zod.string(),
});

interface PaymentFormSchema {
  cep: number;
  rua: string;
  number: number;
  complemento?: string;
  bairro: string;
  cidade: string;
  uf: string;
}

type PaymentFormData = zod.infer<typeof paymentFormValidationSchema>;

export function Checkout() {
  const [typePay, setTypePay] = useState("");

  const paymentForm = useForm<PaymentFormData>({
    resolver: zodResolver(paymentFormValidationSchema),
  });

  const { handleSubmit, watch, reset } = paymentForm;
  function handleCreatePaymentForm(data: PaymentFormData) {
    console.log(data, typePay);

    reset();
  }

  const firstInputInForm = watch(
    "cep" && "rua" && "number" && "bairro" && "cidade" && "uf"
  );
  const isSubmitDisabled = !firstInputInForm;

  return (
    <form
      className="mt-2 flex flex-col xl:flex-row items-center xl:items-start gap-8"
      onSubmit={handleSubmit(handleCreatePaymentForm)}
    >
      <section className="flex flex-col flex-wrap gap-3 rounded-md  w-full xl:w-3/4">
        <h1 className="text-lg font-bold leading-snug">Complete seu pedido</h1>
        <div className="p-10 flex flex-col bg-base-card">
          <div className="flex gap-2 mb-8">
            <MapPinLine size={22} className="text-yellow-800" />
            <div className="text-left flex flex-col">
              <span className="leading-snug text-base-subtitle">
                Endereço de Entrega
              </span>
              <span className="leading-snug text-base-text text-sm">
                Informe o endereço onde deseja receber seu pedido
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
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </div>

          <div className="flex gap-3 ">
            <button
              type="button"
              onClick={() => setTypePay("credit")}
              className={classNames(
                "w-1/3 flex items-center p-4 gap-3 border hover:bg-base-hover rounded-md text-sm text-base-text hover:text-base-subtitle leading-relaxed",
                {
                  "bg-purple-300 border-purple-500": typePay === "credit",
                  "bg-base-button": typePay !== "credit",
                }
              )}
            >
              <CreditCard size={16} className="text-purple-500" />
              Cartão de Crédito
            </button>
            <button
              type="button"
              onClick={() => setTypePay("debit")}
              className={classNames(
                "w-1/3 flex items-center p-4 gap-3 border hover:bg-base-hover rounded-md text-sm text-base-text hover:text-base-subtitle leading-relaxed",
                {
                  "bg-purple-300 border-purple-500": typePay === "debit",
                  "bg-base-button": typePay !== "debit",
                }
              )}
            >
              <Bank size={16} className="text-purple-500" />
              Cartão de Débito
            </button>
            <button
              type="button"
              onClick={() => setTypePay("money")}
              className={classNames(
                "w-1/3 flex items-center p-4 gap-3 border hover:bg-base-hover rounded-md text-sm text-base-text hover:text-base-subtitle leading-relaxed",
                {
                  "bg-purple-300 border-purple-500": typePay === "money",
                  "bg-base-button": typePay !== "money",
                }
              )}
            >
              <Money size={16} className="text-purple-500" />
              Dinheiro
            </button>
          </div>
        </div>
      </section>

      <section className="flex flex-col flex-wrap gap-3 rounded-md w-full xl:w-2/4">
        <h1 className="text-lg font-bold leading-snug">Cafés selecionados</h1>
        <div className="bg-base-card p-10 rounded-tr-3xl rounded-bl-3xl">
          <ProductOnCart />
          <ProductOnCart />

          <div className="flex flex-col gap-y-3">
            <div className="flex justify-between items-center">
              <strong className="text-sm text-base-text font-normal leading-snug">
                Total de itens
              </strong>
              <strong className="text-base-text font-normal leading-snug">
                R$ 29,70
              </strong>
            </div>

            <div className="flex justify-between items-center">
              <strong className="text-sm text-base-text font-normal leading-snug">
                Entrega
              </strong>
              <strong className="text-base-text font-normal leading-snug">
                R$ 3,50
              </strong>
            </div>

            <div className="flex justify-between items-center">
              <strong className="text-xl text-base-subtitle font-bold leading-snug">
                Total
              </strong>
              <strong className="text-xl text-base-subtitle font-bold leading-snug">
                R$ 33,20
              </strong>
            </div>
          </div>

          <button
            type="submit"
            className={classNames(
              "w-full rounded-md bg-yellow-500 py-3 px-2 text-base-white mt-9",
              {
                "opacity-50 cursor-not-allowed": isSubmitDisabled,
                "opacity-100 hover:bg-yellow-800": !isSubmitDisabled,
              }
            )}
          >
            CONFIRMAR PEDIDO
          </button>
        </div>
      </section>
    </form>
  );
}
