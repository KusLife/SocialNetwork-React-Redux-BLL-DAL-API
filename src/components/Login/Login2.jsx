import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import s from './Login.module.css';

export default function Login() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email').required('Required'),
      password: Yup.string()
        .min(8, 'Use not less then 8 caterters')
        .required('Required'),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <form className={s.login} onSubmit={formik.handleSubmit}>
      <h1>Login</h1>
      <div>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <p>{formik.errors.email}</p>
        ) : null}
      </div>
      <div>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.touched.password && formik.errors.password ? (
          <p>{formik.errors.password}</p>
        ) : null}
      </div>
      <div>
        <input
          id="rememberMe"
          name="rememberMe"
          type="checkbox"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.rememberMe}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
