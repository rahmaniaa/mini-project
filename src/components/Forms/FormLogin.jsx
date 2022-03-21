import { Formik, Form, Field } from 'formik';
import { Button, Spinner } from 'react-bootstrap';
import * as Yup from 'yup';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Default from '../../layout/Default';
import { scrollToTop } from '../../utility/Scroll';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

export default function FormLogin() {
  scrollToTop();

  const navigate = useNavigate();
  let [reqLoading, setReqLoading] = useState(false);
  useEffect(() => {
    let Token = window.localStorage.getItem('token');
    if (Token) {
      navigate('/');
    }
    // eslint-disable-next-line
  }, []);

  function handleLogin(email, password) {
    axios({
      method: 'post',
      url: `${process.env.REACT_APP_BASE_URL_API}auth/login`,
      data: {
        email: email,
        password: password,
      },
    })
      .then((response) => {
        setReqLoading(false);
        Swal.fire({
          icon: 'success',
          title: 'SUCCESS',
          text: response.data.message,
        });
        // masukin token ke localStorage
        window.localStorage.setItem('token', response.data.result.token);
        // redirect ke dashboard
        navigate('/');
      })
      .catch((error) => {
        setReqLoading(false);
        Swal.fire({
          icon: 'error',
          title: 'ERROR',
          text: error.response.data.message || 'Login failed',
        });
      });
  }

  return (
    <Default>
      {window.localStorage.getItem('token') ? (
        <Spinner animation='border' />
      ) : (
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={LoginSchema}
          onSubmit={(values) => {
            // same shape as initial values
            handleLogin(values.email, values.password);
          }}>
          {({ errors, touched }) => (
            <div className='d-flex justify-content-center align-items-center vh-100'>
              <div className='form-login w-100'>
                <h1 className='mb-5'>Welcome back!</h1>
                <Form className='w-100'>
                  <div className='form-group mb-4'>
                    <Field
                      className='form-control w-100'
                      type='text'
                      placeholder='Email'
                      name='email'
                    />
                    {errors.email && touched.email && (
                      <div className='text-danger'>{errors.email}</div>
                    )}
                  </div>
                  <div className='form-group mb-4'>
                    <Field
                      className='form-control w-100'
                      type='password'
                      placeholder='Password'
                      name='password'
                    />
                    {errors.password && touched.password && (
                      <div className='text-danger'>{errors.password}</div>
                    )}
                  </div>

                  <Button
                    className='mb-4 w-100 rounded button-login'
                    type='submit'>
                    {reqLoading ? <Spinner animation='border' /> : 'Sign In'}
                  </Button>
                  <div className='text-center mb-5'>
                    <a href='/'>Forgot password?</a>
                  </div>
                  <div className='d-grid gap-2'>
                    <button type='button' className='btn btn-outline-primary'>
                      Login with Facebook
                    </button>
                    <button type='button' className='btn btn-outline-primary'>
                      Login with Google
                    </button>
                  </div>
                </Form>
              </div>
            </div>
          )}
        </Formik>
      )}
    </Default>
  );
}
