import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Layout from "./components/layout";
import Home from "./pages/home";
import Find from "./pages/find";
import Profile from "./pages/profile";
import Books from "./pages/books";
import Users from "./pages/users";
import { routes } from "./routers";

function App() {
  return (
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
  );
}

export default App;
