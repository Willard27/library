import { Outlet } from "react-router-dom";
import Menu from "./menu";
import Header from "./header";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMenu } from "../store/slices/menu";

function Layout() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMenu());
  });
  return (
    <div className="flex h-screen w-screen flex-col items-center bg-slate-100">
      <div className="h-16 w-full bg-white">
        <Header />
      </div>
      <div className="m-3 flex size-4/5 flex-1 flex-col bg-white">
        <div className="menu_wrap">
          <Menu />
        </div>
        <div className="flex-1 p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
