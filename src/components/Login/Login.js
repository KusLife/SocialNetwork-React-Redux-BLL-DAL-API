import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import s from './Login.module.css';
import { loginThunk } from '../../redux/auth-reducer';
import { connect } from "react-redux";
import { Navigate } from 'react-router-dom';

const loginFormSchema = Yup.object({
  email: Yup.string().email('Invalid e-mail').required('Required'),
  password: Yup.string().min(8, 'Must be longer than 8 characters').required('Required'),
});

const Login = (props) => {

  if (props.isAuth) return <Navigate to='/profile' />
  
  return (
    <div className={s.login}>
      <h1>Log in</h1>
      <Formik
        initialValues={{ email: '', password: '', rememberMe: false , messages: null}}
        validationSchema={loginFormSchema}
       
        onSubmit={(values) => {
          props.loginThunk(values.email, values.password, values.rememberMe);
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
            <p>{props.messageError}</p>
          </Form>
        )}
      </Formik>
    </div>
  );
};
let mapStateToProps = (state) => {
  return{
    messageError: state.auth.messageError,
    isAuth : state.auth.isAuth
}}
export default connect(mapStateToProps, {loginThunk}) (Login);
