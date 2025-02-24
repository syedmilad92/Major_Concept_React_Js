import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, FormGroup, Label, Input, FormFeedback } from "reactstrap";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be 50 characters or less")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const FormWithFormik = () => {
  return (
    <Formik
      initialValues={{ name: "", email: "", password: "", confirmPassword: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        console.log("Form Data:", values);
        setSubmitting(false);
        resetForm();
        alert("Form submitted successfully!");
      }}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form className="p-4 border rounded shadow-sm" style={{ maxWidth: "400px", margin: "auto" }}>
          <h3 className="text-center">Signup Form</h3>

          {/* Name Field */}
          <FormGroup>
            <Label for="name">Name</Label>
            <Field
              as={Input}
              type="text"
              name="name"
              id="name"
              invalid={touched.name && !!errors.name}
            />
            <ErrorMessage name="name" component={FormFeedback} />
          </FormGroup>

          {/* Email Field */}
          <FormGroup>
            <Label for="email">Email</Label>
            <Field
              as={Input}
              type="email"
              name="email"
              id="email"
              invalid={touched.email && !!errors.email}
            />
            <ErrorMessage name="email" component={FormFeedback} />
          </FormGroup>

          {/* Password Field */}
          <FormGroup>
            <Label for="password">Password</Label>
            <Field
              as={Input}
              type="password"
              name="password"
              id="password"
              invalid={touched.password && !!errors.password}
            />
            <ErrorMessage name="password" component={FormFeedback} />
          </FormGroup>

          {/* Confirm Password Field */}
          <FormGroup>
            <Label for="confirmPassword">Confirm Password</Label>
            <Field
              as={Input}
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              invalid={touched.confirmPassword && !!errors.confirmPassword}
            />
            <ErrorMessage name="confirmPassword" component={FormFeedback} />
          </FormGroup>

          {/* Submit Button */}
          <Button type="submit" color="primary" block disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default FormWithFormik;
