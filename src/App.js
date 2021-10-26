import React from "react";
import { useFormik } from "formik";

function App() {
  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log("form :", values);
    },
    validate: (values) => {
      let errors = {};
      if (!values.username) {
        errors.username = "Field required";
      } else if (!values.username.match(mailformat)) {
        errors.username = "Username should be an email";
      }
      if (!values.password) errors.password = "Field required";
      if (values.username.match(mailformat) && values.password)
        alert("Login Successful");
      return errors;
    },
  });

  return (
    <div>
      <h1>Build a Formik Form</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>Username (email)</div>
        <input
          name="username"
          type="text"
          id="emailField"
          onChange={formik.handleChange}
          value={formik.values.username}
        />
        {formik.errors.username ? (
          <div id="emailError" style={{ color: "red" }}>
            {formik.errors.username}
          </div>
        ) : null}
        <div>Password</div>
        <input
          name="password"
          type="text"
          id="pswField"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password ? (
          <div id="pswError" style={{ color: "red" }}>
            {formik.errors.password}
          </div>
        ) : null}
        <p>
        <button id="submitBtn" type="submit">
          Submit
        </button>
        </p>
      </form>
    </div>
  );
}

export default App;
