import classNames from "classnames";
import { CaretCircleUp } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";

export function ButtonScroll() {
  const [isVisible, setIsVisible] = useState(false);
  const { cart } = useContext(CartContext);

  const toggleVisibility = () => {
    if (window.pageYOffset > 150) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-[2rem] right-[2rem]">
      <button
        onClick={scrollToTop}
        className={classNames(
          isVisible ? "opacity-100" : "opacity-0",
          "transition-opacity"
        )}
      >
        <CaretCircleUp size={34} className="text-yellow-800" />
        {cart.length === 0 ? null : (
          <span className="flex items-center justify-center w-5 h-5 rounded-full bg-yellow-800 text-base-white text-xs font-bold absolute right-[-8.35px] top-[-8px]">
            {cart.length}
          </span>
        )}
      </button>
    </div>
  );
}
