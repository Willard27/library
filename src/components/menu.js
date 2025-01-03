import { useLocation, useNavigate } from "react-router-dom";
import { Tabs } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  selectActiveKey,
  selectMenu,
  setActiveKey,
} from "../store/slices/menu";
import { useEffect } from "react";
import { router } from "../routers";

function Menu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const menu = useSelector(selectMenu);
  const activeKey = useSelector(selectActiveKey);

  const menuKey = location.split("/")[1];

  // 响应式菜单
  const onChange = (activeKey) => {
    navigate(router[activeKey].path);
    dispatch(setActiveKey(activeKey));
  };

  useEffect(() => {
    dispatch(setActiveKey(menuKey));
  });

  return (
    <div>
      <Tabs
        size="large"
        activeKey={activeKey}
        onChange={onChange}
        centered
        items={menu}
      />
    </div>
  );
}

export default Menu;
