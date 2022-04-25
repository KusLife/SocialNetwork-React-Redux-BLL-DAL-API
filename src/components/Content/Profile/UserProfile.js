import React from 'react';
import s from './Profile.module.css';
// import Spitz from '../../../pic/Spitz.jpg';
import PreloaderGif from '../../../common/preloader/PreloaderGif'

const UserProfile = (props) => {
 if (!props.profile) {
   return <x/>
 }
  return (
    <div>
      <div className={s.Profile}>
        <div className={s.AvaInf}>
          <div>
            <img src={props.profile.photos.small} />
          </div>
          {/* Ava and prfl inf */}
          <p>{props.profile.fullName}</p>
        </div>
        <div><h4>Looking for a job: {props.profile.lookingForAJobDescription}</h4></div>
        <div>{props.profile.aboutMe}</div>
        <textarea/>
        <button>send</button>
      </div>
    </div>
  );
};

export default UserProfile
