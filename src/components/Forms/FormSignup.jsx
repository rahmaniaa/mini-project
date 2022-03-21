import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Default from '../../layout/Default';
import { scrollToTop } from '../../utility/Scroll';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(6, 'Should more than 6 characters!')
    .matches(/^\S*$/, 'Should not contain spaces')
    .required('Required'),
  confirmPassword: Yup.string()
    .required('confirm password is a required field')
    .oneOf([Yup.ref('password')], 'Password must match'),
});

const FormSignup = () => {
  scrollToTop();

  const navigate = useNavigate();

  const handleRegister = (firstName, lastName, email, password) => {
    axios({
      method: 'post',
      url: 'https://see-events-teama.herokuapp.com/api/v1/auth/register',
      data: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      },
    })
      .then((response) => {
        Swal.fire({
          icon: 'success',
          title: 'SUCCESS',
          text: response.data.message,
        });
        // masukin token ke localStorage
        localStorage.setItem('token', response.data.result.token);
        // redirect ke dashboard
        navigate('/');
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'ERROR',
          text: error.response.data.message || 'Register failed',
        });
      });
  };

  return (
    <Default>
      <div className='d-flex flex-column align-items-center w-100'>
        <h1 className='mb-3 text-center field-form'>Join Us</h1>
        <Formik
          className='d-flex justify-content-center w-100'
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            // same shape as initial values
            handleRegister(
              values.firstName,
              values.lastName,
              values.email,
              values.password
            );
          }}>
          {({ errors, touched }) => (
            <Form className='row d-flex flex-column align-items-center g-3 w-100'>
              <Field
                className='field-form col-6 form-control'
                name='firstName'
                placeholder='First Name'
              />
              {errors.firstName && touched.firstName && (
                <div className='text-danger field-form m-auto'>
                  {errors.firstName}
                </div>
              )}
              <Field
                className='field-form col-6 form-control'
                name='lastName'
                placeholder='Last Name'
              />
              {errors.lastName && touched.lastName && (
                <div className='text-danger field-form m-auto'>
                  {errors.lastName}
                </div>
              )}
              <Field
                className='field-form col-6 form-control'
                name='email'
                type='email'
                placeholder='Email'
              />
              {errors.email && touched.email && (
                <div className='text-danger field-form m-auto'>
                  {errors.email}
                </div>
              )}
              <Field
                className='field-form col-6 form-control'
                name='password'
                type='password'
                placeholder='Password'
              />
              {errors.password && touched.password && (
                <div className='text-danger field-form m-auto'>
                  {errors.password}
                </div>
              )}
              <Field
                className='field-form form-control'
                name='confirmPassword'
                type='password'
                placeholder='Confirm Password'
              />
              {errors.confirmPassword && touched.confirmPassword && (
                <div className='text-danger field-form m-auto'>
                  {errors.confirmPassword}
                </div>
              )}
              <button className='btn btn-register field-form' type='submit'>
                Sign up
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </Default>
  );
};

export default FormSignup;
