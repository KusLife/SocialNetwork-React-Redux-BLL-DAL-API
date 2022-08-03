import { Formik, Form, Field } from 'formik';
import { useState } from 'react';
import s from './Profile.module.css';

const MyProfileInfoForm = ({
  initialValues,
  saveProfileInfoThunk,
  setEditMode,
  errorMessage,
}) => {
  let [disabeleBtn, setDisabeleBtn] = useState(false);

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(infoFields) => {
          saveProfileInfoThunk(infoFields);
          {
            setEditMode(false);
          }
        }}
      >
        {() => (
          <Form>
            <button type="submit" disabled={disabeleBtn}>
              Save
            </button>
            {/* {errorMessage && setDisabeleBtn(true)} */}
            <p className={s.error}>{errorMessage}</p>
            <div>
              <b>Name: </b>
              <Field type="text" name="fullName" placeholder="Full Name" />
            </div>
            <div>
              <b>Looking for a job: </b>{' '}
              <Field type="checkbox" name="lookingForAJob" />
            </div>
            <div>
              <Field
                type="text"
                name="lookingForAJobDescription"
                placeholder="Skills"
              />
            </div>
            <div>
              <b>About me: </b>
              <Field type="text" name="aboutMe" placeholder="About me" />
            </div>

            <div>
              <b>Contscts:</b>
              <div>
                {Object.keys(initialValues.contacts).map((key) => {
                  return (
                    <b className={s.contact}>
                      {key}:{' '}
                      <Field
                        key={key}
                        type="text"
                        name={'contacts.' + key}
                        placeholder={key}
                      />
                    </b>
                  );
                })}
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

// const Contact = ({ contactTitle, contactValue }) => {
//     return (
//       <div className={s.contact}>
//         <b>{contactTitle}</b>: {contactValue}
//       </div>
//     );
//   };

export default MyProfileInfoForm;
