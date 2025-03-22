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
} from "../../redux/contactsSlice";

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
    </div>
  );
}
