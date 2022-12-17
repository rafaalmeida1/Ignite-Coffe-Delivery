import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export function DefaultLayout() {
  return (
    <div className="flex flex-col mx-auto w-full 2xl:w-[1440px] px-10 md:px-40 lg:px-20">
      <Header />
      <Outlet />
    </div>
  )
}