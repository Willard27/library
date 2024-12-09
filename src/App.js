import { Route, Routes } from "react-router-dom";
import "./App.css";
import { routes } from "./route_config";
import Login from "./pages/login";
import Layout from "./components/layout";
import Home from "./pages/home";
import Manage from "./pages/manage";
import Find from "./pages/Find";
import Borrow from "./pages/borrow";
import MySpace from "./pages/user";

function App() {
  return (
    <Routes>
      <Route path={routes.login.path} element={<Login />}></Route>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path={routes.find.path} element={<Find />}></Route>
        <Route path={routes.myspace.path} element={<MySpace />}></Route>
        <Route path={routes.manage.path} element={<Manage />}></Route>
        <Route path={routes.borrow.path} element={<Borrow />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
