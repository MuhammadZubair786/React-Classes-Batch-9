import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import { Stepper, Step, StepLabel, Button, TextField } from "@mui/material";

const steps = ["Basic Information", "Education", "Contact"];

export const StepperForm = () => {
  let [activeStep, setActiveStep] = useState(0);
  let [error, setError] = useState("");

  const initalValues = {
    name: "",
    email: "",
    education: "",
    age: "",
    contact: "",
  };

  const validationSchema = [
    Yup.object({
      name: Yup.string().required("Please must enter your name"),
      email: Yup.string()
        .required("please enter email address")
        .email("Please enter correct email address"),
    }),
    Yup.object({
      education: Yup.string().required("please enter your education"),
      age: Yup.number("please enter only number")
        .required()
        .positive()
        .integer(),
    }),
    Yup.object({
      contact: Yup.number("please enter only number").required(),
    }),
  ];

  return (
    <>
      <div style={{ width: "850px", margin: "50px auto" }}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Formik
          initialValues={initalValues}
          validationSchema={validationSchema[activeStep]}
          onSubmit={(value) => {
            console.log(value);
          }}
        >
          {({ validateForm, values }) => (
            <Form style={{ marginTop: "20px" }}>
              {activeStep == 0 && (
                <>
                  <Field
                    as={TextField}
                    label="Name"
                    name="name"
                    margin="normal"
                  ></Field>
                  <br />
                  <b style={{ color: "red" }}> {error && error.name}</b>

                  <br />
                  <Field
                    as={TextField}
                    label="Email"
                    name="email"
                    margin="normal"
                  ></Field>
                  <br />
                  <b style={{ color: "red" }}> {error && error.email}</b>
                </>
              )}
              {activeStep == 1 && (
                <>
                  <Field
                    as={TextField}
                    label="Education"
                    name="education"
                    margin="normal"
                  ></Field>
                  <br />
                  <b style={{ color: "red" }}> {error && error.education}</b>
                  <br />

                  <Field
                    as={TextField}
                    label="age"
                    name="age"
                    margin="normal"
                  ></Field>
                  <br />
                  <b style={{ color: "red" }}> {error && error.age}</b>
                </>
              )}
              {activeStep == 2 && (
                <>
                  <Field
                    as={TextField}
                    label="contact"
                    name="contact"
                    margin="normal"
                  ></Field>
                  <br />
                  <b style={{ color: "red" }}> {error && error.contact}</b>
                </>
              )}
              {activeStep == steps.length - 1 ? (
                <>
                  <br />
                  <Button
                    variant="contained"
                    type="submit"
                    onClick={async () => {
                      const error = await validateForm();
                      console.log(error);

                      setError(error);
                    }}
                  >
                    Submit
                  </Button>
                  <Button
                    variant="contained"
                    onClick={() => setActiveStep(--activeStep)}
                  >
                    Back
                  </Button>
                </>
              ) : null}
              {activeStep == 0 ? (
                <>
                  <br />
                  <Button
                    variant="contained"
                    onClick={async () => {
                      const error = await validateForm();
                      console.log(error);

                      setError(error);
                      if (Object.keys(error).length == 0) {
                        setActiveStep(++activeStep);
                      } else {
                        // alert(Object.values(error)[0]);
                      }
                    }}
                  >
                    Next
                  </Button>
                </>
              ) : activeStep != steps.length - 1 ? (
                <>
                  <br />
                  <Button
                    variant="contained"
                    onClick={() => setActiveStep(--activeStep)}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    onClick={async () => {
                      const error = await validateForm();
                      console.log(error);

                      setError(error);
                      if (Object.keys(error).length == 0) {
                        setActiveStep(++activeStep);
                      } else {
                        // alert(Object.values(error)[0]);
                      }
                    }}
                  >
                    Next
                  </Button>
                </>
              ) : null}
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};
