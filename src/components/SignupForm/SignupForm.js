import React, { useState } from "react";
import axios from "axios";
import { Button, Image, Text } from "rebass";
import { Flex, Box } from "reflexbox";
import { Label } from "@rebass/forms";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Loader from "react-spinners/ClipLoader";

import Input from "../Input";
import validate from "./validation";

export const Message = ({ message }) => {
  return <Box py={3}>{message}</Box>;
};

export default () => {
  const [message, setMessage] = useState("");

  const handleSubmit = async (values, actions) => {
    setMessage("");
    try {
      const response = await axios.post(
        "https://32f2jzoot4.execute-api.us-east-1.amazonaws.com/default/fe-takehome-api",
        values,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        setMessage("Form submitted successfully!");
      }
    } catch (e) {
      const errorMessage = e && e.data && e.data.message;
      if (e.status === 500) {
        setMessage(errorMessage);
      }
      actions.setFieldError("email", errorMessage);
    }
    actions.setSubmitting(false);
  };

  return (
    <Flex flexWrap="wrap">
      <Box width={[1, 1 / 2]} p={3}>
        <Image src={"https://via.placeholder.com/600"} />
      </Box>
      <Box width={[1, 1 / 2]} p={3}>
        <Formik
          initialValues={{
            email: "fdas@kk.com",
            password: "password123!",
            passwordConfirm: "password123!",
            name: "Brian",
            weight: 50,
            idealWeight: 50,
          }}
          onSubmit={handleSubmit}
          validate={validate}
        >
          {({ isSubmitting }) => (
            <Box sx={{ position: "relative" }}>
              {isSubmitting && (
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <Loader size={150} color={"#123abc"} />
                </Box>
              )}
              <Box
                sx={{
                  opacity: isSubmitting ? 0.3 : 1,
                }}
              >
                <Form>
                  <Box py={2}>
                    <Label htmlFor="email">Email</Label>
                    <Field type="email" name="email" component={Input} />
                    <ErrorMessage name="email" color="red" component={Text} />
                  </Box>
                  <Box py={2}>
                    <Label htmlFor="password">Password</Label>
                    <Field name="password" type="password" component={Input} />
                    <ErrorMessage
                      name="password"
                      color="red"
                      component={Text}
                    />
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
                    <ErrorMessage
                      name="idealWeight"
                      color="red"
                      component={Text}
                    />
                  </Box>
                  <Box sx={{ textAlign: "center" }} py={2}>
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </Box>
                </Form>
              </Box>
            </Box>
          )}
        </Formik>
        <Message message={message} />
      </Box>
    </Flex>
  );
};
