import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";
import {
  selectContacts,
  selectFilteredContacts,
} from "../../redux/contactsSlice";

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filteredData = useSelector(selectFilteredContacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <ul className={css.list}>
      {contacts.length > 0 ? (
        filteredData.map((user) => (
          <li key={user.id} className={css.listItem}>
            <Contact user={user} />
          </li>
        ))
      ) : (
        <p>No contacts available</p>
      )}
    </ul>
  );
}
