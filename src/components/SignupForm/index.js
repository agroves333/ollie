import React, { useState } from 'react'
import axios from 'axios'
import get from 'lodash/get'
import { Button, Image, Text } from 'rebass'
import { Flex, Box } from 'reflexbox'
import { Label } from '@rebass/forms'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import Input from '../Input'
import Spinner from '../Spinner'
import Message from '../Message'
import validate from './validation'

export default () => {
  const [message, setMessage] = useState({
    text: '',
    color: 'black',
  })

  const handleSubmit = async (values, actions) => {
    setMessage({
      text: '',
      type: 'info',
    })
    try {
      const response = await axios.post(
        'https://32f2jzoot4.execute-api.us-east-1.amazonaws.com/default/fe-takehome-api',
        values,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      if (response.status === 200) {
        setMessage({
          text: 'Form submitted successfully!',
          type: 'success',
        })
      }
    } catch (e) {
      const status = get(e, 'response.status')
      if (status === 500) {
        setMessage({
          text:
            'There has been an error processing your request. Please try again.',
          type: 'error',
        })
      } else if (status === 400) {
        const errorMessage = get(e, 'response.data.message', '')
        actions.setFieldError('email', errorMessage)
      }
    }
    actions.setSubmitting(false)
  }

  return (
    <Flex flexWrap="wrap">
      <Box width={[1, 1 / 2]} p={3}>
        <Image src={'https://via.placeholder.com/600'} />
      </Box>
      <Box width={[1, 1 / 2]} p={3}>
        <Formik
          initialValues={{
            email: 'fdas@kk.com',
            password: 'password123!',
            passwordConfirm: 'password123!',
            name: 'Brian',
            weight: 50,
            idealWeight: 50,
          }}
          onSubmit={handleSubmit}
          validate={validate}
        >
          {({ isSubmitting }) => (
            <Box sx={{ position: 'relative' }}>
              {isSubmitting && <Spinner />}
              <Box
                sx={{
                  opacity: isSubmitting ? 0.3 : 1,
                }}
              >
                <Form>
                  <Box py={2}>
                    <Label htmlFor="email">Email</Label>
                    <Field
                      type="email"
                      name="email"
                      component={Input}
                      aria-required="true"
                    />
                    <ErrorMessage name="email" color="red" component={Text} />
                  </Box>
                  <Box py={2}>
                    <Label htmlFor="password">Password</Label>
                    <Field
                      name="password"
                      type="password"
                      component={Input}
                      aria-required="true"
                    />
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
                      aria-required="true"
                    />
                    <ErrorMessage
                      name="passwordConfirm"
                      color="red"
                      component={Text}
                    />
                  </Box>
                  <Box py={2}>
                    <Label htmlFor="name">Name</Label>
                    <Field name="name" component={Input} aria-required="true" />
                    <ErrorMessage name="name" color="red" component={Text} />
                  </Box>
                  <Box py={2}>
                    <Label htmlFor="weight">Weight</Label>
                    <Field
                      name="weight"
                      type="number"
                      component={Input}
                      aria-required="true"
                    />
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
                  <Box sx={{ textAlign: 'center' }} py={2}>
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
  )
}
