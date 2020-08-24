import React, { useState } from "react";
import axios from "axios";
import { Button, Image, Text } from "rebass";
import { Flex, Box } from "reflexbox";
import { Label } from "@rebass/forms";
import Input from "../Input";
import { Formik, Field, Form, ErrorMessage } from "formik";
import validate from "./validation";

const handleSubmit = async (data) => {
  try {
    const response = await axios.post(
      "https://32f2jzoot4.execute-api.us-east-1.amazonaws.com/default/fe-takehome-api",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch ({ response }) {
    throw response;
  }
};

const ServerErrorMessage = ({ error }) => {
  return (
    <Box py={3} color="red">
      {error}
    </Box>
  );
};

export default () => {
  const [error, setError] = useState("");
  return (
    <Flex flexWrap="wrap">
      <Box width={[1, 1 / 2]} p={3}>
        <Image src={"https://via.placeholder.com/600"} />
      </Box>
      <Box width={[1, 1 / 2]} p={3}>
        <Formik
          initialValues={{
            email: "fdas@example.com",
            password: "password123!",
            passwordConfirm: "password123!",
            name: "Brian",
            weight: 50,
            idealWeight: 50,
          }}
          onSubmit={async (values, actions) => {
            try {
              setError("");
              await handleSubmit(values);
            } catch (e) {
              const errorMessage = e && e.data && e.data.message;
              if (e.status === 500) {
                setError(errorMessage);
              }
              actions.setFieldError("email", errorMessage);
            }
            actions.setSubmitting(false);
          }}
          validate={validate}
        >
          {({ isValid }) => (
            <Form>
              <Box py={2}>
                <Label htmlFor="email">Email</Label>
                <Field type="email" name="email" component={Input} />
                <ErrorMessage name="email" color="red" component={Text} />
              </Box>
              <Box py={2}>
                <Label htmlFor="password">Password</Label>
                <Field name="password" type="password" component={Input} />
                <ErrorMessage name="password" color="red" component={Text} />
              </Box>
              <Box py={2}>
                <Label htmlFor="passwordConfirm">Confirm Password</Label>
                <Field
                  name="passwordConfirm"
                  type="password"
                  component={Input}
                />
                <ErrorMessage
                  name="passwordConfirm"
                  color="red"
                  component={Text}
                />
              </Box>
              <Box py={2}>
                <Label htmlFor="name">Name</Label>
                <Field name="name" component={Input} />
                <ErrorMessage name="name" color="red" component={Text} />
              </Box>
              <Box py={2}>
                <Label htmlFor="weight">Weight</Label>
                <Field name="weight" type="number" component={Input} />
                <ErrorMessage name="weight" color="red" component={Text} />
              </Box>
              <Box py={2}>
                <Label htmlFor="idealWeight">Ideal Weight</Label>
                <Field name="idealWeight" type="number" component={Input} />
                <ErrorMessage name="idealWeight" color="red" component={Text} />
              </Box>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          )}
        </Formik>
        <ServerErrorMessage error={error} />
      </Box>
    </Flex>
  );
};
