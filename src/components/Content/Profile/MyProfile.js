import React, { useState } from 'react';
import s from './Profile.module.css';
import Spitz from '../../../pic/Spitz.jpg';
import PreloaderGif from '../../../common/preloader/PreloaderGif';
import MyProfileStatusHooks from './MyProfileStatusHooks';
import MyProfileInfoForm from './MyProfInfoForm';

const MyProfile = (props) => {
  const [editMode, setEditMode] = useState(false);

  if (!props.myProfile) {
    return <PreloaderGif />;
  }

  const onChangingPhoto = (e) => {
    if (e.target.files.length) {
      props.savePhotoThunk(e.target.files[0]);
    }
  };


  return (
    <div className={s.Profile}>
      <div className={s.AvaInf}>
        <div>
          <img
            alt=""
            src={
              props.myProfile.photos.small != null
                ? props.myProfile.photos.small
                : Spitz
            }
          />
          {props.isOwner && <input type={'file'} onChange={onChangingPhoto}/>}
        </div>
      </div>

      <MyProfileStatusHooks
        status={props.status}
        updateStatusThunk={props.updateStatusThunk}
      />

      {editMode ? (
        <MyProfileInfoForm
        initialValues={props.myProfile}
          saveProfileInfoThunk={props.saveProfileInfoThunk}
          setEditMode={setEditMode}
          errorMessage={props.errorMessage}
        />
      ) : (
        <MyProfileInfo
          goToEditMode={setEditMode}
          myProfile={props.myProfile}
          isOwner={props.isOwner}
        />
      )}
    </div>
  );
};

const MyProfileInfo = ({ myProfile, isOwner, goToEditMode }) => {
  return (
    <div>
      {/* Ava and prfl inf */}
      <h4 className={s.myName}>{myProfile.fullName}</h4>

      {isOwner && (
        <div>
          <button onClick={goToEditMode}>Edit</button>
        </div>
      )}

      <div>
        <b>Looking for a job: </b> {myProfile.lookingForAJob ? 'Yes' : 'No'}
      </div>
      {myProfile.lookingForAJob && (
        <div>
          <b>Profesional skills: </b>
          {myProfile.lookingForAJobDescription}
        </div>
      )}
      <div>
        <b>About me: </b>
        {myProfile.aboutMe}
      </div>

      <div>
        <b>Contscts: </b>
        {Object.keys(myProfile.contacts).map((key) => {
          return (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={myProfile.contacts[key]}
            />
          );
        })}
      </div>
    </div>
  );
};

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div className={s.contact}>
      <b>{contactTitle}</b>: {contactValue}
    </div>
  );
};

export default MyProfile;
