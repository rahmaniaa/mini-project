import React from 'react';
import { useFormik } from 'formik';
import { useState } from 'react';
import passwordStrength from 'zxcvbn';
import axios from 'axios';
import classNames from 'classnames';
import { FiEyeOff, FiEye } from 'react-icons/fi';
import Default from '../../layout/Default';
import { scrollToTop } from '../../utility/Scroll';
import { Navigate } from 'react-router-dom';

const labelStrenght = {
  0: 'Worst',
  1: 'Bad',
  2: 'Weak',
  3: 'Good',
  4: 'Strong',
};
const InputPassword = ({ formik, name, placeholder }) => {
  const [showpass, setShowpass] = useState(false);
  const toggleBtn = () => {
    setShowpass((prevState) => !prevState);
  };

  return (
    <div className='mb-3 position-relative'>
      <input
        // id='password'
        name={name}
        type={showpass ? 'text' : 'password'}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[name]}
        className='form-control'
        placeholder={placeholder}
      />
      <button className='btn-ai' onClick={toggleBtn}>
        {showpass ? <FiEye /> : <FiEyeOff />}
      </button>
    </div>
  );
};

const FormSignup = () => {
  scrollToTop();

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
      .then((res) => {
        alert('register succes');
        console.log(res);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
        console.log(error.data);
      });
    Navigate('/');
  };

  const validate = (values) => {
    const strength = passwordStrength(values.password);
    const errors = {};
    if (!values.firstName) {
      errors.firstName = 'Required';
    } else if (values.firstName.length > 15) {
      errors.firstName = 'Must be 15 character or less';
    }

    if (!values.lastName) {
      errors.lastName = 'Required';
    } else if (values.lastName.length > 20) {
      errors.lastName = 'Must be 20 character or less';
    }

    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid Email Address';
    }

    if (strength.score <= 4) {
      errors.password = strength.feedback.suggestions;
    }

    if (values.password !== values.confirmPassword) {
      errors.confirmPassword = 'password must macth';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },

    validate,
    onSubmit: (values) => {
      handleRegister(
        values.firstName,
        values.lastName,
        values.email,
        values.password
      );
    },
  });

  const { score, feedback } = passwordStrength(formik.values.password);

  const hintClass = classNames({
    'strength-hint': true,
    [`${labelStrenght[score].toLowerCase()}`]: labelStrenght[score],
  });

  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  // console.log(validate);
  // console.log(formik);
  return (
    <Default>
      <div className=' d-flex flex-column justify-content-center align-items-center w-100 '>
        <div className='formCostum w-50'>
          <h1 className='text-center mb-3'> Join Us!</h1>

          <form onSubmit={formik.handleSubmit}>
            <div className='mb-3'>
              <input
                id='firstName'
                name='firstName'
                type='text'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
                className='form-control '
                placeholder='First Name'
              />

              {formik.touched.firstName && formik.errors.firstName ? (
                <div className='text-danger text-start'>
                  {formik.errors.firstName}
                </div>
              ) : null}
            </div>

            <div className='mb-3'>
              <input
                id='lastName'
                name='lastName'
                type='text'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
                className='form-control'
                placeholder='Last Name'
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <div className='text-danger text-start'>
                  {formik.errors.lastName}
                </div>
              ) : null}
            </div>

            <div className='mb-3'>
              <input
                id='email'
                name='email'
                type='email'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className='form-control'
                placeholder='Email'
              />
              <div className='text-danger text-start'>
                {formik.touched.email && formik.errors.email ? (
                  <div>{formik.errors.email}</div>
                ) : null}
              </div>
            </div>
            <InputPassword
              formik={formik}
              name='password'
              placeholder='password'
            />
            <div className='text-danger text-start'>
              {formik.touched.password && formik.errors.password && (
                <div className={hintClass}>
                  Password strength: <strong>{labelStrenght[score]}</strong>
                  <ul className='strength-hint__suggestions'>
                    {feedback.suggestions.map((suggestion, i) => {
                      return <li key={i}>{suggestion}</li>;
                    })}
                  </ul>
                  <ul className='strength-bar'>
                    <li className='strength-bar__item'></li>
                    <li className='strength-bar__item'></li>
                    <li className='strength-bar__item'></li>
                    <li className='strength-bar__item'></li>
                    <li className='strength-bar__item'></li>
                  </ul>
                </div>
              )}

              <InputPassword
                formik={formik}
                id='confirmPassword'
                name='confirmPassword'
                placeholder='Confirm Password'
              />
              {formik.errors.password && (
                <p className='error'>{formik.errors.password.message}</p>
              )}
            </div>

            <div className='text-danger text-start'>
              {formik.touched.confirmPassword &&
              formik.errors.confirmPassword ? (
                <div>{formik.errors.confirmPassword}</div>
              ) : null}
            </div>

            <div className='d-grid gap-2'>
              <button className='btn btn-register' type='submit'>
                {' '}
                Register
              </button>
              {/* <input type="button" value="Register" /> */}
            </div>
          </form>
        </div>
      </div>
    </Default>
  );
};

export default FormSignup;
