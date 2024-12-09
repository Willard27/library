import { NavLink } from "react-router-dom";
import { routes } from "../route_config";

function Menu(params) {
  return (
    <div>
      <div className="tabs_wrap">
        <NavLink to={"/"}>首页</NavLink>
        <NavLink to={routes.find.path}>搜索</NavLink>
        <NavLink to={routes.borrow.path}>借阅</NavLink>
        <NavLink to={routes.manage.path}>管理</NavLink>
        <NavLink to={routes.myspace.path}>我的</NavLink>
      </div>
    </div>
  );
}

export default Menu;
