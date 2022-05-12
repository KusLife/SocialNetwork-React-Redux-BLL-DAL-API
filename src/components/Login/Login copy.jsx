import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import s from './Login.module.css';
// создаем в папке components папку FormValidation, в ней файл LoginFormSchema.js и пишем  :

const validateLoginForm = (values) => {
  const errors = {};
  if (!values.email || !values.password) {
    errors.email = 'Required';
    errors.password = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
    // } else if (values.password < 4) {
    //   errors.password = 'Must be longer than 8 characters'
  }
  return errors;
};

// with such chema method in console no values
const loginFormSchema = Yup.object().shape({
  name: Yup.string()
    //минимальная длина - 2 символа
    .min(2, 'Must be longer than 2 characters')
    //максимальная длина - 20 символов
    .max(20, 'Nice try, nobody has a first name that long')
    .required('Required'),
  password: Yup.string()
    .min(8, 'Must be longer than 8 characters')
    .required('Required'),
});

const Login = () => {
  return (
    <div className={s.login}>
      <h1>Login</h1>
      <Formik
        initialValues={{ email: '', password: '', rememberMe: false }}
        validate={validateLoginForm}
        // validationSchema={loginFormSchema}
        // Does't show up in console
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {() => (
          <Form>
            <div>
              <Field type={'text'} name={'email'} placeholder={'e-mail'} />
            </div>
            <ErrorMessage name="email" component="div" />

            <div>
              <Field
                type={'password'}
                name={'password'}
                placeholder={'password'}
              />
            </div>
            <ErrorMessage name="password" component="div" />

            <div>
              <Field type={'checkbox'} name={'rememberMe'} />
              <label htmlFor={'rememberMe'}> remember me </label>
            </div>

            <button type={'submit'}>Log in</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
