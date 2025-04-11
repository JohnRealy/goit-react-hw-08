import { useState } from "react";
import { useSelector } from "react-redux";
import {
  selectContacts,
  selectError,
  selectLoading,
} from "../../redux/contacts/selectors";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";

const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox onChange={setSearchQuery} searchQuery={searchQuery} />
      {loading && <h2>Loading...</h2>}
      {error && <h2>Error {error}</h2>}
      {contacts === null ? <p>This Phonebook is empty</p> : <ContactList />}
    </div>
  );
};

export default Contacts;
