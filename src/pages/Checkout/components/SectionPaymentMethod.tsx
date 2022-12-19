import classNames from "classnames";
import { Bank, CreditCard, Money } from "phosphor-react";

interface SectionPaymentMethodProps {
  typePay:  string;
  onSetTypePay: (paymentMethod: string) => void;
}
 
export function SectionPaymentMethod({typePay, onSetTypePay}: SectionPaymentMethodProps) {
  return (
    <div className="flex gap-3 ">
            <button
              type="button"
              onClick={() => onSetTypePay("credit")}
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
              onClick={() => onSetTypePay("debit")}
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
              onClick={() => onSetTypePay("money")}
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
  )
}