import { Outlet } from "react-router-dom";
import Menu from "./menu";
import Header from "./header";

function Layout() {
  return (
    <div className="layout">
      <div className="header_wrap">
        <Header />
      </div>
      <div className="content_wrap">
        <div className="menu_wrap">
          <Menu />
        </div>
        <div className="outlet_wrap">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
