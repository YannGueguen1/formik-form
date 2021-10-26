import React from "react";
import { useFormik } from "formik";
import { Formik, Field, Form } from "formik";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function App() {
  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async (values) => {
      await sleep(1000);
      console.log("form :", values);
      if (values.username.match(mailformat) && values.password) {
        alert(
          "Login Successful for:\n\n" +
            "Username: " +
            JSON.stringify(values.username, null, 2) +
            "\n" +
            "Password: " +
            JSON.stringify(values.password, null, 2)
        );
      }
    },
    validate: (values) => {
      let errors = {};
      if (!values.username) {
        errors.username = "Field required";
      } else if (!values.username.match(mailformat)) {
        errors.username = "Username should be an email";
      }
      if (!values.password) errors.password = "Field required";
      // if (values.username.match(mailformat) && values.password)
      //   alert("Login Successful");
      return errors;
    },
  });

  return (
    <div>
      
      
      <Card style={{ width: "30rem", borderWidth:"5px" }}>
        <Card.Body>
        <Card.Title><h1>Build a Formik Form</h1></Card.Title>
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
          <Button id="submitBtn" type="submit" variant="outline-dark">
            Submit
          </Button>
        </p>
      </form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
