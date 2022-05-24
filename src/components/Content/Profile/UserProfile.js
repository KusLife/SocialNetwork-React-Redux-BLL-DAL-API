import React from 'react';
import s from './Profile.module.css';
import ketty from '../../../pic/ketty.jpg';
// import PreloaderGif from '../../../common/preloader/PreloaderGif'

const UserProfile = (props) => {
  if (!props.profile) {
    return <div></div>;
    // As well here I can see my profile instead
    //  return <PreloaderGif/> 
  }
  return (
    <div>
      <div className={s.Profile}>
        <div className={s.AvaInf}>
          <div>
            <img
              alt=""
              src={
                props.profile.photos.small != null
                  ? props.profile.photos.small
                  : ketty
              }
            />
          </div>
          {/* Ava and prfl inf */}
          <p>{props.profile.fullName}</p>
        </div>
        <div>
          <h4>
            Looking for a job:
            <p>{props.profile.lookingForAJobDescription}</p>
          </h4>
        </div>

        <div>
          <h4>
            My contacts:
            <p>{props.profile.contacts.facebook}</p>
            <p>{props.profile.contacts.instagram}</p>
          </h4>
        </div>

        <div>
          <p>Status: {props.profile.status}</p>
        </div>

        <div>About me: {props.profile.aboutMe}</div>
        <textarea value="" />
        <button>send</button>
      </div>
    </div>
  );
};

export default UserProfile;
