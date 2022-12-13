import { Trash } from "phosphor-react";
import coffeImageTest from "../assets/coffe.png";

export function ProductOnCart() {
  return (
    <div className="flex relative pb-8 first:pt-0 pt-8 border-b border-base-button">
      <div className="flex gap-5 items-end">
        <img src={coffeImageTest} alt="" className="w-1/4" />
        <div className="flex flex-col ">
          <strong className="text-base-subtitle font-normal leading-snug">
            Expresso Tradicional
          </strong>
          <div className="flex gap-2">
            <div className="flex gap-1 bg-base-button justify-center items-center p-1 rounded-md">
              <button className="text-purple-500 text-3xl px-2 hover:opacity-80">
                -
              </button>
              <span className="text-base-title font-normal text-base leading-snug text-center">
                1
              </span>
              <button className="text-purple-500 text-2xl px-2 hover:opacity-80">
                +
              </button>
            </div>
            <button className="text-base-text flex gap-1 items-center px-2"><Trash size={16} className="text-purple-500" />Remover</button>
          </div>

          <p className="text-base-text text-base font-bold leading-snug absolute right-0">R$ 9,90</p>
        </div>
      </div>
    </div>
  );
}
