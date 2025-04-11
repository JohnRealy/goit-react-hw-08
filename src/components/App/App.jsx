import css from "./App.module.css";

import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import NotFound from "../../pages/NotFound/NotFound";
import Login from "../../pages/Login/Login";
import Contacts from "../../pages/Contacts/Contacts";
import Register from "../../pages/Register/Register";
import Layout from "../Layout";

export default function App() {
  return (
    <div className={css.container}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
