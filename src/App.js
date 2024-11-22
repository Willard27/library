import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/login";
import Layout from "./components/layout";
import Home from "./pages/home";
import Detail from "./pages/detail";
import User from "./pages/user";
import Manage from "./pages/manage";
import Find from "./pages/Find";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/find" element={<Find />}></Route>
        <Route path="/detail" element={<Detail />}></Route>
        <Route path="/user" element={<User />}></Route>
        <Route path="/manage" element={<Manage />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
