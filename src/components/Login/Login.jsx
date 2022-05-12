import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import s from './Login.module.css';

const loginFormSchema = Yup.object().shape({
  email: Yup.string().email('Invalid e-mail').required('Required'),
  password: Yup.string().min(8, 'Must be longer than 8 characters').required('Required'),
});

const Login = () => {
  return (
    <div className={s.login}>
      <h1>Login</h1>
      <Formik
        initialValues={{ email: '', password: '', rememberMe: false }}
        validationSchema={loginFormSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {() => (
          <Form>
            <div>
              <Field type='email' name='email' placeholder='e-mail' />
              <ErrorMessage name='email' component='p' />
            </div>
            <div>
              <Field type='password' name='password' placeholder='password' />
              <ErrorMessage name='password' component='p' />
            </div>
            <div>
              <Field type='checkbox' name='rememberMe' />
              <label htmlFor='rememberMe'>remember me</label>
            </div>
            <button type='submit'>Log in</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
