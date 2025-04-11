import clsx from "clsx";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.nav}>
      <h2>Auth</h2>
      <nav>
        <NavLink className={clsx(s.link)} to="/">
          Home
        </NavLink>
        <NavLink className={clsx(s.link)} to="/contacts">
          Contacts
        </NavLink>
        <NavLink className={clsx(s.link)} to="/register">
          Register
        </NavLink>
        <NavLink className={clsx(s.link)} to="/login">
          Login
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
