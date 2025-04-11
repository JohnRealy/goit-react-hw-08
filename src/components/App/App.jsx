import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import css from "./App.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
  selectContacts,
  selectError,
  selectLoading,
} from "../../redux/contacts/selectors";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Header from "../Header/Header";
import NotFound from "../../pages/NotFound/NotFound";
import Login from "../../pages/Login/Login";
import Contacts from "../../pages/Contacts/Contacts";
import Register from "../../pages/Register/Register";

export default function App() {
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox onChange={setSearchQuery} searchQuery={searchQuery} />
      {loading && <h2>Loading...</h2>}
      {error && <h2>Error {error}</h2>}
      {contacts === null ? <p>This Phonebook is empty</p> : <ContactList />}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
