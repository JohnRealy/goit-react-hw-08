import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../redux/auth/operations";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
  };

  const navigate = useNavigate();

  const handleSubmit = (values, options) => {
    dispatch(loginThunk(values))
      .unwrap()
      .then(() => navigate("/contacts", { replace: true }))
      .catch(() => toast.error("Invalid data!"));
    options.resetForm();
  };

  return (
    <div className="formWrapper">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className="form">
          <label htmlFor="">
            <span>Email:</span>
            <Field name="email" type="email" />
          </label>
          <label htmlFor="">
            <span>Password:</span>
            <Field name="password" type="password" />
          </label>
          <button type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
