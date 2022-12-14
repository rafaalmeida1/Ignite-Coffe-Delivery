import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export function DefaultLayout() {
  return (
    <div className="flex flex-col w-full px-10 md:px-40">
      <Header />
      <Outlet />
    </div>
  )
}