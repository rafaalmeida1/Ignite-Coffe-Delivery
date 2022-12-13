import { ShoppingCart } from "phosphor-react";

interface ButtonProps {
  activeButton: "primary" | "secondary";
}

export function ButtonCart({ activeButton }: ButtonProps) {
  return (
    <>
      {activeButton === "secondary" ? (
        <button className="p-2 bg-yellow-300 text-yellow-500 hover:opacity-80 ">
          <ShoppingCart size={19} weight="fill" />
        </button>
      ) : (
        <button className="p-2 bg-purple-800 text-white hover:bg-purple-500">
          <ShoppingCart size={19} weight="fill" />
        </button>
      )}
    </>
  );
}
