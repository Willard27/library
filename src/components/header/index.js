import { ReadOutlined } from "@ant-design/icons";
import "./index.css";
import { Button } from "antd";

function Header() {
  return (
    <div className="header">
      <div className="logo_wrap">
        <ReadOutlined />
        <p>图书馆管理系统</p>
      </div>

      <div className="actions_wrap">
        <Button type="primary">登录</Button>
      </div>
    </div>
  );
}

export default Header;
