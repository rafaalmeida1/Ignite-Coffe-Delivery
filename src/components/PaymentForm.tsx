import { useFormContext } from "react-hook-form";

export function PaymentForm() {
  const { register } = useFormContext()

  return (
    <div className="flex flex-col gap-y-4">
      <input
        id="cep"
        type="number"
        placeholder="CEP"
        className="w-1/3 text-base-text placeholder:text-base-label bg-base-input border border-base-button focus:border-yellow-800 rounded-[4px] p-3 "
        {...register('cep', {valueAsNumber: true})}
      />
      <input
        id="rua"
        type="text"
        placeholder="Rua"
        className="w-full text-base-text placeholder:text-base-label bg-base-input border border-base-button focus:border-yellow-800 rounded-[4px] p-3"
        {...register('rua')}
      />
      <div className="flex gap-3">
        <input
          id="number"
          type="number"
          placeholder="Número"
          className="w-1/3 text-base-text placeholder:text-base-label bg-base-input border border-base-button focus:border-yellow-800 rounded-[4px] p-3"
          {...register('number', {valueAsNumber: true})}
        />
        <input
          id="complemento"
          type="text"
          placeholder="Complemento"
          className="w-2/3 text-base-text flex justify-between placeholder:text-base-label bg-base-input border border-base-button focus:border-yellow-800 rounded-[4px] p-3"
          {...register('complemento')}
        />
      </div>
      <div className="flex gap-3">
        <input
          id="bairro"
          type="text"
          placeholder="Bairro"
          className="w-1/2 text-base-text placeholder:text-base-label bg-base-input border border-base-button focus:border-yellow-800 rounded-[4px] p-3"
          {...register('bairro')}
        />
        <input
          id="cidade"
          type="text"
          placeholder="Cidade"
          className="w-4/5 text-base-text placeholder:text-base-label bg-base-input border border-base-button focus:border-yellow-800 rounded-[4px] p-3"
          {...register('cidade')}
        />
        <input
          id="uf"
          type="text"
          placeholder="UF"
          className="w-1/5 text-base-text placeholder:text-base-label bg-base-input border border-base-button focus:border-yellow-800 rounded-[4px] p-3"
          {...register('uf')}
        />
      </div>
    </div>
  );
}
