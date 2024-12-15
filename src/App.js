import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Login from "./pages/login";
import Layout from "./components/layout";
import Home from "./pages/home";
import Find from "./pages/find";
import Profile from "./pages/profile";
import Books from "./pages/books";
import Users from "./pages/users";
import { routes } from "./routers";
import { useEffect } from "react";
import ee from "./utils/event";
import { message } from "antd";

function App() {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    ee.on("ERRLOGIN", () => {
      navigate("/login");
    });
    ee.on("ERROR", (msg) => {
      messageApi.error({
        content: msg,
      });
    });
  });

  return (
    <div>
      {contextHolder}
      <Routes>
        <Route
          path="/"
          element={<Navigate to={routes.login.path}></Navigate>}
        ></Route>
        <Route path={routes.login.path} element={<Login />}></Route>
        <Route element={<Layout />}>
          <Route path={routes.home.path} element={<Home />}></Route>
          <Route path={routes.find.path} element={<Find />}></Route>
          <Route path={routes.books.path} element={<Books />}></Route>
          <Route path={routes.users.path} element={<Users />}></Route>
          <Route path={routes.profile.path} element={<Profile />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
