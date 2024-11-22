import { ReadOutlined } from "@ant-design/icons";
import "./index.css";
import { NavLink } from "react-router-dom";
import { Button } from "antd";

function Header() {
  return (
    <div className="header">
      <div className="logo_wrap">
        <ReadOutlined />
        <p>图书馆管理系统</p>
      </div>
      <div className="tabs_wrap">
        <NavLink to={"/"}>首页</NavLink>
        <NavLink to={"/find"}>搜索</NavLink>
        <NavLink to={"/detail"}>详情</NavLink>
        <NavLink to={"/user"}>我的</NavLink>
        <NavLink to={"/manage"}>管理</NavLink>
      </div>
      <div className="actions_wrap">
        <Button type="primary">登录</Button>
      </div>
    </div>
  );
}

export default Header;
