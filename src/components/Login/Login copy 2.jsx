import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import * as Yup from 'yup';
import s from './Login.module.css';
// создаем в папке components папку FormValidation, в ней файл LoginFormSchema.js и пишем  :

export default function Login() {
  //   const [firstNameValue, setFirstName] = useState('');
  //   const [secondNameValue, setSecondName] = useState('');
  //   const [emailValue, setEmail] = useState('');
  //   // const setFirstName2 = (firstNameValue2) => firstNameValue2.useState('')
  //   // console.log(firstNameValue);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Plz use not more then 15 caterters')
        .required('Required'),
      lastName: Yup.string()
        .max(20, 'Plz 20 or less caterters')
        .required('Required'),
      email: Yup.string().email('Invalid email')
        .required('Required'),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  // console.log(formik.errors)
  // console.log(formik.values)
  return (
    <form className={s.login} onSubmit={formik.handleSubmit}>
      <div>
        <input
          id="firstName"
          name="firstName"
          type="text"
          placeholder="First name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.touched.firstName && formik.errors.firstName ? <p>{formik.errors.firstName}</p> : null}
      </div>
      <div>
        <input
          id="lastName"
          name="lastName"
          type="text"
          placeholder="Last name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}

          value={formik.values.lastName}
        />
        {formik.touched.lastName && formik.errors.lastName ? <p>{formik.errors.lastName}</p> : null}
      </div>
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
        { formik.touched.email && formik.errors.email ? <p>{formik.errors.email}</p> : null}

      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

// const validateLoginForm = (values) => {
//   const errors = {};
//   if (!values.email || !values.password ) {
//     errors.email = 'Required';
//     errors.password = 'Required';
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
//     errors.email = 'Invalid email address';
//   // } else if (values.password < 4) {
//   //   errors.password = 'Must be longer than 8 characters'
//   }
//   return errors;
// };

// // with such chema method in console no values
// const loginFormSchema = Yup.object().shape({
//   name: Yup.string()
//     //минимальная длина - 2 символа
//     .min(2, 'Must be longer than 2 characters')
//     //максимальная длина - 20 символов
//     .max(20, 'Nice try, nobody has a first name that long')
//     .required('Required'),
//   password: Yup.string()
//     .min(8, 'Must be longer than 8 characters')
//     .required('Required'),
// });

// const Login = () => {
//   return (
//     <div className={s.login}>
//       <h1>Login</h1>
//       <Formik
//         initialValues={{ email: '', password: '', rememberMe: false }}
//         validate={validateLoginForm}
//         // validationSchema={loginFormSchema}
//         // Does't show up in console
//         onSubmit={(values) => {
//           console.log(values);
//         }}
//       >
//         {() => (
//           <Form >
//             <div>
//               <Field type={'text'} name={'email'} placeholder={'e-mail'} />
//             </div>
//             <ErrorMessage name="email" component="div" />

//             <div>
//               <Field
//                 type={'password'}
//                 name={'password'}
//                 placeholder={'password'}
//               />
//             </div>
//             <ErrorMessage name="password" component="div" />

//             <div>
//               <Field type={'checkbox'} name={'rememberMe'} />
//               <label htmlFor={'rememberMe'}> remember me </label>
//             </div>

//             <button type={'submit'}>Log in</button>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default Login;
