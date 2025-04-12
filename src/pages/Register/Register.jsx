import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/auth/operations";
import { Link } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    name: "",
    password: "",
  };

  const handleSubmit = (values, options) => {
    dispatch(registerThunk(values));
    options.resetForm();
  };

  return (
    <div className="formWrapper">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className="form">
          <label htmlFor="">
            <span>Name:</span>
            <Field name="name" />
          </label>
          <label htmlFor="">
            <span>Email:</span>
            <Field name="email" type="email" />
          </label>
          <label htmlFor="">
            <span>Password:</span>
            <Field name="password" type="password" />
          </label>
          <button type="submit">Register</button>

          <p className="authParagraph">
            Already have account? <Link to="/login">Log In</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default Register;
