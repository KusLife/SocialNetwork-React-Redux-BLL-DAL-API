import React from 'react';
import { Msgs } from './Msgs/Msgs';
import s from './MyMsgs.module.css';
import { Respons } from './Msgs/Respons/Respons';
import { Navigate } from 'react-router-dom';
import { Field, Form, Formik } from 'formik';

export const MyMsgs = (props) => {
  if (!props.isAuth) return <Navigate to="/login" />;

  let MsgElements = props.msgsList.map((it) => (
    <Msgs key={it.id} id={it.id} text={it.text} time={it.time} />
  ));
  return (
    <div className={s.Msgs}>
      {MsgElements}
      <Respons />
      <Formik
        initialValues={{ newMessage: '' }}
        onSubmit={(values, {resetForm}) => {
          props.sendMessageAC(values.newMessage);
          resetForm({values:''})
        }}
      >
        {() => (
          <Form>
            <div>
              <Field
                type="text" name="newMessage" placeholder="Type your message" />
            </div>
            <button type="submit">Send</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
