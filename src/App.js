import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Login from "./pages/login";
import Layout from "./components/layout";
import Home from "./pages/home";
import Find from "./pages/find";
import Profile from "./pages/profile";
import Books from "./pages/books";
import Users from "./pages/users";
import { router } from "./routers";
import { useEffect } from "react";
import ee from "./utils/event";
import { message } from "antd";
import Records from "./pages/records";

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
          element={<Navigate to={router.login.path}></Navigate>}
        ></Route>
        <Route path={router.login.path} element={<Login />}></Route>
        <Route element={<Layout />}>
          <Route path={router.home.path} element={<Home />}></Route>
          <Route path={router.find.path} element={<Find />}></Route>
          <Route path={router.books.path} element={<Books />}></Route>
          <Route path={router.users.path} element={<Users />}></Route>
          <Route path={router.records.path} element={<Records />}></Route>
          <Route path={router.profile.path} element={<Profile />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
