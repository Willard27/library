import { NavLink } from "react-router-dom";

function Menu(params) {
  return (
    <div>
      <div className="tabs_wrap">
        <NavLink to={"/"}>首页</NavLink>
        <NavLink to={"/find"}>搜索</NavLink>
        <NavLink to={"/detail"}>详情</NavLink>
        <NavLink to={"/user"}>我的</NavLink>
        <NavLink to={"/manage"}>管理</NavLink>
      </div>
    </div>
  );
}

export default Menu;
