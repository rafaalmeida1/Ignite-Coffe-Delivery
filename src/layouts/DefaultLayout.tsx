import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export function DefaultLayout() {
  return (
    <div className="flex flex-col bg-base-background max-w-[1440px] px-10 md:px-40 mx-auto">
      <Header />
      <Outlet />
    </div>
  )
}