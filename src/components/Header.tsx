import { MapPin, ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";
import logoImg from "../assets/Logo.svg";
import { ButtonCart } from "./ButtonCart";

export function Header() {
  return (
    <nav className="flex justify-between items-center py-8">
      <Link to="/">
        <img src={logoImg} alt="" />
      </Link>
      <div className="flex gap-2">
        <button className="flex justify-center items-center p-2 gap-1 w-[143px] h-9 bg-purple-300 hover:opacity-80 ">
          <MapPin size={22} weight="fill" className="text-purple-500" />
          <span className="text-purple-800 text-sm">Campinas, SP</span>
        </button>

        <Link to="/checkout">
          <ButtonCart activeButton="secondary" />
        </Link>
      </div>
    </nav>
  );
}
