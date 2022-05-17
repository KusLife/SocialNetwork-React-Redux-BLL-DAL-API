import React from 'react';
import s from './Events.module.css';
import { Route, Routes } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';

const Events = (props) => {
  let eventsMaping = props.eventsList.map((e) => (
    <div key={e.id}>
      <Routes>
        <Route
          path={'eventsList/events/' + e.id}
          element={<EventsText addPostAC={props.addPostAC} ev={e.ev} key={e.id} />}
        />
      </Routes>
    </div>
  ));
  return <div>{eventsMaping}</div>;
};

let EventsText = (props) => {
  return (
    <div className={s.wraperEv}>
      <div className={s.Ev_Item}>
        <h1>{props.ev}</h1>
        <p>
          Duis laborum nisi officia excepteur incididunt minim anim exercitation
          eiusmod proident ut consequat. Velit laboris cillum anim proident est
          sint duis pariatur laboris aliqua nulla id laborum. Mollit fugiat elit
          reprehenderit enim adipisicing Lorem veniam anim.
        </p>
        <Formik
          initialValues={{ newPost: '' }}
          onSubmit={(values, { resetForm }) => {
            props.addPostAC(values.newPost);
            resetForm({values: ''})
          }}
        >
          {() => (
            <Form>
              <Field type="text" name="newPost" placeholder="Post" />
              <button type="submit">Add new post</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

// let newEventPost = React.createRef();
// let addPost = () => {
//   props.addPostAC();
// };
// let onChangePost = () => {
//   let text = newEventPost.current.value;
//   props.onChangeTextAC(text);
// };

export default Events;
