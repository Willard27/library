import { ReadOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Popover } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const url = "";

  const content = (
    <div className="grid grid-cols-1 gap-1">
      <Button onClick={() => {}}>个人空间</Button>
      <Button
        onClick={async () => {
          const res = await axios.post("/user/logout");
          if (res.data.code === 0) {
            navigate("/login");
          }
        }}
      >
        退出登录
      </Button>
    </div>
  );

  return (
    <div className="flex h-16 items-center justify-around bg-white">
      <div className="flex justify-around">
        <ReadOutlined className="text-lg" />
        <div className="font-serif text-2xl font-bold">图书馆管理系统</div>
      </div>

      <div className="actions_wrap">
        <Popover placement="bottom" content={content}>
          {url ? (
            <Avatar src={<img src={url} alt="avatar" />} />
          ) : (
            <Avatar shape="square" icon={<UserOutlined />} />
          )}
        </Popover>
      </div>
    </div>
  );
}

export default Header;
