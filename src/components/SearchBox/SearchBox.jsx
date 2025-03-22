import { Formik, Field } from "formik";
import { useId } from "react";
import css from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const searchId = useId();
  const dispatch = useDispatch();

  const search = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <Formik initialValues={{}}>
      <div className={css.form}>
        <label htmlFor={searchId}>Find contacts by name</label>
        <Field
          type="text"
          name="search"
          className={css.input}
          onChange={search}
        />
      </div>
    </Formik>
  );
}
