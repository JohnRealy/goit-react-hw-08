import { HiOutlineUser, HiOutlinePhone } from "react-icons/hi";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

export default function Contact({ user }) {
  const dispatch = useDispatch();
  return (
    <>
      <div className={css.listInfo}>
        <div className={css.listWrap}>
          <HiOutlineUser />
          <p>{user.name}</p>
        </div>
        <div className={css.listWrap}>
          <HiOutlinePhone />
          <p>{user.number}</p>
        </div>
      </div>
      <button
        type="button"
        className={css.btn}
        onClick={() => dispatch(deleteContact(user.id))}
      >
        Delete
      </button>
    </>
  );
}
